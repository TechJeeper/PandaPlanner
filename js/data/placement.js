(function (global) {
    const PP = global.PP || (global.PP = {});

    const BASE_IDS = ['panda_station', 'panda_station_naked', 'panda_stack'];
    const DEN_IDS = ['panda_den_air', 'panda_den_h2'];
    const PERCH_IDS = ['panda_perch', 'panda_perch_h2'];
    const STATION_IDS = ['panda_station', 'panda_station_naked'];

    PP.PLACEMENT = { BASE_IDS, DEN_IDS, PERCH_IDS, STATION_IDS };

    function hasAny(ids, selected) {
        return ids.some((id) => selected.has(id));
    }

    function printerById(id) {
        return PP.CATALOG.printers.find((p) => p.id === id);
    }

    function amsById(id) {
        return PP.CATALOG.amsUnits.find((a) => a.id === id);
    }

    function accessoryById(id) {
        return PP.CATALOG.accessories.find((a) => a.id === id);
    }

    PP.compatibleAccessories = function (printerId) {
        return PP.CATALOG.accessories.filter((a) => a.compat.includes(printerId));
    };

    PP.compatibleAms = function (printerId) {
        return PP.CATALOG.amsUnits.filter((a) => a.compat.includes(printerId));
    };

    PP.defaultAmsLocation = function (printer, ams, selected) {
        if (!ams || ams.id === 'none') return 'none';
        if (selected.has('panda_stack') && ams.locations.includes('stack_tray')) return 'stack_tray';
        if (hasAny(PERCH_IDS, selected) && ams.locations.includes('perch')) return 'perch';
        if (hasAny(STATION_IDS, selected) && ams.id === 'ams_lite' && ams.locations.includes('station_drawer')) {
            return 'station_drawer';
        }
        if (ams.locations.includes('on_printer') && (printer.family === 'a1' || printer.family === 'a1mini')) {
            return ams.locations.includes('side') ? 'side' : ams.locations[0];
        }
        if (ams.locations.includes('on_printer')) return 'on_printer';
        if (ams.locations.includes('side')) return 'side';
        return ams.locations[0] || 'none';
    };

    PP.availableAmsLocations = function (printer, ams, selected) {
        if (!ams || ams.id === 'none') return [];
        return ams.locations.filter((loc) => {
            if (loc === 'stack_tray') return selected.has('panda_stack');
            if (loc === 'perch') return hasAny(PERCH_IDS, selected);
            if (loc === 'station_drawer') return hasAny(STATION_IDS, selected);
            if (loc === 'on_printer') {
                return !['a1', 'a1mini'].includes(printer.family) && !hasAny(PERCH_IDS, selected);
            }
            if (loc === 'side') return true;
            return true;
        });
    };

    PP.applyFurnitureToggle = function (currentSet, accessoryId) {
        const next = new Set(currentSet);
        const acc = accessoryById(accessoryId);
        if (!acc) return next;

        if (next.has(accessoryId)) {
            next.delete(accessoryId);
            return next;
        }

        if (STATION_IDS.includes(accessoryId)) {
            STATION_IDS.forEach((id) => next.delete(id));
            next.delete('panda_stack');
        }
        if (accessoryId === 'panda_stack') {
            STATION_IDS.forEach((id) => next.delete(id));
            DEN_IDS.forEach((id) => next.delete(id));
            PERCH_IDS.forEach((id) => next.delete(id));
        }
        if (DEN_IDS.includes(accessoryId)) {
            DEN_IDS.forEach((id) => next.delete(id));
            next.delete('panda_stack');
        }
        if (PERCH_IDS.includes(accessoryId)) {
            PERCH_IDS.forEach((id) => next.delete(id));
            next.delete('panda_stack');
        }

        next.add(accessoryId);
        return next;
    };

    PP.isAccessoryDisabled = function (acc, printer, selected, amsId) {
        if (acc.requiresAms && (!amsId || amsId === 'none')) {
            return 'Requires an AMS unit';
        }
        if (acc.requiresPopstationMini && !selected.has('popstation_mini')) {
            return 'Requires BIQU PopStation Mini';
        }
        if (acc.requiresNakedStation && !selected.has('panda_station_naked')) {
            return 'Requires Naked Panda Station';
        }
        if (acc.requiresStation && !hasAny(STATION_IDS, selected)) {
            return 'Requires Panda Station';
        }
        if (acc.id === 'panda_stack' && hasAny(STATION_IDS.concat(DEN_IDS), selected) && !selected.has('panda_stack')) {
            return 'Stack replaces Station / Den — the printer sits on the top shelf';
        }
        if (STATION_IDS.includes(acc.id) && selected.has('panda_stack')) {
            return 'Station conflicts with Panda Stack';
        }
        if (DEN_IDS.includes(acc.id) && selected.has('panda_stack')) {
            return 'Den cannot sit under a Stack — the printer already sits on the Stack';
        }
        if (PERCH_IDS.includes(acc.id) && selected.has('panda_stack')) {
            return 'Perch is for enclosed printers, not Stack setups';
        }
        return null;
    };

    PP.buildCaption = function ({ printer, selected, ams, amsQty, amsLocation }) {
        const parts = [];
        if (selected.has('panda_stack')) {
            parts.push(printer.name + ' on Panda Stack');
        } else if (hasAny(STATION_IDS, selected) && hasAny(DEN_IDS, selected)) {
            const den = selected.has('panda_den_h2') ? 'Panda Den H2' : 'Panda Den Air';
            const st = selected.has('panda_station_naked') ? 'Naked Station' : 'Panda Station';
            parts.push(printer.name + ' on ' + den + ' on ' + st);
        } else if (hasAny(STATION_IDS, selected)) {
            parts.push(printer.name + ' on ' + (selected.has('panda_station_naked') ? 'Naked Panda Station' : 'Panda Station'));
        } else if (hasAny(DEN_IDS, selected)) {
            parts.push(printer.name + ' on ' + (selected.has('panda_den_h2') ? 'Panda Den H2' : 'Panda Den Air'));
        } else {
            parts.push(printer.name + ' on desk');
        }

        if (ams && ams.id !== 'none') {
            const qty = amsQty > 1 ? amsQty + '× ' : '';
            const locLabel = {
                on_printer: 'on printer lid',
                perch: 'on Panda Perch',
                station_drawer: 'in Station drawers',
                stack_tray: 'on Stack pull-out tray',
                side: 'beside printer',
                none: ''
            }[amsLocation] || '';
            parts.push(qty + ams.name + (locLabel ? ' ' + locLabel : ''));
        }

        if (selected.has('panda_feed_rack')) parts.push('Feed Rack beside station');
        if (selected.has('popstation_mini')) parts.push('PopStation Mini on floor');
        if (selected.has('popstation_mini_wheels')) parts.push('PopStation Mini wheels');
        if (selected.has('panda_cushion_xp')) parts.push('Panda Cushion XP');
        if (selected.has('panda_station_lighting_kit')) parts.push('Station lighting kit');
        return parts.join(' · ');
    };

    PP.footprintNote = function ({ printer, selected }) {
        let w = printer.footprint.w;
        let d = printer.footprint.d;
        let h = printer.footprint.h;
        if (hasAny(STATION_IDS, selected)) {
            w = Math.max(w, 490);
            d = Math.max(d, 510);
            h += 761;
        }
        if (selected.has('panda_den_air')) h += 191;
        if (selected.has('panda_den_h2')) h += 185;
        if (selected.has('panda_stack')) {
            w = Math.max(w, 430);
            d = Math.max(d, 430);
            h += 280;
        }
        if (hasAny(PERCH_IDS, selected)) h += 140;
        if (selected.has('panda_feed_rack')) w += 420;
        if (selected.has('popstation_mini')) w += 460;
        return w + ' × ' + d + ' × ~' + h + ' mm (W×D×H, stacked)';
    };

    PP.resolveConfig = function ({ printerId, selectedIds, amsId, amsQty, amsLocation }) {
        const printer = printerById(printerId);
        const selected = selectedIds instanceof Set ? selectedIds : new Set(selectedIds);
        const ams = amsById(amsId) || amsById('none');
        const warnings = [];

        if (!printer) {
            return { printer: null, selected, ams, amsQty: 0, amsLocation: 'none', warnings, caption: '', footprint: '' };
        }

        if (selected.has('panda_stack') && !BambuAHas(printer.id)) {
            warnings.push('Panda Stack is only for A1 / A1 Mini.');
        }

        let qty = Math.max(0, amsQty || 0);
        if (ams.id === 'none') qty = 0;
        else qty = Math.min(Math.max(1, qty), ams.maxQty || 1);

        let loc = amsLocation;
        const available = PP.availableAmsLocations(printer, ams, selected);
        if (ams.id === 'none') loc = 'none';
        else if (!available.includes(loc)) loc = PP.defaultAmsLocation(printer, ams, selected);

        if (selected.has('panda_guard') && ams.id === 'none') {
            warnings.push('Panda Guard needs an AMS — ceramic necks mount on the AMS feeds.');
        }

        return {
            printer,
            selected,
            ams,
            amsQty: qty,
            amsLocation: loc,
            warnings,
            caption: PP.buildCaption({ printer, selected, ams, amsQty: qty, amsLocation: loc }),
            footprint: PP.footprintNote({ printer, selected })
        };
    };

    function BambuAHas(id) {
        return id === 'a1' || id === 'a1mini';
    }
})(window);
