(function (global) {
    const PP = global.PP || (global.PP = {});

    const ISO = { x: 32, y: 20 };
    PP.ISO = ISO;

    const SIZES = {
        station: { w: 340, h: 168 },
        den_air: { w: 286, h: 74 },
        den_h2: { w: 318, h: 82 },
        stack: { w: 312, h: 292, trayH: 80, post: 18, shelf: 14 },
        perch: { w: 236, h: 34 },
        feed_rack: { w: 176, h: 430 },
        printer: {
            x1: { w: 228, h: 304, isoX: ISO.x, isoY: ISO.y },
            p1: { w: 226, h: 298, isoX: ISO.x, isoY: ISO.y },
            p2: { w: 230, h: 312, isoX: ISO.x, isoY: ISO.y },
            x2: { w: 230, h: 312, isoX: ISO.x, isoY: ISO.y },
            h2: { w: 262, h: 386, isoX: ISO.x, isoY: ISO.y },
            a1: { w: 248, h: 286, isoX: ISO.x, isoY: ISO.y },
            a1mini: { w: 188, h: 252, isoX: ISO.x, isoY: ISO.y },
            u1: { w: 248, h: 318, isoX: ISO.x, isoY: ISO.y }
        },
        ams: {
            ams: { w: 208, h: 46 },
            ams_2_pro: { w: 208, h: 50 },
            ams_lite: { w: 86, h: 116 },
            ams_ht: { w: 68, h: 88 },
            ace: { w: 176, h: 52 },
            vivid: { w: 176, h: 52 }
        }
    };

    PP.SIZES = SIZES;

    function printerSize(family) {
        return SIZES.printer[family] || SIZES.printer.p1;
    }

    function amsSize(id) {
        return SIZES.ams[id] || SIZES.ams.ams;
    }

    PP.buildScene = function (cfg) {
        const nodes = [];
        if (!cfg || !cfg.printer) {
            return { nodes, viewBox: '0 0 560 720', printerNode: null };
        }

        const printer = cfg.printer;
        const selected = cfg.selected;
        const family = printer.family;
        const pSize = printerSize(family);
        const hasStation = selected.has('panda_station') || selected.has('panda_station_naked');
        const stationNaked = selected.has('panda_station_naked');
        const hasDen = selected.has('panda_den_air') || selected.has('panda_den_h2');
        const denVariant = selected.has('panda_den_h2') ? 'h2' : 'air';
        const hasStack = selected.has('panda_stack');
        const hasPerch = selected.has('panda_perch') || selected.has('panda_perch_h2');
        const hasFeed = selected.has('panda_feed_rack');
        const upgrades = {};
        PP.CATALOG.accessories.forEach((a) => {
            if (selected.has(a.id) && a.slot) upgrades[a.slot] = true;
        });

        const DESK_Y = 640;
        const centerX = 270;
        let y = DESK_Y;
        let supportLeft = centerX - pSize.w / 2;
        let supportW = pSize.w;

        nodes.push({ kind: 'desk', x: 20, y: DESK_Y, w: 520, h: 16 });

        if (hasStation) {
            const st = SIZES.station;
            const x = centerX - st.w / 2;
            y -= st.h;
            nodes.push({
                kind: 'station',
                x, y, w: st.w, h: st.h,
                variant: stationNaked ? 'naked' : 'enclosed',
                showAms: cfg.amsLocation === 'station_drawer' && cfg.ams.id !== 'none',
                amsId: cfg.ams.id,
                amsQty: cfg.amsQty
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
        const popcapH = family === 'u1' && selected.has('popcap') ? 92 : 0;

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
                const aSize = amsSize(cfg.ams.id);
                const qty = Math.min(cfg.amsQty, 2);
                const gap = 10;
                const totalW = qty * aSize.w + (qty - 1) * gap;
                let ax = stackX + (st.w - totalW) / 2;
                const ay = stackBottom - st.trayH - 8 + (st.trayH - aSize.h) / 2;
                for (let i = 0; i < qty; i++) {
                    nodes.push({
                        kind: 'ams',
                        x: ax,
                        y: ay,
                        w: aSize.w,
                        h: aSize.h,
                        variant: cfg.ams.id,
                        guard: upgrades.ams_guard,
                        index: i
                    });
                    ax += aSize.w + gap;
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
            const perch = SIZES.perch;
            const px = printerX + (pSize.w - perch.w) / 2;
            const py = printerY - perch.h - 8;
            nodes.push({ kind: 'perch', x: px, y: py, w: perch.w, h: perch.h, variant: family === 'h2' ? 'h2' : 'x1' });

            if (cfg.ams.id !== 'none' && cfg.amsLocation === 'perch') {
                const aSize = amsSize(cfg.ams.id);
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
                        index: i
                    });
                    ax += aw + gap;
                }
            }
        } else if (cfg.ams.id !== 'none' && cfg.amsLocation === 'on_printer') {
            const aSize = amsSize(cfg.ams.id);
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
                    onLid: true
                });
                ax += aw + gap;
            }
        } else if (cfg.ams.id !== 'none' && cfg.amsLocation === 'side') {
            const aSize = amsSize(cfg.ams.id);
            nodes.push({
                kind: 'ams',
                x: printerX + pSize.w + 18,
                y: printerY + pSize.h - aSize.h - 8,
                w: aSize.w,
                h: aSize.h,
                variant: cfg.ams.id,
                guard: upgrades.ams_guard,
                index: 0
            });
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
                y: DESK_Y - fr.h,
                w: fr.w,
                h: fr.h
            });
        }

        if (upgrades.screen) {
            nodes.push({
                kind: 'touch',
                x: printerX - 70,
                y: printerY + pSize.h * 0.42,
                w: 54,
                h: 38
            });
        }

        let minX = 0, minY = 0, maxX = 560, maxY = 680;
        nodes.forEach((n) => {
            minX = Math.min(minX, n.x - 24);
            minY = Math.min(minY, n.y - ISO.y - 20);
            maxX = Math.max(maxX, n.x + n.w + ISO.x + 24);
            maxY = Math.max(maxY, n.y + n.h + 20);
        });
        const pad = 16;
        const viewBox = [minX - pad, minY - pad, (maxX - minX) + pad * 2, (maxY - minY) + pad * 2].join(' ');

        return { nodes, viewBox, printerNode, supportLeft, supportW };
    };
})(window);
