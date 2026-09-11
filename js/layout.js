(function (global) {
    const PP = global.PP || (global.PP = {});

    const ISO = { x: 28, y: 18 };
    PP.ISO = ISO;

    // Official product sizes in mm. One scale so Station (761) is taller than an X1 (457).
    const SCALE = 0.52;
    function px(mm) {
        return Math.round(mm * SCALE);
    }

    const MM = {
        station: { w: 490, d: 510, h: 761, caster: 52, drawer: 60 },
        den_air: { w: 456, d: 388, h: 191 },
        den_h2: { w: 495, d: 595, h: 185 },
        stack: { w: 420, d: 340, h: 360, tray: 250, shelf: 16, post: 18 },
        perch: { w: 396, d: 360, h: 136 },
        perch_h2: { w: 754, d: 460, h: 145 },
        feed_rack: { w: 635, d: 330, h: 1320 },
        popstation_mini: { w: 460, d: 330, h: 430 },
        popcap: { w: 421, d: 506, h: 315 },
        touch: { w: 140, d: 22, h: 88 },
        ams: { w: 368, d: 283, h: 224 },
        ams_2_pro: { w: 372, d: 280, h: 226 },
        ams_lite: { w: 397, d: 208, h: 342 },
        ams_ht: { w: 114, d: 280, h: 245 },
        ace: { w: 360, d: 260, h: 190 },
        vivid: { w: 360, d: 260, h: 190 }
    };

    const SIZES = {
        station: { w: px(MM.station.w), h: px(MM.station.h - MM.station.caster), wheelH: px(MM.station.caster), drawerH: px(MM.station.drawer) },
        den_air: { w: px(MM.den_air.w), h: px(MM.den_air.h) },
        den_h2: { w: px(MM.den_h2.w), h: px(MM.den_h2.h) },
        stack: { w: px(MM.stack.w), h: px(MM.stack.h), trayH: px(MM.stack.tray), post: px(MM.stack.post), shelf: px(MM.stack.shelf) },
        perch: { w: px(MM.perch.w), h: px(MM.perch.h) },
        perch_h2: { w: px(MM.perch_h2.w), h: px(MM.perch_h2.h) },
        feed_rack: { w: px(MM.feed_rack.w), h: px(MM.feed_rack.h) },
        popstation_mini: { w: px(MM.popstation_mini.w), h: px(MM.popstation_mini.h) },
        popcapH: px(MM.popcap.h),
        touch: { w: px(MM.touch.w), h: px(MM.touch.h) },
        ams: {
            ams: { w: px(MM.ams.w), h: px(MM.ams.h) },
            ams_2_pro: { w: px(MM.ams_2_pro.w), h: px(MM.ams_2_pro.h) },
            ams_lite: { w: px(MM.ams_lite.w), h: px(MM.ams_lite.h) },
            ams_ht: { w: px(MM.ams_ht.w), h: px(MM.ams_ht.h) },
            ace: { w: px(MM.ace.w), h: px(MM.ace.h) },
            vivid: { w: px(MM.vivid.w), h: px(MM.vivid.h) }
        }
    };

    PP.SCALE = SCALE;
    PP.MM = MM;
    PP.SIZES = SIZES;

    function printerSize(printer) {
        const fp = (printer && printer.footprint) || { w: 389, d: 389, h: 458 };
        return { w: px(fp.w), h: px(fp.h), isoX: ISO.x, isoY: ISO.y };
    }

    function amsSize(id, placement) {
        const s = SIZES.ams[id] || SIZES.ams.ams;
        if (id === 'ams_ht' && placement === 'side') {
            return { w: px(MM.ams_ht.d), h: px(MM.ams_ht.h) };
        }
        return s;
    }

    PP.buildScene = function (cfg) {
        const nodes = [];
        if (!cfg || !cfg.printer) {
            return { nodes, viewBox: '0 0 560 720', printerNode: null };
        }

        const printer = cfg.printer;
        const selected = cfg.selected;
        const family = printer.family;
        const pSize = printerSize(printer);
        const hasStation = selected.has('panda_station') || selected.has('panda_station_naked');
        const stationNaked = selected.has('panda_station_naked');
        const hasDen = selected.has('panda_den_air') || selected.has('panda_den_h2');
        const denVariant = selected.has('panda_den_h2') ? 'h2' : 'air';
        const hasStack = selected.has('panda_stack');
        const hasPerch = selected.has('panda_perch') || selected.has('panda_perch_h2');
        const hasFeed = selected.has('panda_feed_rack');
        const hasPopstationMini = family === 'u1' && selected.has('popstation_mini');
        const upgrades = {};
        PP.CATALOG.accessories.forEach((a) => {
            if (selected.has(a.id) && a.slot) upgrades[a.slot] = true;
        });

        const DESK_Y = 980;
        const CASTER_H = SIZES.station.wheelH;
        const floorY = hasStation ? DESK_Y + CASTER_H : DESK_Y;
        const centerX = 320;
        let y = DESK_Y;
        let supportLeft = centerX - pSize.w / 2;
        let supportW = pSize.w;

        if (!hasStation) {
            nodes.push({ kind: 'desk', x: 40, y: DESK_Y, w: 600, h: 16 });
        }

        if (hasStation) {
            const st = SIZES.station;
            const x = centerX - st.w / 2;
            y -= st.h;
            nodes.push({
                kind: 'station',
                x, y, w: st.w, h: st.h,
                wheelH: CASTER_H,
                drawerH: SIZES.station.drawerH,
                variant: stationNaked ? 'naked' : 'enclosed',
                showAms: cfg.amsLocation === 'station_drawer' && cfg.ams.id !== 'none',
                amsId: cfg.ams.id,
                amsQty: cfg.amsQty,
                airCushion: upgrades.station_cushion,
                lightingKit: upgrades.station_lighting
            });
            supportLeft = x + 16;
            supportW = st.w - 32;
        }

        if (hasDen && !hasStack) {
            const den = denVariant === 'h2' ? SIZES.den_h2 : SIZES.den_air;
            const x = centerX - den.w / 2;
            y -= den.h;
            nodes.push({ kind: 'den', x, y, w: den.w, h: den.h, variant: denVariant });
            supportLeft = x + 8;
            supportW = den.w - 16;
        }

        let printerX = centerX - pSize.w / 2;
        let printerY;
        const popcapH = family === 'u1' && selected.has('popcap') ? SIZES.popcapH : 0;

        if (hasStack) {
            const st = SIZES.stack;
            const stackX = centerX - st.w / 2;
            const stackBottom = y;
            const stackTop = stackBottom - st.h;
            nodes.push({
                kind: 'stack',
                x: stackX,
                y: stackTop,
                w: st.w,
                h: st.h,
                trayY: stackBottom - st.trayH - 8,
                trayH: st.trayH,
                post: st.post,
                shelf: st.shelf
            });

            if (cfg.ams.id !== 'none' && cfg.amsLocation === 'stack_tray') {
                const aSize = amsSize(cfg.ams.id, 'stack_tray');
                const qty = Math.min(cfg.amsQty, 2);
                const gap = 10;
                const aw = Math.min(aSize.w, (st.w - 16 - gap * (qty - 1)) / qty);
                const totalW = qty * aw + (qty - 1) * gap;
                let ax = stackX + (st.w - totalW) / 2;
                const ay = stackBottom - st.trayH - 8 + Math.max(4, (st.trayH - aSize.h) / 2);
                for (let i = 0; i < qty; i++) {
                    nodes.push({
                        kind: 'ams',
                        x: ax,
                        y: ay,
                        w: aw,
                        h: aSize.h,
                        variant: cfg.ams.id,
                        guard: upgrades.ams_guard,
                        index: i,
                        placement: 'stack_tray'
                    });
                    ax += aw + gap;
                }
            }

            printerX = centerX - pSize.w / 2;
            printerY = stackTop - pSize.h - popcapH;
            y = printerY;
        } else {
            printerY = y - pSize.h - popcapH;
            y = printerY;
        }

        const printerNode = {
            kind: 'printer',
            x: printerX,
            y: printerY,
            w: pSize.w,
            h: pSize.h + popcapH,
            bodyH: pSize.h,
            popcapH,
            isoX: pSize.isoX || 0,
            isoY: pSize.isoY || 0,
            family,
            printerId: printer.id,
            upgrades,
            underArmor: selected.has('panda_under_armor')
        };
        nodes.push(printerNode);

        if (hasPerch && cfg.amsLocation !== 'stack_tray') {
            const perch = family === 'h2' ? SIZES.perch_h2 : SIZES.perch;
            const px = printerX + (pSize.w - perch.w) / 2;
            const py = printerY - perch.h - 8;
            nodes.push({ kind: 'perch', x: px, y: py, w: perch.w, h: perch.h, variant: family === 'h2' ? 'h2' : 'x1' });

            if (cfg.ams.id !== 'none' && cfg.amsLocation === 'perch') {
                const aSize = amsSize(cfg.ams.id, 'perch');
                const qty = Math.min(cfg.amsQty, cfg.ams.id === 'ams_ht' ? 4 : 2);
                const gap = 8;
                const totalW = qty * Math.min(aSize.w, perch.w / qty - 4) + (qty - 1) * gap;
                let ax = px + (perch.w - totalW) / 2;
                const aw = Math.min(aSize.w, perch.w / qty - 6);
                for (let i = 0; i < qty; i++) {
                    nodes.push({
                        kind: 'ams',
                        x: ax,
                        y: py - aSize.h - 2,
                        w: aw,
                        h: aSize.h,
                        variant: cfg.ams.id,
                        guard: upgrades.ams_guard,
                        index: i,
                        placement: 'perch'
                    });
                    ax += aw + gap;
                }
            }
        } else if (cfg.ams.id !== 'none' && cfg.amsLocation === 'on_printer') {
            const aSize = amsSize(cfg.ams.id, 'on_printer');
            const qty = Math.min(cfg.amsQty, 2);
            const gap = 8;
            const aw = Math.min(aSize.w, pSize.w - 16);
            const totalW = qty * aw + (qty - 1) * gap;
            let ax = printerX + (pSize.w - totalW) / 2;
            for (let i = 0; i < qty; i++) {
                nodes.push({
                    kind: 'ams',
                    x: ax,
                    y: printerY - aSize.h + 6,
                    w: aw,
                    h: aSize.h,
                    variant: cfg.ams.id,
                    guard: upgrades.ams_guard,
                    index: i,
                    onLid: true,
                    placement: 'on_printer'
                });
                ax += aw + gap;
            }
        } else if (cfg.ams.id !== 'none' && cfg.amsLocation === 'side') {
            const aSize = amsSize(cfg.ams.id, 'side');
            const qty = Math.min(cfg.amsQty, cfg.ams.id === 'ams_ht' ? 4 : 1);
            const gap = 10;
            let ax = printerX + pSize.w + 18;
            for (let i = 0; i < qty; i++) {
                nodes.push({
                    kind: 'ams',
                    x: ax,
                    y: printerY + pSize.h - aSize.h - 8,
                    w: aSize.w,
                    h: aSize.h,
                    variant: cfg.ams.id,
                    guard: upgrades.ams_guard,
                    index: i,
                    placement: 'side'
                });
                ax += aSize.w + gap;
            }
        }

        if (hasFeed) {
            const fr = SIZES.feed_rack;
            const rightEdge = Math.max(
                printerX + pSize.w + (pSize.isoX || ISO.x),
                ...nodes.filter((n) => n.kind !== 'desk').map((n) => n.x + n.w + (n.isoX || 0))
            );
            nodes.push({
                kind: 'feed_rack',
                x: rightEdge + 110,
                y: floorY - fr.h,
                w: fr.w,
                h: fr.h
            });
        }

        if (hasPopstationMini) {
            const ps = SIZES.popstation_mini;
            const rightEdge = Math.max(
                printerX + pSize.w + (pSize.isoX || ISO.x),
                ...nodes.filter((n) => n.kind !== 'desk').map((n) => n.x + n.w + (n.isoX || 0))
            );
            nodes.push({
                kind: 'popstation_mini',
                x: rightEdge + 40,
                y: floorY - ps.h,
                w: ps.w,
                h: ps.h,
                wheels: upgrades.popstation_wheels
            });
        }

        if (upgrades.screen) {
            nodes.push({
                kind: 'touch',
                x: printerX - 70,
                y: printerY + pSize.h * 0.42,
                w: SIZES.touch.w,
                h: SIZES.touch.h
            });
        }

        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        nodes.forEach((n) => {
            minX = Math.min(minX, n.x - 16);
            minY = Math.min(minY, n.y - ISO.y - 12);
            maxX = Math.max(maxX, n.x + n.w + (n.isoX || ISO.x) + 16);
            maxY = Math.max(maxY, n.y + n.h + (n.wheelH || 0) + 16);
        });
        if (!isFinite(minX)) {
            minX = 0; minY = 0; maxX = 560; maxY = 680;
        }
        const pad = 20;
        const viewBox = [minX - pad, minY - pad, (maxX - minX) + pad * 2, (maxY - minY) + pad * 2].join(' ');

        return { nodes, viewBox, printerNode, supportLeft, supportW };
    };
})(window);
