namespace SpriteKind {
    export const util = SpriteKind.create()
    export const npc = SpriteKind.create()
}
namespace StatusBarKind {
    export const Oxygen = StatusBarKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    EnergyBar.value += 25
    tiles.setTileAt(tiles.getTileLocation(location.column, location.row), assets.tile`myTile8`)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.setCharacterState(mySprite, characterAnimations.rule(Predicate.FacingUp, Predicate.MovingUp))
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f f 2 f e f . . 
        . . f f f 2 f e e 2 2 f f f . . 
        . . f e 2 f f e e 2 f e e f . . 
        . f f e f f e e e f e e e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . . e f f f f f f f f 4 e . . 
        . . . 4 f 2 2 2 2 2 e d d 4 . . 
        . . . e f f f f f f e e 4 . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e f 2 f f f 2 f 2 e f . . 
        . . f f f 2 2 e e f 2 f f f . . 
        . . f e e f 2 e e f f 2 e f . . 
        . f f e e e f e e e f f e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f e . . . 
        . . 4 d d e 2 2 2 2 2 f 4 . . . 
        . . . 4 e e f f f f f f e . . . 
        . . . . . . . . . f f f . . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingUp, Predicate.FacingUp)
    )
    if (lighting == 1) {
        flashlightangle = 1
        flashlight.direction = -90
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile22`, function (sprite, location) {
    if (room2 == true) {
        tiles.setCurrentTilemap(tilemap`level13`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 3))
        switch_flipped = false
    } else {
    	
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile24`, function (sprite, location) {
    if (room2 == true) {
        tiles.setCurrentTilemap(tilemap`level16`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 2))
    } else {
    	
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    multilights.toggleLighting(false)
    room1 = true
    switch_flipped = true
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (EnergyBar.value == 0) {
    	
    } else if (EnergyBar.value > 0) {
        if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingRight))) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 2 2 3 3 3 3 2 . . . . 
                . 2 2 2 3 3 1 1 1 1 1 3 2 . . . 
                . 1 1 1 1 1 1 1 1 1 1 1 2 . . . 
                . 2 2 2 3 3 1 1 1 1 1 3 2 . . . 
                . . . . . 2 2 2 3 3 3 2 . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 150, 0)
            EnergyBar.value += -10
        } else if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingLeft))) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . 2 3 3 3 3 2 2 . . . . . 
                . . . 2 3 1 1 1 1 1 3 3 2 2 2 . 
                . . . 2 1 1 1 1 1 1 1 1 1 1 1 . 
                . . . 2 3 1 1 1 1 1 3 3 2 2 2 . 
                . . . . 2 3 3 3 2 2 2 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, -150, 0)
            EnergyBar.value += -10
        } else if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingUp))) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 2 . . . . . . 
                . . . . . . 2 3 1 3 2 . . . . . 
                . . . . . . 3 1 1 1 3 . . . . . 
                . . . . . . 3 1 1 1 3 . . . . . 
                . . . . . . 3 1 1 1 3 . . . . . 
                . . . . . . 2 1 1 1 3 . . . . . 
                . . . . . . 2 1 1 1 2 . . . . . 
                . . . . . . 2 3 1 3 2 . . . . . 
                . . . . . . . 3 1 3 . . . . . . 
                . . . . . . . 2 1 2 . . . . . . 
                . . . . . . . 2 1 2 . . . . . . 
                . . . . . . . 2 1 2 . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 0, -150)
            EnergyBar.value += -10
        } else if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingDown))) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 2 1 2 . . . . . . . 
                . . . . . . 2 1 2 . . . . . . . 
                . . . . . . 2 1 2 . . . . . . . 
                . . . . . . 3 1 3 . . . . . . . 
                . . . . . 2 3 1 3 2 . . . . . . 
                . . . . . 2 1 1 1 2 . . . . . . 
                . . . . . 3 1 1 1 2 . . . . . . 
                . . . . . 3 1 1 1 3 . . . . . . 
                . . . . . 3 1 1 1 3 . . . . . . 
                . . . . . 3 1 1 1 3 . . . . . . 
                . . . . . 2 3 1 3 2 . . . . . . 
                . . . . . . 2 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 0, 150)
            EnergyBar.value += -10
        }
    }
})
function decision_maker (initialQuestion: boolean, dialogue: number, enemies: number) {
    controller.moveSprite(mySprite, 0, 0)
    story.startCutscene(function () {
        if (initialQuestion == true) {
            story.cancelSpriteMovement(mySprite)
            if (dialogue == 1) {
                text = true
                story.printCharacterText("Hello? Is anyone there?")
                story.showPlayerChoices("Yes, Hello?", "Who are you?")
                if (story.getLastAnswer() == "Yes, Hello?") {
                    multilights.toggleLighting(true)
                    story.printCharacterText("We can't talk right now, you need to find the power and get rid of them... QUICK.")
                    tiles.setCurrentTilemap(tilemap`level6`)
                    tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 5))
                    spawn_locations = tiles.getTilesByType(assets.tile`myTile10`)
                    spawn_location_amount = spawn_locations.length
                    enemy_amount = spawn_location_amount
                    controller.moveSprite(mySprite, 100, 100)
                    lighting = 1
                    StartingRoom = false
                    switch_flipped = false
                    text = false
                } else if (story.getLastAnswer() == "Who are you?") {
                    multilights.toggleLighting(true)
                    story.printCharacterText("Thats not important.")
                    story.printCharacterText("You need to find the power and get out... We dont know what they are.")
                    tiles.setCurrentTilemap(tilemap`level6`)
                    tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 5))
                    spawn_locations = tiles.getTilesByType(assets.tile`myTile10`)
                    spawn_location_amount = spawn_locations.length
                    enemy_amount = spawn_location_amount
                    controller.moveSprite(mySprite, 100, 100)
                    lighting = 1
                    StartingRoom = false
                    switch_flipped = false
                    text = false
                }
            } else if (dialogue == 0) {
                text = true
                story.printCharacterText("Hello?")
                story.showPlayerChoices("Who are you?", "Where am I?", "(walk away)")
                if (story.getLastAnswer() == "Who are you?") {
                    multilights.toggleLighting(true)
                    story.printCharacterText("[STATIC RADIO NOISES] YOU NEED TO GET OUT NOW [STATIC RADIO NOISES]")
                    tiles.setCurrentTilemap(tilemap`level6`)
                    tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 5))
                    spawn_locations = tiles.getTilesByType(assets.tile`myTile10`)
                    spawn_location_amount = spawn_locations.length
                    lighting = 1
                    enemy_amount = spawn_location_amount
                    StartingRoom = false
                    switch_flipped = false
                    text = false
                    controller.moveSprite(mySprite, 100, 100)
                } else if (story.getLastAnswer() == "Where am I?") {
                    multilights.toggleLighting(true)
                    story.printCharacterText("Youve awaken from your coma, there's no time to talk...")
                    story.printCharacterText("You need to find the power and get out... NOW.")
                    tiles.setCurrentTilemap(tilemap`level6`)
                    tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 5))
                    spawn_locations = tiles.getTilesByType(assets.tile`myTile10`)
                    spawn_location_amount = spawn_locations.length
                    enemy_amount = spawn_location_amount
                    lighting = 1
                    StartingRoom = false
                    switch_flipped = false
                    text = false
                    controller.moveSprite(mySprite, 100, 100)
                } else if (story.getLastAnswer() == "(walk away)") {
                    text = false
                    controller.moveSprite(mySprite, 100, 100)
                }
                controller.moveSprite(mySprite, 100, 100)
            }
            controller.moveSprite(mySprite, 100, 100)
        } else {
            controller.moveSprite(mySprite, 100, 100)
        }
        story.cancelCurrentCutscene()
        for (let index = 0; index < enemies; index++) {
            bosstype = list.removeAt(enemies)
            console.log("YES")
        }
        for (let index = 0; index < spawn_location_amount; index++) {
            enemy_spawner()
            console.log("no")
        }
    })
}
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    characterAnimations.setCharacterState(mySprite, characterAnimations.rule(Predicate.FacingDown, Predicate.NotMoving))
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 4 4 5 5 4 4 f d 4 . . 
        . . 4 4 . f f f f f f . 4 4 . . 
        . . . . . f f . . f f . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingDown)
    )
})
function enemy_spawner () {
    if (bosstype == 0) {
        if (StartingRoom == false) {
            gojoe = true
            gojo = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . f f . . . . . . . . . . . 
                . . f 1 1 f e . . e e e e e e . 
                . f 1 7 7 1 f e e e e e e e e e 
                . f 1 7 5 7 1 f e e e . . . . . 
                . . f 1 7 7 1 f e e e e e . . . 
                . . . f 1 1 f e e e e . e e . . 
                . . . e f f e e e e . . . e . . 
                . . . e e e e e e e . . . . e . 
                . . . e . . e e e e e . . . e e 
                . . e e . . . . . . e . . . . e 
                . e e . . . . . . . e . . . . . 
                e e . . . . . . . . e e . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Enemy)
            tiles.placeOnTile(gojo, spawn_locations.pop())
            console.log("1")
        }
    } else if (bosstype == 1) {
        if (StartingRoom == false) {
            pigon = true
            pigon2 = sprites.create(img`
                . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . 
                b b . . . . . . . . . . . . . b b 
                b b b . . . . . . . . . . . b b b 
                b c b b . . b b b b b . . b b c b 
                b b c b b b 1 1 1 1 1 b b b c b b 
                . b c c b b 1 1 2 1 1 b b c c b . 
                . b b c c b 1 2 f 2 1 b c c b b . 
                . . b b b b 1 1 2 1 1 b b b b . . 
                . . . . . b 1 1 1 1 1 b . . . . . 
                . . . . . . b b b b b . . . . . . 
                . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . 
                `, SpriteKind.Enemy)
            tiles.placeOnTile(pigon2, spawn_locations.pop())
            console.log("2")
        }
    } else if (bosstype == 2) {
        if (StartingRoom == false) {
            mailbox = true
            boxmail = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . 1 1 1 1 . . . . . . . . . . 
                . 1 1 1 1 2 1 . . . . . . . . . 
                . 1 1 f f 1 1 . . . . . . . . . 
                . 1 1 f f 1 2 . . 8 8 . . . . . 
                . 1 2 1 2 2 1 . 8 . . . . . . . 
                . . 1 2 1 1 2 2 8 . . . . . 2 . 
                . . . . . . . . 2 2 2 2 2 2 2 . 
                . . . . . . . . 2 . . 3 3 2 . . 
                . . . . . . . 2 2 . . . . 2 3 . 
                . . . . . . . 2 . . . . . 2 3 . 
                . . . . . . . . 2 . . . . 2 . . 
                . . . . . . . . 2 . . . . . 2 . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Enemy)
            tiles.placeOnTile(boxmail, spawn_locations.pop())
            console.log("3")
        }
    } else if (bosstype == 3) {
        if (StartingRoom == false) {
            godzilla = true
            zillagod = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 6 6 6 6 6 6 6 . . . 
                . . . . 6 6 6 8 8 8 8 6 6 6 . . 
                . . . 6 6 6 6 6 6 8 6 6 6 6 . . 
                . . 6 6 6 f 6 6 6 6 6 6 6 6 6 . 
                . . 6 6 6 f f 6 6 6 6 f f f 6 . 
                . 6 6 6 6 f f f 6 6 6 f f 6 6 6 
                6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
                6 . . 6 6 8 8 6 6 6 6 6 6 6 6 6 
                . . . . . 6 8 8 8 8 8 8 6 6 6 6 
                . . . . . 6 6 6 6 6 6 8 8 6 6 6 
                . . . . . . 6 6 6 6 6 6 8 8 6 . 
                . . . . . . . 6 6 6 6 6 6 6 6 . 
                . . . . . . . . 6 6 6 6 6 6 6 . 
                . . . . . . . . . 6 6 6 6 6 . . 
                `, SpriteKind.Enemy)
            tiles.placeOnTile(zillagod, spawn_locations.pop())
            console.log("4")
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile25`, function (sprite, location) {
    multilights.toggleLighting(false)
    room4 = true
    escape_hatch = true
    tiles.setCurrentTilemap(tilemap`level20`)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.setCharacterState(mySprite, characterAnimations.rule(Predicate.MovingLeft, Predicate.FacingLeft))
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingLeft, Predicate.FacingLeft)
    )
    if (lighting == 1) {
        flashlightangle = 1
        flashlight.direction = 180
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    if (room1 == true) {
        tiles.setCurrentTilemap(tilemap`level7`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 1))
        switch_flipped = false
        multilights.toggleLighting(true)
    } else {
    	
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    characterAnimations.setCharacterState(mySprite, characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight))
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e d d d d f . . . 
        . . . . . 4 d d e 4 4 e f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    characterAnimations.setCharacterState(mySprite, characterAnimations.rule(Predicate.FacingLeft, Predicate.NotMoving))
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d e e e e f . . . 
        . . . f e 4 4 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.NotMoving)
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile21`, function (sprite, location) {
    OxygenBar.value += 25
    tiles.setTileAt(tiles.getTileLocation(location.column, location.row), assets.tile`myTile8`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.setCharacterState(mySprite, characterAnimations.rule(Predicate.MovingRight, Predicate.FacingRight))
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingRight, Predicate.FacingRight)
    )
    if (lighting == 1) {
        flashlightangle = 1
        flashlight.direction = 0
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile5`, function (sprite, location) {
    decision_maker(game.ask("Pick up the radio?"), randint(0, 1), randint(1, 4))
    tiles.placeOnTile(mySprite, tiles.getTileLocation(6, 4))
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    characterAnimations.setCharacterState(mySprite, characterAnimations.rule(Predicate.FacingUp, Predicate.NotMoving))
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 4 4 4 4 4 4 f d 4 . . 
        . . 4 4 . f f f f f f . 4 4 . . 
        . . . . . f f . . f f . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingUp)
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.setCharacterState(mySprite, characterAnimations.rule(Predicate.FacingDown, Predicate.MovingDown))
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f e 4 d d d d 4 e f e . . 
        . . f e f 2 2 2 2 e d d 4 e . . 
        . . e 4 f 2 2 2 2 e d d e . . . 
        . . . . f 4 4 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f . . . 
        . . e 4 d d e 2 2 2 2 f e f . . 
        . . . e d d e 2 2 2 2 f 4 e . . 
        . . . . e e f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingDown, Predicate.FacingDown)
    )
    if (lighting == 1) {
        flashlightangle = 1
        flashlight.direction = 90
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile23`, function (sprite, location) {
    multilights.toggleLighting(false)
    room3 = true
    switch_flipped = true
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    multilights.toggleLighting(false)
    room2 = true
    switch_flipped = true
})
let escape_hatch = false
let zillagod: Sprite = null
let godzilla = false
let boxmail: Sprite = null
let mailbox = false
let pigon2: Sprite = null
let pigon = false
let gojo: Sprite = null
let gojoe = false
let bosstype = 0
let enemy_amount = 0
let spawn_location_amount = 0
let spawn_locations: tiles.Location[] = []
let projectile: Sprite = null
let switch_flipped = false
let lighting = 0
let room4 = false
let room3 = false
let room2 = false
let room1 = false
let text = false
let StartingRoom = false
let OxygenBar: StatusBarSprite = null
let EnergyBar: StatusBarSprite = null
let list: number[] = []
let flashlightangle = 0
let flashlight: lightsource.FlashlightLightSource = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 4))
multilights.addLightSource(mySprite, 4)
multilights.addFlashLightSource(
mySprite,
0,
60,
70
)
flashlight = multilights.flashlightSourceAttachedTo(mySprite)
flashlightangle = 0
list = [
0,
1,
2,
3
]
EnergyBar = statusbars.create(3, 20, StatusBarKind.Oxygen)
EnergyBar.max = 100
EnergyBar.value = 0
EnergyBar.attachToSprite(mySprite, 8, 0)
EnergyBar.setColor(5, 12)
EnergyBar.setBarBorder(1, 15)
EnergyBar.positionDirection(CollisionDirection.Left)
OxygenBar = statusbars.create(3, 20, StatusBarKind.Oxygen)
OxygenBar.max = 100
OxygenBar.value = 100
OxygenBar.attachToSprite(mySprite, 4, 0)
OxygenBar.setColor(9, 12)
OxygenBar.setBarBorder(1, 15)
OxygenBar.positionDirection(CollisionDirection.Left)
let HealthBar = statusbars.create(20, 3, StatusBarKind.Health)
HealthBar.max = 100
HealthBar.value = 100
HealthBar.attachToSprite(mySprite, -24, 0)
HealthBar.setColor(2, 12)
HealthBar.setBarBorder(1, 15)
StartingRoom = true
text = false
room1 = false
room2 = false
room3 = false
room4 = false
game.onUpdate(function () {
    if (OxygenBar.value == 0) {
        game.setGameOverMessage(false, "YOU RAN OUT OF OXYGEN!")
        game.gameOver(false)
    }
})
game.onUpdateInterval(1000, function () {
    if (StartingRoom == true) {
    	
    } else if (switch_flipped == true) {
        OxygenBar.value += 20
    } else {
        OxygenBar.value += -2
    }
})
