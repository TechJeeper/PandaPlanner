(function (global) {
    const PP = global.PP || (global.PP = {});

    const BambuEnclosed = ['x1c', 'x1e', 'p1s', 'p1p', 'p2s', 'x2d'];
    const BambuA = ['a1', 'a1mini'];
    const BambuH2 = ['h2d', 'h2s', 'h2c'];
    const BambuPX = ['x1c', 'x1e', 'p1s', 'p1p', 'p2s', 'x2d'];
    const BambuAPX = BambuA.concat(BambuPX);
    const AllBambu = BambuAPX.concat(BambuH2);
    const AllPrinters = AllBambu.concat(['snapmaker_u1']);

    PP.FAMILIES = {
        BambuEnclosed, BambuA, BambuH2, BambuPX, BambuAPX, AllBambu, AllPrinters
    };

    PP.CATALOG = {
        printers: [
            { id: 'x1c', name: 'Bambu Lab X1 Carbon', family: 'x1', imgLabel: 'Enclosed CoreXY · 256³', footprint: { w: 389, d: 389, h: 457 }, defaultAms: 'ams_2_pro', photo: 'img/printers/x1.png' },
            { id: 'x1e', name: 'Bambu Lab X1E', family: 'x1', imgLabel: 'Enterprise enclosed CoreXY', footprint: { w: 389, d: 389, h: 457 }, defaultAms: 'ams_2_pro', photo: 'img/printers/x1.png' },
            { id: 'p1s', name: 'Bambu Lab P1S', family: 'p1', imgLabel: 'Enclosed CoreXY · 256³', footprint: { w: 389, d: 389, h: 458 }, defaultAms: 'ams_2_pro', photo: 'img/printers/p1.png' },
            { id: 'p1p', name: 'Bambu Lab P1P', family: 'p1', imgLabel: 'Open CoreXY · 256³', footprint: { w: 386, d: 389, h: 458 }, defaultAms: 'ams', photo: 'img/printers/p1.png' },
            { id: 'p2s', name: 'Bambu Lab P2S', family: 'p2', imgLabel: 'Next-gen enclosed CoreXY', footprint: { w: 392, d: 406, h: 478 }, defaultAms: 'ams_2_pro', photo: 'img/printers/p2s.png' },
            { id: 'x2d', name: 'Bambu Lab X2D', family: 'x2', imgLabel: 'Flagship enclosed CoreXY', footprint: { w: 392, d: 406, h: 478 }, defaultAms: 'ams_2_pro', photo: 'img/printers/x2d.png' },
            { id: 'a1', name: 'Bambu Lab A1', family: 'a1', imgLabel: 'Bed slinger · AMS Lite', footprint: { w: 424, d: 423, h: 430 }, defaultAms: 'ams_lite', photo: 'img/printers/a1.png?v=3' },
            { id: 'a1mini', name: 'Bambu Lab A1 Mini', family: 'a1mini', imgLabel: 'Compact bed slinger', footprint: { w: 303, d: 364, h: 380 }, defaultAms: 'ams_lite', photo: 'img/printers/a1_mini.png?v=3' },
            { id: 'h2d', name: 'Bambu Lab H2D', family: 'h2', imgLabel: 'Dual-nozzle enclosed', footprint: { w: 492, d: 514, h: 626 }, defaultAms: 'ams_2_pro', photo: 'img/printers/h2d.png' },
            { id: 'h2s', name: 'Bambu Lab H2S', family: 'h2', imgLabel: 'Single-nozzle H2 series', footprint: { w: 492, d: 514, h: 626 }, defaultAms: 'ams_2_pro', photo: 'img/printers/h2d.png' },
            { id: 'h2c', name: 'Bambu Lab H2C', family: 'h2', imgLabel: 'H2 series companion', footprint: { w: 492, d: 514, h: 626 }, defaultAms: 'ams_2_pro', photo: 'img/printers/h2c.png' },
            { id: 'snapmaker_u1', name: 'Snapmaker U1', family: 'u1', imgLabel: '4-tool SnapSwap CoreXY', footprint: { w: 400, d: 400, h: 420 }, defaultAms: 'none', photo: 'img/printers/u1.png?v=3' }
        ],

        amsUnits: [
            { id: 'none', name: 'No AMS', price: 0, link: '', desc: 'Single-color printing without a multi-material unit.', compat: AllPrinters, locations: [], maxQty: 0, photo: '' },
            { id: 'ams', name: 'Bambu Lab AMS', price: 349.00, link: '', desc: 'Original 4-slot automatic material system. Sits on enclosed printers or in Station drawers.', compat: BambuEnclosed.concat(BambuH2), locations: ['on_printer', 'perch', 'station_drawer', 'stack_tray'], maxQty: 2, photo: 'https://store.bambulab.com/cdn/shop/files/AMS.png' },
            { id: 'ams_2_pro', name: 'Bambu Lab AMS 2 Pro', price: 359.00, link: '', desc: 'Active drying AMS. On the printer, on Perch, in Station drawers, or on the Stack tray.', compat: AllBambu, locations: ['on_printer', 'perch', 'station_drawer', 'stack_tray'], maxQty: 2, photo: 'https://store.bambulab.com/cdn/shop/files/AMS2Pro.png' },
            { id: 'ams_lite', name: 'Bambu Lab AMS Lite', price: 199.00, link: '', desc: '4-spool unit that sits beside or behind A1 / A1 Mini — not on the printer lid. Stack tray is sized for AMS 2 Pro.', compat: BambuA, locations: ['side', 'station_drawer', 'stack_tray'], maxQty: 1, photo: 'https://store.bambulab.com/cdn/shop/files/AMSLite.png' },
            { id: 'ams_ht', name: 'Bambu Lab AMS HT', price: 149.00, link: '', desc: 'High-temp single-slot dryer. Often parked on Perch H2 or beside the H2 series.', compat: BambuEnclosed.concat(BambuH2), locations: ['perch', 'side', 'station_drawer'], maxQty: 4, photo: 'https://store.bambulab.com/cdn/shop/files/AMSHT.png' },
            { id: 'ace', name: 'ACE (Stack tray)', price: 0, link: 'https://biqu.equipment/products/biqu-panda-stack-multi-device-storage-durable-diy', desc: 'Third-party ACE unit — Panda Stack lower tray only.', compat: BambuA, locations: ['stack_tray'], maxQty: 2, photo: '' },
            { id: 'vivid', name: 'ViViD (Stack tray)', price: 0, link: 'https://biqu.equipment/products/biqu-panda-stack-multi-device-storage-durable-diy', desc: 'ViViD dryer — Panda Stack lower tray only.', compat: BambuA, locations: ['stack_tray'], maxQty: 2, photo: '' }
        ],

        accessories: [
            { id: 'panda_touch', name: 'Panda Touch', price: 59.00, link: 'https://biqu.equipment/products/bigtreetech-panda-touch', desc: '5" wireless touchscreen for multi-printer control and AMS management.', compat: AllBambu, slot: 'screen', category: 'upgrade', group: 'on-printer', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/PandaTouchimage_1.png?v=1760705370' },
            { id: 'panda_knomi', name: 'Panda Knomi V2.0', price: 34.95, link: 'https://biqu.equipment/products/panda-knomi', desc: 'Round toolhead display with animated status UI.', compat: AllBambu, slot: 'toolhead_front', category: 'upgrade', group: 'on-printer', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/1060000833-Panda_Knomi_3D_3_1b77712f-0546-4c5a-ad63-c68be3dec56f.jpg?v=1760706035' },
            { id: 'panda_revo', name: 'Panda Revo Hotend', price: 139.00, link: 'https://biqu.equipment/products/biqu-panda-hotend', desc: 'High-flow drop-in hotend for X1 / P1 toolheads.', compat: ['x1c', 'x1e', 'p1s', 'p1p'], slot: 'toolhead_internal', category: 'upgrade', group: 'on-printer', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/X1C_P1_6.png?v=1765372133' },
            { id: 'panda_lux', name: 'Panda Lux LED Kit', price: 12.95, link: 'https://biqu.equipment/products/panda-lux-led-upgrade-kit', desc: 'Magnetic 6000K chamber light bar for X1 / P1 / A1 (stock header).', compat: ['x1c', 'x1e', 'p1s', 'p1p', 'a1', 'a1mini'], slot: 'frame_top', category: 'upgrade', group: 'on-printer', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/led_strip_for_bambu_p1.jpg?v=1747056776' },
            { id: 'cryogrip_bambu', name: 'CryoGrip Pro Buildplate', price: 24.99, link: 'https://biqu.equipment/products/biqu-panda-buildplate-cryogrip-pro', desc: 'Double-sided high-magnetic PEI spring steel.', compat: AllBambu, slot: 'buildplate', category: 'upgrade', group: 'plates', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/3010200040-CryoGrip_Pro_1000_2.jpg?v=1760705893' },
            { id: 'cryogrip_snapmaker', name: 'CryoGrip Pro (Snapmaker)', price: 39.99, link: 'https://biqu.equipment/products/biqu-cryogrip-pro-buildplate-double-sided-7-layer-composite-with-high-magnetic-spring-steel-low-energy-printing-for-snapmaker-u1', desc: 'CryoGrip plate sized for Snapmaker U1.', compat: ['snapmaker_u1'], slot: 'buildplate', category: 'upgrade', group: 'plates', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/3010200090-FrostbiteSnapmakerU1_1000_20251202_4.jpg?v=1765369647' },
            { id: 'panda_claw', name: 'Panda Claw Extruder Gear', price: 29.99, link: 'https://biqu.equipment/products/biqu-panda-claw-extruder-gear', desc: 'Nano-coated hardened steel extruder gears.', compat: AllBambu, slot: 'extruder', category: 'upgrade', group: 'on-printer', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/1060000712-Panda_Claw_X1P1_20240902_1000_2.jpg?v=1757556816' },
            { id: 'popcap', name: 'BIQU PopCap', price: 139.99, link: 'https://biqu.equipment/products/biqu-popcap-snapmaker-u1-top-cover', desc: 'Clear 120°C PC top cover that sits on the U1. Magnetic front hatch, tool tray on top, ports for Panda Breath / Touch.', compat: ['snapmaker_u1'], slot: 'enclosure_top', category: 'upgrade', group: 'snapmaker', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/BIQU_PopCap_Installed_on_Snapmaker_U1_3D_Printer.jpg?v=1774229915' },
            { id: 'panda_diaper', name: 'Panda Diaper Waste Pads', price: 32.99, link: 'https://biqu.equipment/products/biqu-panda-diaper-waste-pads-reusable-easy-clean-full-coverage-for-snapmaker-u1', desc: 'Reusable full-coverage waste pads for Snapmaker U1.', compat: ['snapmaker_u1'], slot: 'waste_bin', category: 'upgrade', group: 'snapmaker', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/1990000114-DiaperU1_1000_1.jpg?v=1769218153' },
            { id: 'popstation_mini', name: 'BIQU PopStation Mini', price: 0, link: 'https://biqu.equipment/products/biqu-popstation-mini-sealed-dual-drawer-storage-cabinet-for-4-filament-spools', desc: 'Sealed dual-drawer storage cabinet for 4 filament spools for Snapmaker U1.', compat: ['snapmaker_u1'], slot: 'filament_storage', category: 'upgrade', group: 'snapmaker', photo: '' },
            { id: 'panda_breath', name: 'Panda Breath', price: 12.90, link: 'https://biqu.equipment/products/biqu-panda-breath-smart-chamber-heater', desc: 'Chamber heater and HEPA filtration assist.', compat: ['x1c', 'x1e', 'p1s', 'p1p', 'a1'], slot: 'chamber_back', category: 'upgrade', group: 'on-printer', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/1060000855-PandaBreath_1000_7.png?v=1765359761' },
            { id: 'panda_guard', name: 'Panda Guard (Ceramic)', price: 13.00, link: 'https://biqu.equipment/products/biqu-ams-upgrades-multi-material', desc: 'Ceramic AMS feed necks. Requires an AMS unit.', compat: AllBambu, slot: 'ams_guard', category: 'upgrade', group: 'on-printer', requiresAms: true, photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/PandaAMSCable_1000_3.jpg?v=1745899636' },
            { id: 'panda_status', name: 'Panda Status Bar', price: 24.95, link: 'https://biqu.equipment/products/biqu-panda-status-magnetic-mount-customizable-rgb', desc: 'Magnetic RGB LED bar that mounts under the bed.', compat: ['x1c', 'x1e', 'p1s', 'p1p', 'a1', 'a1mini'], slot: 'under_bed', category: 'upgrade', group: 'on-printer', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/11_a93a0df3-aa12-42c5-b994-38c3852efc69.jpg?v=1760705937' },
            { id: 'panda_branch', name: 'Panda Branch Plus', price: 74.95, link: 'https://biqu.equipment/products/biqu-power-supply-solutions', desc: '10-channel powered hub with Web UI / MQTT for the Panda Verse.', compat: AllBambu, slot: 'usb_hub', category: 'upgrade', group: 'power', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/1_5_44fb675d-8a6b-4403-bdc1-dd609466dd62.png?v=1757867600' },
            { id: 'panda_pwr', name: 'Panda PWR', price: 29.99, link: 'https://biqu.equipment/products/biqu-power-supply-solutions', desc: 'Smart power monitor and switched USB, pairs with Panda Touch.', compat: AllBambu, slot: 'power', category: 'upgrade', group: 'power', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/1_5_44fb675d-8a6b-4403-bdc1-dd609466dd62.png?v=1757867600' },
            { id: 'panda_hub', name: 'Panda Hub', price: 19.99, link: 'https://biqu.equipment/products/biqu-power-supply-solutions', desc: 'Dual USB expander for cameras and lights.', compat: AllBambu, slot: 'usb_hub', category: 'upgrade', group: 'power', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/1_5_44fb675d-8a6b-4403-bdc1-dd609466dd62.png?v=1757867600' },

            { id: 'panda_station', name: 'Panda Station', price: 349.99, link: 'https://biqu.equipment/products/biqu-panda-verse-storage-solution-for-x1-p1', desc: 'Mobile cabinet the printer sits on. Drawers hold AMS units and filament. Fits devices within 490×510 mm.', compat: AllBambu, slot: 'station', category: 'storage', group: 'furniture', role: 'base', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/1000_14_debdbb4a-ccb0-4c9b-bf7a-0b6952d69446.jpg?v=1758025930' },
            { id: 'panda_station_naked', name: 'Naked Panda Station', price: 299.99, link: 'https://biqu.equipment/products/biqu-panda-verse-storage-solution-for-x1-p1', desc: 'Open-frame Station without PC enclosure panels. Same sit-on cabinet role.', compat: AllBambu, slot: 'station', category: 'storage', group: 'furniture', role: 'base', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/1000_14_debdbb4a-ccb0-4c9b-bf7a-0b6952d69446.jpg?v=1758025930' },
            { id: 'panda_den_air', name: 'Panda Den Air', price: 129.99, link: 'https://biqu.equipment/products/biqu-panda-den-air-storage-box', desc: 'Steel waste + tool base. The A / P / X printer sits directly on it. Can sit on a Station.', compat: BambuAPX, slot: 'den', category: 'storage', group: 'furniture', role: 'base', variant: 'air', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/4_a36a9c73-66e3-42b2-88bc-e21ad0dd0c66.jpg?v=1771999816' },
            { id: 'panda_den_h2', name: 'Panda Den H2', price: 199.99, link: 'https://biqu.equipment/products/biqu-panda-den-h2-storage-box', desc: 'Larger Den for H2 (also A / P / X). Printer sits on top; waste chute aligns to the machine.', compat: AllBambu, slot: 'den', category: 'storage', group: 'furniture', role: 'base', variant: 'h2', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/5_21200776-93df-4869-badf-a47b2824fb5d.jpg?v=1771999914' },
            { id: 'panda_stack', name: 'Panda Stack', price: 149.99, link: 'https://biqu.equipment/products/biqu-panda-stack-multi-device-storage-durable-diy', desc: 'Dual-layer rack for A1 / A1 Mini: printer on the top shelf, AMS / AMS 2 Pro on the pull-out tray.', compat: BambuA, slot: 'stack', category: 'storage', group: 'furniture', role: 'base', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/1060000848-Panda_Stack_1000_1.jpg?v=1762774508' },
            { id: 'panda_perch', name: 'Panda Perch', price: 155.99, link: 'https://biqu.equipment/products/biqu-panda-perch-aluminum-mount-supports', desc: 'Overhead AMS mount for X1 / P1 / P2 / X2. Holds 1–2 AMS units above the printer, not a spool rack.', compat: BambuEnclosed, slot: 'perch', category: 'storage', group: 'furniture', role: 'overhead', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/12_076a0aaa-ff7f-4c8c-ae54-fce9b2b56b08.jpg?v=1758938797' },
            { id: 'panda_perch_h2', name: 'Panda Perch H2', price: 155.99, link: 'https://biqu.equipment/products/biqu-panda-verse-storage-solution-for-h2d', desc: 'H2-series Perch. AMS / AMS 2 Pro sit on rails above the H2, not on the lid.', compat: BambuH2, slot: 'perch', category: 'storage', group: 'furniture', role: 'overhead', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/1000_1_fcdec1a6-3461-46e0-aab5-047b7ad82e24.jpg?v=1758026172' },
            { id: 'panda_feed_rack', name: 'Panda Feed Rack', price: 45.99, link: 'https://biqu.equipment/products/biqu-panda-feed-rack-stackable-organizer-for', desc: 'Tall 5-tier filament tower: 3 spool shelves and 2 box shelves. Sits on the floor beside the workstation, not over the printer.', compat: AllPrinters, slot: 'feed_rack', category: 'storage', group: 'furniture', role: 'side', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/PandaFeedRack_Product_application_display_side.png?v=1759238236' },
            { id: 'panda_under_armor', name: 'Panda Under Armor H2', price: 49.99, link: 'https://biqu.equipment/products/biqu-panda-verse-storage-solution-for-h2d', desc: 'Sensor-safe armor / under-cover kit for H2 series.', compat: BambuH2, slot: 'under_armor', category: 'storage', group: 'furniture', role: 'on_printer', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/1000_1_fcdec1a6-3461-46e0-aab5-047b7ad82e24.jpg?v=1758026172' },
        ]
    };

    PP.GROUP_LABELS = {
        furniture: 'Panda Verse furniture',
        'on-printer': 'On-printer upgrades',
        power: 'Power & hubs',
        plates: 'Build plates',
        snapmaker: 'Snapmaker-only'
    };

    // Shopify variant IDs from biqu.equipment product JSON (China / default SKU).
    // Multi-option products pick a family-specific variant so Add to Cart lands on the right SKU.
    PP.CART = {
        panda_touch: { variantId: 40831241781346, handle: 'bigtreetech-panda-touch' },
        panda_knomi: {
            handle: 'panda-knomi',
            byFamily: {
                a1: 41779984334946,
                a1mini: 41779984334946,
                p1: 41779984302178,
                p2: 41779984302178,
                x1: 41779984269410,
                x2: 41779984269410,
                h2: 41779984367714
            }
        },
        panda_revo: { variantId: 40464525492322, handle: 'biqu-panda-hotend' },
        panda_lux: {
            handle: 'panda-lux-led-upgrade-kit',
            byFamily: {
                x1: 41563727626338,
                p1: 41563727626338,
                p2: 41563727626338,
                x2: 41563727626338,
                a1: 41563727659106,
                a1mini: 41563727691874
            }
        },
        cryogrip_bambu: {
            handle: 'biqu-panda-buildplate-cryogrip-pro',
            byFamily: {
                x1: 41446028902498,
                p1: 41446028902498,
                p2: 41446028902498,
                x2: 41446028902498,
                a1: 41446028902498,
                a1mini: 41574696157282,
                h2: 41997159530594
            }
        },
        cryogrip_snapmaker: { handle: 'biqu-cryogrip-pro-buildplate-double-sided-7-layer-composite-with-high-magnetic-spring-steel-low-energy-printing-for-snapmaker-u1' },
        panda_claw: {
            handle: 'biqu-panda-claw-extruder-gear',
            byFamily: {
                x1: 41425356783714,
                p1: 41425356783714,
                p2: 41425356783714,
                x2: 41425356783714,
                a1: 41425356750946,
                a1mini: 41425356750946
            }
        },
        popcap: { variantId: 42639960834146, handle: 'biqu-popcap-snapmaker-u1-top-cover' },
        panda_diaper: { variantId: 42480766222434, handle: 'biqu-panda-diaper-waste-pads-reusable-easy-clean-full-coverage-for-snapmaker-u1' },
        popstation_mini: { handle: 'biqu-popstation-mini-sealed-dual-drawer-storage-cabinet-for-4-filament-spools', storeOnly: true },
        panda_breath: { variantId: 42353406312546, handle: 'biqu-panda-breath-smart-chamber-heater' },
        panda_guard: { variantId: 41897387917410, handle: 'biqu-ams-upgrades-multi-material' },
        panda_status: { variantId: 42177112735842, handle: 'biqu-panda-status-magnetic-mount-customizable-rgb' },
        panda_branch: { variantId: 42174177607778, handle: 'biqu-power-supply-solutions' },
        panda_pwr: { variantId: 42174177706082, handle: 'biqu-power-supply-solutions' },
        panda_hub: { variantId: 42174177640546, handle: 'biqu-power-supply-solutions' },
        panda_station: {
            handle: 'biqu-panda-verse-storage-solution-for-x1-p1',
            byFamily: {
                x1: 42140843081826,
                p1: 42140843081826,
                p2: 42140843081826,
                x2: 42140843081826,
                a1: 42177067843682,
                a1mini: 42177067843682,
                h2: 42177060733026
            }
        },
        panda_station_naked: {
            handle: 'biqu-panda-verse-storage-solution-for-x1-p1',
            byFamily: {
                x1: 42140843114594,
                p1: 42140843114594,
                p2: 42140843114594,
                x2: 42140843114594,
                a1: 42177067876450,
                a1mini: 42177067876450,
                h2: 42177060765794
            }
        },
        panda_den_air: { variantId: 42589422125154, handle: 'biqu-panda-den-air-storage-box' },
        panda_den_h2: { variantId: 42589450797154, handle: 'biqu-panda-den-h2-storage-box' },
        panda_stack: { variantId: 42302084120674, handle: 'biqu-panda-stack-multi-device-storage-durable-diy' },
        panda_perch: { variantId: 42173363290210, handle: 'biqu-panda-perch-aluminum-mount-supports' },
        panda_perch_h2: { variantId: 42173363322978, handle: 'biqu-panda-perch-aluminum-mount-supports' },
        panda_feed_rack: { variantId: 42179485499490, handle: 'biqu-panda-feed-rack-stackable-organizer-for' },
        panda_under_armor: { variantId: 42177060929634, handle: 'biqu-panda-verse-storage-solution-for-h2d' }
    };

    PP.AFFILIATE = {
        awin: 'https://www.awin1.com/cread.php?awinmid=95665&awinaffid=2611768'
    };

    PP.affiliateUrl = function (dest) {
        const target = dest || 'https://biqu.equipment/';
        return PP.AFFILIATE.awin + '&ued=' + encodeURIComponent(target);
    };

    PP.maybeAffiliate = function (url) {
        if (!url) return url;
        if (/biqu\.equipment/i.test(url)) return PP.affiliateUrl(url);
        return url;
    };

    PP.productUrl = function (itemId) {
        const cart = PP.CART[itemId];
        const dest = (!cart || !cart.handle) ? 'https://biqu.equipment/' : ('https://biqu.equipment/products/' + cart.handle);
        return PP.affiliateUrl(dest);
    };

    PP.resolveVariantId = function (itemId, printer) {
        const cart = PP.CART[itemId];
        if (!cart) return null;
        if (cart.storeOnly) return null;
        const fam = printer && printer.family;
        if (cart.byFamily && fam) {
            if (cart.byFamily[fam]) return cart.byFamily[fam];
        }
        return cart.variantId || null;
    };

    PP.buildBiquCartUrl = function (accessoryIds, printer) {
        const pairs = [];
        const seen = {};
        (accessoryIds || []).forEach((id) => {
            const vid = PP.resolveVariantId(id, printer);
            if (!vid || seen[vid]) return;
            seen[vid] = true;
            pairs.push(vid + ':1');
        });
        if (!pairs.length) return null;
        return PP.affiliateUrl('https://biqu.equipment/cart/' + pairs.join(','));
    };
})(window);
