ServerEvents.recipes(event => {

    // Cooking For Blockheads
    event.remove({ id: "cookingforblockheads:recipe_book_smelting_from_nofilter"})


    // Growable Cell
	event.remove({ output: "growablecells:seed_rs_1k_disk" })
    event.remove({ output: "growablecells:seed_rs_4k_disk" })
    event.remove({ output: "growablecells:seed_rs_16k_disk" })
    event.remove({ output: "growablecells:seed_rs_64k_disk" })
    event.remove({ output: "growablecells:seed_rs_fluid_64k_disk" })
    event.remove({ output: "growablecells:seed_rs_fluid_256k_disk" })
    event.remove({ output: "growablecells:seed_rs_fluid_1024k_disk" })
    event.remove({ output: "growablecells:seed_rs_fluid_4096k_disk" })
    event.remove({ output: "growablecells:seed_rs_ed_256k_disk" })
    event.remove({ output: "growablecells:seed_rs_ed_1024k_disk" })
    event.remove({ output: "growablecells:seed_rs_ed_4096k_disk" })
    event.remove({ output: "growablecells:seed_rs_ed_16384k_disk" })
    event.remove({ output: "growablecells:seed_rs_ed_65536k_disk" })
    event.remove({ output: "growablecells:seed_rs_ed_262m_disk" })
    event.remove({ output: "growablecells:seed_rs_ed_1048m_disk" })
    event.remove({ output: "growablecells:seed_rs_ed_fluid_16384k_disk" })
    event.remove({ output: "growablecells:seed_rs_ed_fluid_65536k_disk" })
    event.remove({ output: "growablecells:seed_rs_ed_fluid_262m_disk" })
    event.remove({ output: "growablecells:seed_rs_ed_fluid_1048m_disk" })
    event.remove({ output: "growablecells:seed_rs_es_256k_disk" })
    event.remove({ output: "growablecells:seed_rs_es_1024k_disk" })
    event.remove({ output: "growablecells:seed_rs_es_4096k_disk" })
    event.remove({ output: "growablecells:seed_rs_es_16384k_disk" })
    event.remove({ output: "growablecells:seed_rs_es_fluid_16384k_disk" })
    event.remove({ output: "growablecells:seed_rs_es_fluid_65536k_disk" })
    event.remove({ output: "growablecells:seed_rs_es_fluid_262144k_disk" })
    event.remove({ output: "growablecells:seed_rs_es_fluid_1048576k_disk" })

    // Hostile Neural Network
    //event.remove({ id: "hostilenetworks:living_matter/overworld_to_nether"})
    //event.remove({ id: "hostilenetworks:living_matter/nether_to_ender"})

    // Iron Furnaces
    event.remove({ id: "ironfurnaces:furnaces/iron_furnace" })
    event.remove({ id: "ironfurnaces:furnaces/silver_furnace2" })
    event.remove({ id: "ironfurnaces:furnaces/gold_furnace" })
    event.remove({ id: "ironfurnaces:upgrades/upgrade_iron" })
    event.remove({ id: "ironfurnaces:upgrades/upgrade_silver" })
    event.remove({ id: "ironfurnaces:upgrades/upgrade_gold" })
})