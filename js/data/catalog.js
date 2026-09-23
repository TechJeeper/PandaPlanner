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
            { id: 'popstatus', name: 'BIQU PopStatus', price: 24.95, link: 'https://biqu.equipment/products/biqu-panda-status-magnetic-mount-customizable-rgb', desc: 'RGB Status Bar for Snapmaker U1.', compat: ['snapmaker_u1'], slot: 'under_bed', category: 'upgrade', group: 'snapmaker', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/11_a93a0df3-aa12-42c5-b994-38c3852efc69.jpg?v=1760705937' },
            { id: 'popcap', name: 'BIQU PopCap', price: 139.99, link: 'https://biqu.equipment/products/biqu-popcap-snapmaker-u1-top-cover', desc: 'Clear 120°C PC top cover that sits on the U1. Magnetic front hatch, tool tray on top, ports for Panda Breath / Touch.', compat: ['snapmaker_u1'], slot: 'enclosure_top', category: 'upgrade', group: 'snapmaker', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/BIQU_PopCap_Installed_on_Snapmaker_U1_3D_Printer.jpg?v=1774229915' },
            { id: 'popknomi', name: 'BIQU PopKnomi', price: 34.95, link: 'https://biqu.equipment/products/biqu-popknomi-snapmaker-u1-toolhead-display', desc: 'Toolhead display with animated status UI designed for the Snapmaker U1.', compat: ['snapmaker_u1'], slot: 'toolhead_front', category: 'upgrade', group: 'snapmaker', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/1060000833-Panda_Knomi_3D_3_1b77712f-0546-4c5a-ad63-c68be3dec56f.jpg?v=1760706035' },
            { id: 'panda_diaper', name: 'Panda Diaper Waste Pads', price: 32.99, link: 'https://biqu.equipment/products/biqu-panda-diaper-waste-pads-reusable-easy-clean-full-coverage-for-snapmaker-u1', desc: 'Reusable full-coverage waste pads for Snapmaker U1.', compat: ['snapmaker_u1'], slot: 'waste_bin', category: 'upgrade', group: 'snapmaker', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/1990000114-DiaperU1_1000_1.jpg?v=1769218153' },
            { id: 'popstation_mini', name: 'BIQU PopStation Mini', price: 179.99, link: 'https://biqu.equipment/products/biqu-popstation-mini-sealed-dual-drawer-storage-cabinet-for-4-filament-spools', desc: 'White sealed dual-drawer storage cabinet for 4 filament spools that supports a Snapmaker U1 on top.', compat: ['snapmaker_u1'], slot: 'filament_storage', category: 'upgrade', group: 'snapmaker', role: 'base', photo: 'https://raw.githubusercontent.com/bigtreetech/docs/master/docs/img/PandaStation/panda_station.jpg' },
            { id: 'popstation_mini_wheels', name: 'PopStation Mini Wheels', price: 0, link: 'https://biqu.equipment/products/biqu-popstation-mini-sealed-dual-drawer-storage-cabinet-for-4-filament-spools', desc: 'Optional leveling casters for a PopStation Mini supporting a Snapmaker U1.', compat: ['snapmaker_u1'], slot: 'popstation_wheels', category: 'upgrade', group: 'snapmaker', requiresPopstationMini: true, photo: 'https://raw.githubusercontent.com/bigtreetech/docs/master/docs/img/PandaStation/panda_station.jpg' },
            { id: 'panda_breath', name: 'Panda Breath', price: 12.90, link: 'https://biqu.equipment/products/biqu-panda-breath-smart-chamber-heater', desc: 'Chamber heater and HEPA filtration assist.', compat: ['x1c', 'x1e', 'p1s', 'p1p', 'a1'], slot: 'chamber_back', category: 'upgrade', group: 'on-printer', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/1060000855-PandaBreath_1000_7.png?v=1765359761' },
            { id: 'panda_vent', name: 'BIQU Panda Vent RGB Smart Auto Vent', price: 0, link: 'https://us.biqu.equipment/products/biqu-panda-vent-rgb-smart-auto-vent', desc: 'Smart automatic chamber vent with RGB illumination for X1 and P1 series printers.', compat: ['x1c', 'x1e', 'p1s', 'p1p'], slot: 'chamber_vent', category: 'upgrade', group: 'on-printer', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/1060000855-PandaBreath_1000_7.png?v=1765359761' },
            { id: 'panda_guard', name: 'Panda Guard (Ceramic)', price: 13.00, link: 'https://biqu.equipment/products/biqu-ams-upgrades-multi-material', desc: 'Ceramic AMS feed necks. Requires an AMS unit.', compat: AllBambu, slot: 'ams_guard', category: 'upgrade', group: 'on-printer', requiresAms: true, photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/PandaAMSCable_1000_3.jpg?v=1745899636' },
            { id: 'panda_status', name: 'Panda Status Bar', price: 24.95, link: 'https://biqu.equipment/products/biqu-panda-status-magnetic-mount-customizable-rgb', desc: 'Magnetic RGB LED bar that mounts under the bed.', compat: ['x1c', 'x1e', 'p1s', 'p1p', 'a1', 'a1mini'], slot: 'under_bed', category: 'upgrade', group: 'on-printer', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/11_a93a0df3-aa12-42c5-b994-38c3852efc69.jpg?v=1760705937' },
            { id: 'panda_branch', name: 'Panda Branch Plus', price: 74.95, link: 'https://biqu.equipment/products/biqu-power-supply-solutions', desc: '10-channel powered hub with Web UI / MQTT for the Panda Verse.', compat: AllBambu, slot: 'usb_hub', category: 'upgrade', group: 'power', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/1_5_44fb675d-8a6b-4403-bdc1-dd609466dd62.png?v=1757867600' },
            { id: 'panda_pwr', name: 'Panda PWR', price: 29.99, link: 'https://biqu.equipment/products/biqu-power-supply-solutions', desc: 'Smart power monitor and switched USB, pairs with Panda Touch.', compat: AllBambu, slot: 'power', category: 'upgrade', group: 'power', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/1_5_44fb675d-8a6b-4403-bdc1-dd609466dd62.png?v=1757867600' },
            { id: 'panda_hub', name: 'Panda Hub', price: 19.99, link: 'https://biqu.equipment/products/biqu-power-supply-solutions', desc: 'Dual USB expander for cameras and lights.', compat: AllBambu, slot: 'usb_hub', category: 'upgrade', group: 'power', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/1_5_44fb675d-8a6b-4403-bdc1-dd609466dd62.png?v=1757867600' },
            { id: 'panda_hub_plus', name: 'Panda Hub Plus', price: 0, link: 'https://github.com/bigtreetech/docs/blob/master/docs/Panda_Hub_Plus.md', desc: 'Seven-port USB-C power hub for Panda peripherals.', compat: AllBambu, slot: 'usb_hub', category: 'upgrade', group: 'power', photo: 'https://raw.githubusercontent.com/bigtreetech/docs/master/docs/img/PandaHubPlus/board.jpg' },
            { id: 'panda_bifrost', name: 'Panda Bifrost V1.0', price: 0, link: 'https://github.com/bigtreetech/docs/blob/master/docs/Panda_Bifrost.md', desc: 'MQTT gateway for Panda peripherals.', compat: AllBambu, slot: 'gateway', category: 'upgrade', group: 'power', photo: 'https://raw.githubusercontent.com/bigtreetech/docs/master/docs/img/PandaBifrost/product.jpg' },
            { id: 'panda_sense', name: 'Panda Sense', price: 0, link: 'https://github.com/bigtreetech/docs/blob/master/docs/PandaSense.md', desc: 'Temperature and humidity sensor for Panda Touch.', compat: AllBambu, slot: 'sensor', category: 'upgrade', group: 'on-printer', photo: 'https://raw.githubusercontent.com/bigtreetech/docs/master/docs/img/panda_sense/panda_sense_title.webp' },
            { id: 'panda_rgb_controller', name: 'Panda RGB Controller', price: 0, link: 'https://github.com/bigtreetech/docs/blob/master/docs/Panda_RGB_Controller.md', desc: 'Two-channel RGB controller for Panda Verse furniture.', compat: AllBambu, slot: 'rgb_controller', category: 'upgrade', group: 'furniture', photo: 'https://raw.githubusercontent.com/bigtreetech/docs/master/docs/img/PandaRGBController/board.webp' },
            { id: 'panda_ptfree', name: 'Panda PTFree', price: 0, link: 'https://github.com/bigtreetech/docs/blob/master/docs/Panda_PTFree.md', desc: 'Low-friction PTFE filament-routing upgrade.', compat: AllBambu, slot: 'filament_path', category: 'upgrade', group: 'on-printer', photo: 'https://raw.githubusercontent.com/bigtreetech/docs/master/docs/img/PandaPTFree/en/panda_ptfree.jpg' },
            { id: 'panda_hue_otg', name: 'Panda Hue OTG', price: 0, link: 'https://github.com/bigtreetech/docs/blob/master/docs/Panda_Hue_OTG.md', desc: 'OTG lighting and control accessory for the Panda ecosystem.', compat: AllBambu, slot: 'lighting_control', category: 'upgrade', group: 'on-printer', photo: 'https://raw.githubusercontent.com/bigtreetech/docs/master/docs/img/PandaHueOTG/panda_hue_otg.jpg' },
            { id: 'panda_jet', name: 'Panda Jet', price: 0, link: 'https://biqu.equipment/products/panda-jet-cooling-fan-duct-for-bambulab-x1-p1-hotend-panda-revo', desc: 'Toolhead cooling duct for X1 and P1 printers with Panda Revo.', compat: BambuPX, slot: 'toolhead_cooling', category: 'upgrade', group: 'on-printer', photo: 'https://raw.githubusercontent.com/bigtreetech/docs/master/docs/img/Panda_Jet/Panda_Jet_Title.webp' },
            { id: 'panda_jetpack_v2', name: 'Panda Jetpack V2.0', price: 0, link: 'https://github.com/bigtreetech/docs/blob/master/docs/Panda_Jetpack_V2.md', desc: 'External blower and duct cooling upgrade for X1 and P1 printers.', compat: BambuPX, slot: 'external_cooling', category: 'upgrade', group: 'on-printer', photo: 'https://raw.githubusercontent.com/bigtreetech/docs/master/docs/img/PandaJetpackV2/panda_jetpack.webp' },
            { id: 'panda_turbo_kit', name: 'Panda Turbo Kit', price: 0, link: 'https://github.com/bigtreetech/docs/blob/master/docs/Panda-Turbo-Kit.md', desc: 'External blower and duct cooling upgrade for X1 and P1 printers.', compat: BambuPX, slot: 'external_cooling', category: 'upgrade', group: 'on-printer', photo: 'https://raw.githubusercontent.com/bigtreetech/docs/master/docs/img/panda_turbo_kit/panda_turbo_kit_title.webp' },
            { id: 'panda_purge_shield', name: 'Panda Purge Shield', price: 0, link: 'https://biqu.equipment/products/biqu-purging-reliability-improvement-upgrades-multi-material-printing-enhancement-kit-for-bambu-lab-p1-x1-3d-printers', desc: 'Purge-chute shield for X1 and P1 printers.', compat: BambuPX, slot: 'purge_chute', category: 'upgrade', group: 'on-printer', photo: 'https://raw.githubusercontent.com/bigtreetech/docs/master/docs/img/Panda_Purge_Shield/panda_purge_shield_title.webp' },
            { id: 'panda_belt', name: 'BIQU Panda Belt', price: 0, link: 'https://biqu.equipment/products/biqu-panda-belt-long-lasting-anti-aging-xyz-belt-set-compatible-for-bambu-lab-p1-x1-series', desc: 'XYZ timing-belt replacement kit for X1 and P1 printers.', compat: BambuPX, slot: 'motion_belts', category: 'upgrade', group: 'on-printer', photo: 'https://raw.githubusercontent.com/bigtreetech/docs/master/docs/img/PandaBeltKitXP/001.jpg' },
            { id: 'panda_lux_rgb_px', name: 'Panda Lux RGB PX', price: 0, link: 'https://github.com/bigtreetech/docs/blob/master/docs/Panda-Lux-RGB-PX.md', desc: '273 mm RGB chamber-light upgrade for X1 and P1 printers.', compat: BambuPX, slot: 'chamber_light', category: 'upgrade', group: 'on-printer', photo: 'https://raw.githubusercontent.com/bigtreetech/docs/master/docs/img/PandaLuxRGBPX/panda_lux_rgb.jpg' },
            { id: 'panda_cooler_a1', name: 'BIQU Panda Cooler A1', price: 0, link: 'https://github.com/bigtreetech/docs/blob/master/docs/Panda_Cooler_A1.md', desc: 'Cooling upgrade for Bambu Lab A1.', compat: ['a1'], slot: 'toolhead_cooling', category: 'upgrade', group: 'on-printer', photo: 'https://raw.githubusercontent.com/bigtreetech/docs/master/docs/img/PandaCoolerA1/panda_cooler_a1.jpg' },
            { id: 'panda_aura_a1', name: 'Panda Aura A1', price: 0, link: 'https://github.com/bigtreetech/docs/blob/master/docs/panda-aura.md', desc: 'Under-printer RGB status-light panel for Bambu Lab A1.', compat: ['a1'], slot: 'under_printer_light', category: 'upgrade', group: 'on-printer', photo: 'https://raw.githubusercontent.com/bigtreetech/docs/master/docs/img/panda-aura/case/duibi.webp' },
            { id: 'panda_aura_a1_mini', name: 'Panda Aura A1 mini', price: 0, link: 'https://github.com/bigtreetech/docs/blob/master/docs/panda-aura.md', desc: 'Under-printer RGB status-light panel for Bambu Lab A1 mini.', compat: ['a1mini'], slot: 'under_printer_light', category: 'upgrade', group: 'on-printer', photo: 'https://raw.githubusercontent.com/bigtreetech/docs/master/docs/img/panda-aura/case/duibi.webp' },
            { id: 'panda_aura_a1_plus', name: 'Panda Aura A1 Plus', price: 0, link: 'https://github.com/bigtreetech/docs/blob/master/docs/panda-aura.md', desc: 'A1 under-printer light panel with RGBW status lighting.', compat: ['a1'], slot: 'under_printer_light', category: 'upgrade', group: 'on-printer', photo: 'https://raw.githubusercontent.com/bigtreetech/docs/master/docs/img/panda-aura/case/duibi.webp' },
            { id: 'panda_aura_a1_rgbw', name: 'Panda Aura A1 RGBW', price: 0, link: 'https://github.com/bigtreetech/docs/blob/master/docs/panda-aura.md', desc: 'A1 RGBW illumination and status-light strip.', compat: ['a1'], slot: 'under_printer_light', category: 'upgrade', group: 'on-printer', photo: 'https://raw.githubusercontent.com/bigtreetech/docs/master/docs/img/panda-aura/case/duibi.webp' },

            { id: 'panda_station', name: 'Panda Station', price: 349.99, link: 'https://biqu.equipment/products/biqu-panda-verse-storage-solution-for-x1-p1', desc: 'Mobile cabinet the printer sits on. Drawers hold AMS units and filament. Fits devices within 490×510 mm.', compat: AllBambu, slot: 'station', category: 'storage', group: 'furniture', role: 'base', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/1000_14_debdbb4a-ccb0-4c9b-bf7a-0b6952d69446.jpg?v=1758025930' },
            { id: 'panda_station_naked', name: 'Naked Panda Station', price: 299.99, link: 'https://biqu.equipment/products/biqu-panda-verse-storage-solution-for-x1-p1', desc: 'Open-frame Station without PC enclosure panels. Same sit-on cabinet role.', compat: AllBambu, slot: 'station', category: 'storage', group: 'furniture', role: 'base', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/1000_14_debdbb4a-ccb0-4c9b-bf7a-0b6952d69446.jpg?v=1758025930' },
            { id: 'panda_cushion_xp', name: 'Panda Cushion XP', price: 0, link: 'https://biqu.equipment/products/biqu-panda-verse-storage-solution-for-x1-p1', desc: 'Air-cushion isolation option for X1 / P1 Panda Station setups.', compat: BambuPX, slot: 'station_cushion', category: 'upgrade', group: 'furniture', requiresStation: true, photo: 'https://raw.githubusercontent.com/bigtreetech/docs/master/docs/img/PandaStation/panda_station.jpg' },
            { id: 'panda_station_lighting_kit', name: 'Panda Station Lighting Kit', price: 0, link: 'https://biqu.equipment/products/biqu-panda-verse-storage-solution-for-x1-p1', desc: 'Internal lighting kit for a Naked Panda Station; required for its RGB-controller lighting setup.', compat: AllBambu, slot: 'station_lighting', category: 'upgrade', group: 'furniture', requiresNakedStation: true, photo: 'https://raw.githubusercontent.com/bigtreetech/docs/master/docs/img/PandaStation/kit_7.webp' },
            { id: 'panda_den_air', name: 'Panda Den Air', price: 129.99, link: 'https://biqu.equipment/products/biqu-panda-den-air-storage-box', desc: 'Steel waste + tool base. The A / P / X printer sits directly on it. Can sit on a Station.', compat: BambuAPX, slot: 'den', category: 'storage', group: 'furniture', role: 'base', variant: 'air', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/4_a36a9c73-66e3-42b2-88bc-e21ad0dd0c66.jpg?v=1771999816' },
            { id: 'panda_den_h2', name: 'Panda Den H2', price: 199.99, link: 'https://biqu.equipment/products/biqu-panda-den-h2-storage-box', desc: 'Larger Den for H2 (also A / P / X). Printer sits on top; waste chute aligns to the machine.', compat: AllBambu, slot: 'den', category: 'storage', group: 'furniture', role: 'base', variant: 'h2', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/5_21200776-93df-4869-badf-a47b2824fb5d.jpg?v=1771999914' },
            { id: 'panda_stack', name: 'Panda Stack', price: 149.99, link: 'https://biqu.equipment/products/biqu-panda-stack-multi-device-storage-durable-diy', desc: 'Dual-layer rack for A1 / A1 Mini: printer on the top shelf, AMS / AMS 2 Pro on the pull-out tray.', compat: BambuA, slot: 'stack', category: 'storage', group: 'furniture', role: 'base', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/1060000848-Panda_Stack_1000_1.jpg?v=1762774508' },
            { id: 'panda_perch', name: 'Panda Perch', price: 155.99, link: 'https://biqu.equipment/products/biqu-panda-perch-aluminum-mount-supports', desc: 'Overhead AMS mount for X1 / P1 / P2 / X2. Holds 1–2 AMS units above the printer, not a spool rack.', compat: BambuEnclosed, slot: 'perch', category: 'storage', group: 'furniture', role: 'overhead', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/12_076a0aaa-ff7f-4c8c-ae54-fce9b2b56b08.jpg?v=1758938797' },
            { id: 'panda_perch_h2', name: 'Panda Perch H2', price: 155.99, link: 'https://biqu.equipment/products/biqu-panda-verse-storage-solution-for-h2d', desc: 'H2-series Perch. AMS / AMS 2 Pro sit on rails above the H2, not on the lid.', compat: BambuH2, slot: 'perch', category: 'storage', group: 'furniture', role: 'overhead', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/1000_1_fcdec1a6-3461-46e0-aab5-047b7ad82e24.jpg?v=1758026172' },
            { id: 'panda_feed_rack', name: 'Panda Feed Rack', price: 45.99, link: 'https://biqu.equipment/products/biqu-panda-feed-rack-stackable-organizer-for', desc: 'Tall 5-tier filament tower: 3 spool shelves and 2 box shelves. Sits on the floor beside the workstation, not over the printer.', compat: AllPrinters, slot: 'feed_rack', category: 'storage', group: 'furniture', role: 'side', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/PandaFeedRack_Product_application_display_side.png?v=1759238236' },
            { id: 'panda_under_armor', name: 'Panda Under Armor H2', price: 49.99, link: 'https://biqu.equipment/products/biqu-panda-verse-storage-solution-for-h2d', desc: 'Sensor-safe armor / under-cover kit for H2 series.', compat: BambuH2, slot: 'under_armor', category: 'storage', group: 'furniture', role: 'on_printer', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/1000_1_fcdec1a6-3461-46e0-aab5-047b7ad82e24.jpg?v=1758026172' },
            { id: 'biqu_panda_verse_rgb', name: 'BIQU PANDA-VERSE RGB Design', price: 19.99, link: 'https://biqu.equipment/products/biqu-panda-verse-rgb', desc: 'BIQU PANDA-VERSE RGB Design for Bambu Lab A1 Series - Light Up a New Frontier', compat: AllBambu, slot: 'upgrade', category: 'upgrade', group: 'on-printer', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/1000_bfda21ba-b523-4dc8-9c05-042e935d2f44.jpg?v=1757862030' },
            { id: 'biqu_panda_verse_rgb_design_for_bambu_lab', name: 'BIQU PANDA-VERSE RGB Design', price: 19.99, link: 'https://biqu.equipment/products/biqu-panda-verse-rgb-design-for-bambu-lab', desc: 'BIQU PANDA-VERSE RGB Design for Bambu Lab X1/P1 Series - Light Up a New Frontier', compat: AllBambu, slot: 'upgrade', category: 'upgrade', group: 'on-printer', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/1000_607bb5bd-2299-4140-89b4-7a06a730add6.png?v=1757861980' },
            { id: 'biqu_panda_verse_storage_solution_for_bambu_lab', name: 'BIQU PANDA', price: 19.99, link: 'https://biqu.equipment/products/biqu-panda-verse-storage-solution-for-bambu-lab', desc: 'BIQU PANDA-VERSE Storage Solution for Bambu Lab A1 Series – Folded Corners, Expanded Space', compat: AllBambu, slot: 'upgrade', category: 'upgrade', group: 'on-printer', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/1000_1_401e1d0f-6d10-40dd-bc14-75e251c10a6a.jpg?v=1758026099' },
            { id: 'biqu_panda_alarm_wireless_audio_visual', name: 'BIQU Panda Alarm Wireless Audio Visual Alarm Notify Print Completion and Errors for P1 Series', price: 29.99, link: 'https://biqu.equipment/products/biqu-panda-alarm-wireless-audio-visual', desc: 'BIQU Panda Alarm Wireless Audio Visual Alarm Notify Print Completion and Errors for P1 Series', compat: AllBambu, slot: 'upgrade', category: 'upgrade', group: 'on-printer', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/18_1f489d4e-33a1-429a-8855-0bbb164b6af6.jpg?v=1758884694' },
            { id: 'biqu_panda_bamboo_feeder_esp32_controlled_smart_filament', name: 'BIQU Panda Bamboo Feeder ESP32 Controlled Smart Filament Loader with Seamless Continuous Feeding', price: 24.99, link: 'https://biqu.equipment/products/biqu-panda-bamboo-feeder-esp32-controlled-smart-filament', desc: 'BIQU Panda Bamboo Feeder ESP32 Controlled Smart Filament Loader with Seamless Continuous Feeding', compat: AllBambu, slot: 'upgrade', category: 'upgrade', group: 'on-printer', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/12-24V2.8Apoweradapterwithinternationalplugadapters.jpg?v=1774953515' },
            { id: 'biqu_panda_breeze_cross_flow', name: 'BIQU Panda Breeze Cross Flow Fan for Bambu Lab A1 Printers– Plug & Play High', price: 89.0, link: 'https://biqu.equipment/products/biqu-panda-breeze-cross-flow', desc: 'BIQU Panda Breeze Cross Flow Fan for Bambu Lab A1 Printers– Plug & Play High-Flow Cooling Fan with LED Light', compat: AllBambu, slot: 'upgrade', category: 'upgrade', group: 'on-printer', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/1060000770-Panda_Breeze_1000_1.jpg?v=1757556759' },
            { id: 'panda_build_plate', name: 'BIQU Panda Build Plate', price: 15.59, link: 'https://biqu.equipment/products/panda-build-plate', desc: 'BIQU Panda Build Plate for Bambu Lab X2D/X1C/P1S/P1P/A1 – Double-Sided Textured & Smooth PEI Spring Steel Sheet', compat: AllBambu, slot: 'upgrade', category: 'upgrade', group: 'on-printer', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/3010200025-_PEI_PEI10001.png?v=1753437328' },
            { id: 'biqu_panda_buildplate_designer_series', name: 'BIQU Panda BuildPlate Designer Series Dual', price: 24.99, link: 'https://biqu.equipment/products/biqu-panda-buildplate-designer-series', desc: 'BIQU Panda BuildPlate Designer Series Dual-textured 3D Printing Build Plate with Honeycomb & Houndstooth Patterns for Bambu X2D/X1/P1/A1 Printers', compat: AllBambu, slot: 'upgrade', category: 'upgrade', group: 'on-printer', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/3010200041-Designer_1000_6_2.png?v=1757556302' },
            { id: 'panda_buildplate_designer_for_bambu_lab_h2d_h2s', name: 'BIQU Panda Buildplate Designer PEO+PET Double', price: 42.99, link: 'https://biqu.equipment/products/panda-buildplate-designer-for-bambu-lab-h2d-h2s', desc: 'BIQU Panda Buildplate Designer PEO+PET Double-Sided Spring Steel Sheet for Bambu Lab H2D/H2S', compat: AllBambu, slot: 'upgrade', category: 'upgrade', group: 'on-printer', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/3010200078-Designer_PEO_PET_H2D_1000_7.png?v=1762864099' },
            { id: 'biqu_panda_buildplate_cryogrip_pro_for_bambu', name: 'BIQU Panda CryoGrip Pro Build Plate for Bambu Lab X1C/P1S/A1 – Double', price: 23.99, link: 'https://biqu.equipment/products/biqu-panda-buildplate-cryogrip-pro-for-bambu', desc: 'BIQU Panda CryoGrip Pro Build Plate for Bambu Lab X1C/P1S/A1 – Double-Sided Low-Temp Magnetic Spring Steel Plate', compat: AllBambu, slot: 'upgrade', category: 'upgrade', group: 'on-printer', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/BIQU_Panda_BuildPlate_CryoGrip_Pro_for_Bambu.png?v=1774230431' },
            { id: 'biqu_panda_cyborg', name: 'BIQU Panda Cyborg', price: 0.0, link: 'https://biqu.equipment/products/biqu-panda-cyborg', desc: 'BIQU Panda Cyborg', compat: AllBambu, slot: 'upgrade', category: 'upgrade', group: 'on-printer', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/BIGTREETECH5TouchDisplay.jpg?v=1761559049' },
            { id: 'biqu_panda_diaper_waste_tray_carbon_carbon2', name: 'BIQU Panda Diaper Filament Purge Waste Tray for Elegoo Centauri Carbon & Centauri Carbon 2', price: 38.99, link: 'https://biqu.equipment/products/biqu-panda-diaper-waste-tray-carbon-carbon2', desc: 'BIQU Panda Diaper Filament Purge Waste Tray for Elegoo Centauri Carbon & Centauri Carbon 2', compat: AllBambu, slot: 'upgrade', category: 'upgrade', group: 'on-printer', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/1060000861-BIQUDiaperCC1000_1.jpg?v=1777280377' },
            { id: 'biqu_panda_diaper_waste_tray_k2_plus', name: 'BIQU Panda Diaper Waste Tray for Creality K2 Plus & Prusa CORE One & Prusa XL', price: 35.99, link: 'https://biqu.equipment/products/biqu-panda-diaper-waste-tray-k2-plus', desc: 'BIQU Panda Diaper Waste Tray for Creality K2 Plus & Prusa CORE One & Prusa XL', compat: AllBambu, slot: 'upgrade', category: 'upgrade', group: 'on-printer', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/BIQU_Panda_Diaper_waste_collection_tray_for_Creality_K2_Plus_3D_printer_-_top_view_with_product_branding.jpg?v=1777287293' },
            { id: 'biqu_panda_door_pc_upgrade', name: 'BIQU Panda Door PC Upgrade Panel for Bambu Lab P1/X1 Printers', price: 35.99, link: 'https://biqu.equipment/products/biqu-panda-door-pc-upgrade', desc: 'BIQU Panda Door PC Upgrade Panel for Bambu Lab P1/X1 Printers', compat: AllBambu, slot: 'upgrade', category: 'upgrade', group: 'on-printer', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/1060000718-_Panda_Door_1000X1000_15.jpg?v=1724246696' },
            { id: 'biqu_panda_edge_cnc_precision', name: 'BIQU Panda Edge CNC Precision Machined Blade Scraper, Non', price: 5.99, link: 'https://biqu.equipment/products/biqu-panda-edge-cnc-precision', desc: 'BIQU Panda Edge CNC Precision Machined Blade Scraper, Non-Slip Ergonomic Grip & Thumb Rest Handle for Model Removal Tool', compat: AllBambu, slot: 'upgrade', category: 'upgrade', group: 'on-printer', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/1060000748-Panda_Edge_1000_1.jpg?v=1757556925' },
            { id: 'biqu_panda_edge', name: 'BIQU Panda Edge V2 Premium 3D Printer Removal Tool – Aluminum Alloy Scraper with Magnetic Storage & Built', price: 5.99, link: 'https://biqu.equipment/products/biqu-panda-edge', desc: 'BIQU Panda Edge V2 Premium 3D Printer Removal Tool – Aluminum Alloy Scraper with Magnetic Storage & Built-in Hex Key Slots', compat: AllBambu, slot: 'upgrade', category: 'upgrade', group: 'on-printer', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/PandaEdgeV21000_2.jpg?v=1784111070' },
            { id: 'biqu_panda_extruder', name: 'BIQU Panda Extruder CNC Hollow Carving Lightweight Extruder Housing for Bambu Lab P1/X1 Printers', price: 39.99, link: 'https://biqu.equipment/products/biqu-panda-extruder', desc: 'BIQU Panda Extruder CNC Hollow Carving Lightweight Extruder Housing for Bambu Lab P1/X1 Printers', compat: AllBambu, slot: 'upgrade', category: 'upgrade', group: 'on-printer', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/1060000728-PandaExtruder_800_1.jpg?v=1753437670' },
            { id: 'biqu_panda_fur_protective_leather', name: 'BIQU Panda Fur Protective Leather Wrap for P1S/X1C', price: 39.0, link: 'https://biqu.equipment/products/biqu-panda-fur-protective-leather', desc: 'BIQU Panda Fur Protective Leather Wrap for P1S/X1C', compat: AllBambu, slot: 'upgrade', category: 'upgrade', group: 'on-printer', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/PandaFur__2.jpg?v=1706081828' },
            { id: 'biqu_panda_hotend_wizard', name: 'BIQU Panda Hotend Wizard', price: 139.99, link: 'https://biqu.equipment/products/biqu-panda-hotend-wizard', desc: 'BIQU Panda Hotend Wizard', compat: AllBambu, slot: 'upgrade', category: 'upgrade', group: 'on-printer', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/1060000898-PandaHotendWizard1000_1.jpg?v=1783073857' },
            { id: 'biqu_panda_juicer_hotend_high_flow', name: 'BIQU Panda Juicer Hotend High Flow with 0.4/0.6/0.8mm Hardened Steel Nozzle for Bambu Lab A1/A1 mini/H2D', price: 1.5, link: 'https://biqu.equipment/products/biqu-panda-juicer-hotend-high-flow', desc: 'BIQU Panda Juicer Hotend High Flow with 0.4/0.6/0.8mm Hardened Steel Nozzle for Bambu Lab A1/A1 mini/H2D', compat: AllBambu, slot: 'upgrade', category: 'upgrade', group: 'on-printer', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/3010030141-PandaJuicerHFC-HA_1.jpg?v=1769509321' },
            { id: 'biqu_panda_juicer_hotend_standard_flow', name: 'BIQU Panda Juicer Hotend Standard Flow with 0.4/0.6/0.8mm Hardened Steel/VantaC Nozzle for Bambu Lab P2/X2/H2/A1/A1 mini', price: 1.0, link: 'https://biqu.equipment/products/biqu-panda-juicer-hotend-standard-flow', desc: 'BIQU Panda Juicer Hotend Standard Flow with 0.4/0.6/0.8mm Hardened Steel/VantaC Nozzle for Bambu Lab P2/X2/H2/A1/A1 mini', compat: AllBambu, slot: 'upgrade', category: 'upgrade', group: 'on-printer', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/SF-1_5ef2ce12-1c12-4bf6-be16-c11850710253.jpg?v=1769585533' },
            { id: 'biqu_panda_juicer_wc_tungsten_carbide_hotend', name: 'BIQU Panda Juicer S', price: 49.99, link: 'https://biqu.equipment/products/biqu-panda-juicer-wc-tungsten-carbide-hotend', desc: 'BIQU Panda Juicer S-WC Tungsten Carbide Hotend for Bambu Lab H2D/H2S/H2C/A1/A1 mini/P2S/X2D', compat: AllBambu, slot: 'upgrade', category: 'upgrade', group: 'on-printer', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/3010040068-JuicerS-WC-HA-0.4mm1000_1.jpg?v=1787305394' },
            { id: 'biqu_panda_lungs', name: 'BIQU Panda Lungs', price: 31.99, link: 'https://biqu.equipment/products/biqu-panda-lungs', desc: 'BIQU Panda Lungs - In-Chamber Air Purification, Equipped with Dual-layer Activated Carbon + HEPA Filter', compat: AllBambu, slot: 'upgrade', category: 'upgrade', group: 'on-printer', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/1060000897-Panda_Lungs_1000_7.jpg?v=1782729960' },
            { id: 'biqu_panda_nozzle_brush', name: 'BIQU Panda Nozzle Brush', price: 5.99, link: 'https://biqu.equipment/products/biqu-panda-nozzle-brush', desc: 'BIQU Panda Nozzle Brush for Bambu Lab A1 Printer - Durable Heat & Wear Resistant 3D Printer Heatbed Nozzle Wipers (3PCS)', compat: AllBambu, slot: 'upgrade', category: 'upgrade', group: 'on-printer', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/1060000735-_1000_20241119_1.jpg?v=1741768515' },
            { id: 'biqu_panda_shelter', name: 'BIQU Panda Shelter', price: 35.99, link: 'https://biqu.equipment/products/biqu-panda-shelter', desc: 'BIQU Panda Shelter for Bambu Lab A1/A1 Mini, Transparent Dustproof and Waterproof Enclosure, Constant Temp Protection, Enhanced Print Quality and Stability', compat: AllBambu, slot: 'upgrade', category: 'upgrade', group: 'on-printer', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/68.png?v=1742908970' },
            { id: 'biqu_panda_under_armor_px_aluminum', name: 'BIQU Panda Under Armor PX Aluminum Base Protective Strap Lightweight and Easy to Move Suitable for Bambu Lab P1/X1/H2D Series', price: 54.99, link: 'https://biqu.equipment/products/biqu-panda-under-armor-px-aluminum', desc: 'BIQU Panda Under Armor PX Aluminum Base Protective Strap Lightweight and Easy to Move Suitable for Bambu Lab P1/X1/H2D Series', compat: AllBambu, slot: 'upgrade', category: 'upgrade', group: 'on-printer', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/PandaUnderArmor_Overall_product_application_scenario.jpg?v=1753436180' },
            { id: 'panda_vision_encoder_for_bambu_lab_h2_series', name: 'BIQU Panda Vision Encoder', price: 69.99, link: 'https://biqu.equipment/products/panda-vision-encoder-for-bambu-lab-h2-series', desc: 'BIQU Panda Vision Encoder for Bambu Lab H2 Series', compat: AllBambu, slot: 'upgrade', category: 'upgrade', group: 'on-printer', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/High-PrecisionVisionEncoderCalibrationPlateforBambuLabH2.jpg?v=1787025657' },
            { id: 'biqu_panda_treat', name: 'BIQU x CMY Labs Panda Treat', price: 45.0, link: 'https://biqu.equipment/products/biqu-panda-treat', desc: 'BIQU x CMY Labs Panda Treat - Edible Ink Adapter For 3D Printers', compat: AllBambu, slot: 'upgrade', category: 'upgrade', group: 'on-printer', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/1-Panda_Treat_Treat_Yourself_display.jpg?v=1779346596' },
            { id: 'panda_buildplate_qr_code_sticker', name: 'Panda BuildPlate QR Code Sticker for Bambu Lab X1C Printer', price: 2.99, link: 'https://biqu.equipment/products/panda-buildplate-qr-code-sticker', desc: 'Panda BuildPlate QR Code Sticker for Bambu Lab X1C Printer', compat: AllBambu, slot: 'upgrade', category: 'upgrade', group: 'on-printer', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/QRSticker.jpg?v=1744369537' },
            { id: 'biqu_panda_cerahearth_ceramic_hotend_a1_mini', name: 'Panda Cerahearth Ceramic Hotend Assembly for Bambu Lab A1 & A1 mini | Zirconia Ceramic Upgrade', price: 19.99, link: 'https://biqu.equipment/products/biqu-panda-cerahearth-ceramic-hotend-a1-mini', desc: 'Panda Cerahearth Ceramic Hotend Assembly for Bambu Lab A1 & A1 mini | Zirconia Ceramic Upgrade', compat: AllBambu, slot: 'upgrade', category: 'upgrade', group: 'on-printer', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/bambu-a1-mini-ceramic-hotend-kit.jpg?v=1779874362' },
            { id: 'panda_series_combo_deal_custom_look', name: 'Panda Series Combo Deal – Custom Look, Performance & Safety Combos For Bambu Lab Printers', price: 110.86, link: 'https://biqu.equipment/products/panda-series-combo-deal-custom-look', desc: 'Panda Series Combo Deal – Custom Look, Performance & Safety Combos For Bambu Lab Printers', compat: AllBambu, slot: 'upgrade', category: 'upgrade', group: 'on-printer', photo: 'https://cdn.shopify.com/s/files/1/1619/4791/files/1_ec20563f-43e2-4c1e-a393-a36090201438.jpg?v=1746689275' },

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
        popstatus: { handle: 'biqu-panda-status-magnetic-mount-customizable-rgb' },
        popcap: { variantId: 42639960834146, handle: 'biqu-popcap-snapmaker-u1-top-cover' },
        popknomi: { handle: 'biqu-popknomi-snapmaker-u1-toolhead-display', loadProduct: true },
        panda_diaper: { variantId: 42480766222434, handle: 'biqu-panda-diaper-waste-pads-reusable-easy-clean-full-coverage-for-snapmaker-u1' },
        popstation_mini: { handle: 'biqu-popstation-mini-sealed-dual-drawer-storage-cabinet-for-4-filament-spools', loadProduct: true },
        popstation_mini_wheels: { handle: 'biqu-popstation-mini-sealed-dual-drawer-storage-cabinet-for-4-filament-spools', storeOnly: true, loadProduct: true },
        panda_breath: { variantId: 42353406312546, handle: 'biqu-panda-breath-smart-chamber-heater' },
        panda_vent: { handle: 'biqu-panda-vent-rgb-smart-auto-vent', loadProduct: true },
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
        panda_cushion_xp: { handle: 'biqu-panda-verse-storage-solution-for-x1-p1', variantTitle: 'Panda Cushion XP', loadProduct: true },
        panda_station_lighting_kit: { handle: 'biqu-panda-verse-storage-solution-for-x1-p1', storeOnly: true, loadProduct: true },
        panda_den_air: { variantId: 42589422125154, handle: 'biqu-panda-den-air-storage-box' },
        panda_den_h2: { variantId: 42589450797154, handle: 'biqu-panda-den-h2-storage-box' },
        panda_stack: { variantId: 42302084120674, handle: 'biqu-panda-stack-multi-device-storage-durable-diy' },
        panda_perch: { variantId: 42173363290210, handle: 'biqu-panda-perch-aluminum-mount-supports' },
        panda_perch_h2: { variantId: 42173363322978, handle: 'biqu-panda-perch-aluminum-mount-supports' },
        panda_feed_rack: { variantId: 42179485499490, handle: 'biqu-panda-feed-rack-stackable-organizer-for' },
        panda_under_armor: { variantId: 42177060929634, handle: 'biqu-panda-verse-storage-solution-for-h2d' },
        biqu_panda_verse_rgb: { variantId: 42177089929314, handle: 'biqu-panda-verse-rgb' },
        biqu_panda_verse_rgb_design_for_bambu_lab: { variantId: 42142596038754, handle: 'biqu-panda-verse-rgb-design-for-bambu-lab' },
        biqu_panda_verse_storage_solution_for_bambu_lab: { variantId: 42177067810914, handle: 'biqu-panda-verse-storage-solution-for-bambu-lab' },
        biqu_panda_alarm_wireless_audio_visual: { variantId: 42480809836642, handle: 'biqu-panda-alarm-wireless-audio-visual' },
        biqu_panda_bamboo_feeder_esp32_controlled_smart_filament: { variantId: 42150662537314, handle: 'biqu-panda-bamboo-feeder-esp32-controlled-smart-filament' },
        biqu_panda_breeze_cross_flow: { variantId: 42481002283106, handle: 'biqu-panda-breeze-cross-flow' },
        panda_build_plate: { variantId: 41154576253026, handle: 'panda-build-plate' },
        biqu_panda_buildplate_designer_series: { variantId: 42480811442274, handle: 'biqu-panda-buildplate-designer-series' },
        panda_buildplate_designer_for_bambu_lab_h2d_h2s: { variantId: 42649938853986, handle: 'panda-buildplate-designer-for-bambu-lab-h2d-h2s' },
        biqu_panda_buildplate_cryogrip_pro_for_bambu: { variantId: 42456121114722, handle: 'biqu-panda-buildplate-cryogrip-pro-for-bambu' },
        biqu_panda_cyborg: { variantId: 42270776295522, handle: 'biqu-panda-cyborg' },
        biqu_panda_diaper_waste_tray_carbon_carbon2: { variantId: 42834778685538, handle: 'biqu-panda-diaper-waste-tray-carbon-carbon2' },
        biqu_panda_diaper_waste_tray_k2_plus: { variantId: 42834801983586, handle: 'biqu-panda-diaper-waste-tray-k2-plus' },
        biqu_panda_door_pc_upgrade: { variantId: 41425836277858, handle: 'biqu-panda-door-pc-upgrade' },
        biqu_panda_edge_cnc_precision: { variantId: 41829476139106, handle: 'biqu-panda-edge-cnc-precision' },
        biqu_panda_edge: { variantId: 43120264773730, handle: 'biqu-panda-edge' },
        biqu_panda_extruder: { variantId: 42480798990434, handle: 'biqu-panda-extruder' },
        biqu_panda_fur_protective_leather: { variantId: 40701864804450, handle: 'biqu-panda-fur-protective-leather' },
        biqu_panda_hotend_wizard: { variantId: 43081997713506, handle: 'biqu-panda-hotend-wizard' },
        biqu_panda_juicer_hotend_high_flow: { variantId: 42120386576482, handle: 'biqu-panda-juicer-hotend-high-flow' },
        biqu_panda_juicer_hotend_standard_flow: { variantId: 42461872652386, handle: 'biqu-panda-juicer-hotend-standard-flow' },
        biqu_panda_juicer_wc_tungsten_carbide_hotend: { variantId: 43228998795362, handle: 'biqu-panda-juicer-wc-tungsten-carbide-hotend' },
        biqu_panda_lungs: { variantId: 43033661636706, handle: 'biqu-panda-lungs' },
        biqu_panda_nozzle_brush: { variantId: 42480861413474, handle: 'biqu-panda-nozzle-brush' },
        biqu_panda_shelter: { variantId: 41764472717410, handle: 'biqu-panda-shelter' },
        biqu_panda_under_armor_px_aluminum: { variantId: 42865754275938, handle: 'biqu-panda-under-armor-px-aluminum' },
        panda_vision_encoder_for_bambu_lab_h2_series: { variantId: 43221597552738, handle: 'panda-vision-encoder-for-bambu-lab-h2-series' },
        biqu_panda_treat: { variantId: 42953896493154, handle: 'biqu-panda-treat' },
        panda_buildplate_qr_code_sticker: { variantId: 41869944127586, handle: 'panda-buildplate-qr-code-sticker' },
        biqu_panda_cerahearth_ceramic_hotend_a1_mini: { variantId: 42967367811170, handle: 'biqu-panda-cerahearth-ceramic-hotend-a1-mini' },
        panda_series_combo_deal_custom_look: { variantId: 41913541165154, handle: 'panda-series-combo-deal-custom-look' },

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

    PP.loadStoreProductData = async function () {
        const entries = Object.entries(PP.CART).filter(([, cart]) => cart.loadProduct);
        const products = await Promise.all(entries.map(async ([id, cart]) => {
            try {
                const response = await fetch('https://biqu.equipment/products/' + cart.handle + '.js');
                if (!response.ok) return null;
                return { id, cart, product: await response.json() };
            } catch (_) {
                return null;
            }
        }));

        products.filter(Boolean).forEach(({ id, cart, product }) => {
            const accessory = PP.CATALOG.accessories.find((item) => item.id === id);
            if (accessory && product.featured_image) accessory.photo = product.featured_image;
            if (!cart.storeOnly) {
                const matchingVariants = product.variants && (cart.variantTitle
                    ? product.variants.filter((item) => item.title.toLowerCase().includes(cart.variantTitle.toLowerCase()))
                    : product.variants);
                const variant = matchingVariants && (matchingVariants.find((item) => item.available) || matchingVariants[0]);
                if (variant) cart.variantId = variant.id;
            }
        });
    };
})(window);
