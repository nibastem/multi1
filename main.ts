sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    // Ignore repeat overlaps for 1 second after a tag
    if (game.runtime() - lastTagTime < 1000) {
        return
    }
    lastTagTime = game.runtime()
    // clear the old "it" bubble
    it.sayText("")
    if (it == sprite) {
        it = otherSprite
    } else {
        it = sprite
    }
    it.sayText("I am it")
    if (p1 == it) {
        info.player2.changeScoreBy(1)
    } else {
        info.player1.changeScoreBy(1)
    }
})
let lastTagTime = 0
let it: Sprite = null
let p1: Sprite = null
info.startCountdown(120)
info.player1.setScore(0)
info.player2.setScore(0)
// your green image
p1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
p1.setStayInScreen(true)
p1.setPosition(38, 29)
controller.player1.moveSprite(p1)
p1.sayText("I am p1", 1000, true)
// your red image
let p2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
    . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
    . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
    . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
    . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
    . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
    . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
    . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
p2.setStayInScreen(true)
p2.setPosition(112, 82)
controller.player2.moveSprite(p2)
p2.sayText("I am p2", 1000, true)
if (Math.percentChance(50)) {
    it = p1
} else {
    it = p2
}
// no tags until the intro finishes
lastTagTime = game.runtime() + 1000
// let the "I am p1/p2" messages finish
pause(1000)
it.sayText("I am it")
