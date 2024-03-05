namespace SpriteKind {
    export const util = SpriteKind.create()
    export const npc = SpriteKind.create()
}
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    EnergyBar.value += 25
    tiles.setTileAt(tiles.getTileLocation(location.column, location.row), sprites.castle.tileDarkGrass3)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    multilights.toggleLighting(false)
    room1 = true
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
                story.printCharacterText("Hello? Is anyone there?")
                story.showPlayerChoices("Yes", "Who are you?")
                if (story.getLastAnswer() == "Yes") {
                    multilights.toggleLighting(true)
                    story.printCharacterText("You need to find the power and get rid of them... QUICK")
                    tiles.setCurrentTilemap(tilemap`level6`)
                    tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 5))
                    controller.moveSprite(mySprite, 100, 100)
                    lighting = 1
                } else if (story.getLastAnswer() == "Who are you?") {
                    story.printCharacterText("Thats not important.")
                    story.printCharacterText("You need to find the power and get out... We dont know what they are.")
                    tiles.setCurrentTilemap(tilemap`level6`)
                    tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 5))
                    controller.moveSprite(mySprite, 100, 100)
                    lighting = 1
                }
            } else if (dialogue == 0) {
                story.printCharacterText("Hello")
                story.showPlayerChoices("Who are you?", "What are they?", "Goodbye")
                if (story.getLastAnswer() == "Who are you") {
                    story.printCharacterText("Dont worry about that.")
                    controller.moveSprite(mySprite, 100, 100)
                } else if (story.getLastAnswer() == "where am i?") {
                    story.printCharacterText("your human mind could never comprehend")
                    story.showPlayerChoices("what?", "who are you?", "goodbye")
                    if (story.getLastAnswer() == "who are you") {
                        story.printCharacterText("your imagination")
                        controller.moveSprite(mySprite, 100, 100)
                    } else if (story.getLastAnswer() == "where am i?") {
                        story.printCharacterText("your human mind could never comprehend")
                        controller.moveSprite(mySprite, 100, 100)
                    } else if (story.getLastAnswer() == "goodbye") {
                        controller.moveSprite(mySprite, 100, 100)
                    }
                    controller.moveSprite(mySprite, 100, 100)
                } else if (story.getLastAnswer() == "goodbye") {
                    controller.moveSprite(mySprite, 100, 100)
                }
                controller.moveSprite(mySprite, 100, 100)
            }
            controller.moveSprite(mySprite, 100, 100)
        } else {
            controller.moveSprite(mySprite, 100, 100)
        }
    })
    for (let index = 0; index < enemies; index++) {
        console.log("YES")
        bosscheck = randint(0, 4)
        bosstype = list._pickRandom()
    }
    if (bosstype.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)) {
        gojoe = true
        gojo = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnTile(gojo, tiles.getTileLocation(29, 4))
    } else if (bosstype.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)) {
        pigon = true
        pigon2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnTile(pigon2, tiles.getTileLocation(29, 4))
    } else if (bosstype.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)) {
        mailbox = true
        boxmail = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnTile(boxmail, tiles.getTileLocation(29, 4))
    } else if (bosstype.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)) {
        godzilla = true
        zillagod = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnTile(zillagod, tiles.getTileLocation(29, 4))
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    HealthBar.value += 25
    tiles.setTileAt(tiles.getTileLocation(location.column, location.row), sprites.castle.tileDarkGrass3)
})
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
    decision_maker(game.ask("Pick up the radio?"), randint(0, 1), randint(0, 3))
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
let zillagod: Sprite = null
let godzilla = false
let boxmail: Sprite = null
let mailbox = false
let pigon2: Sprite = null
let pigon = false
let gojo: Sprite = null
let gojoe = false
let bosstype: Image = null
let bosscheck = 0
let projectile: Sprite = null
let lighting = 0
let room1 = false
let HealthBar: StatusBarSprite = null
let EnergyBar: StatusBarSprite = null
let list: Image[] = []
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
img`
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
    `,
img`
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
    `,
img`
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
    `,
img`
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
    `
]
EnergyBar = statusbars.create(3, 20, StatusBarKind.Energy)
EnergyBar.max = 100
EnergyBar.value = 0
EnergyBar.attachToSprite(mySprite, 4, 0)
EnergyBar.setColor(9, 12)
EnergyBar.setBarBorder(1, 15)
EnergyBar.positionDirection(CollisionDirection.Left)
HealthBar = statusbars.create(20, 3, StatusBarKind.Health)
HealthBar.max = 100
HealthBar.value = 100
HealthBar.attachToSprite(mySprite, -24, 0)
HealthBar.setColor(2, 12)
HealthBar.setBarBorder(1, 15)
room1 = false
