// Listen to item tag event
ServerEvents.tags("item", event => {

    // Cooking For Blockheads
    event.add("forge:kitchen_floor", [
        "cookingforblockheads:white_kitchen_floor",
        "cookingforblockheads:orange_kitchen_floor",
        "cookingforblockheads:magenta_kitchen_floor",
        "cookingforblockheads:light_blue_kitchen_floor",
        "cookingforblockheads:yellow_kitchen_floor",
        "cookingforblockheads:lime_kitchen_floor",
        "cookingforblockheads:pink_kitchen_floor",
        "cookingforblockheads:gray_kitchen_floor",
        "cookingforblockheads:light_gray_kitchen_floor",
        "cookingforblockheads:cyan_kitchen_floor",
        "cookingforblockheads:purple_kitchen_floor",
        "cookingforblockheads:blue_kitchen_floor",
        "cookingforblockheads:brown_kitchen_floor",
        "cookingforblockheads:green_kitchen_floor",
        "cookingforblockheads:red_kitchen_floor",
        "cookingforblockheads:black_kitchen_floor"
    ])

    // Hostile Neural Network
    event.add("forge:data_model", "hostilenetworks:data_model")
    event.add("forge:prediction", "hostilenetworks:prediction")

    // Sophiticated Backpack
    event.add("forge:backpacks", "sophisticatedbackpacks:backpack")
    event.add("forge:iron_backpacks", "sophisticatedbackpacks:iron_backpack")
    event.add("forge:gold_backpacks", "sophisticatedbackpacks:gold_backpack")
    event.add("forge:diamond_backpacks", "sophisticatedbackpacks:diamond_backpack")
    event.add("forge:netherite_backpacks", "sophisticatedbackpacks:netherite_backpack")
})