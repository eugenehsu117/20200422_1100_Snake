namespace SpriteKind {
    export const Attached = SpriteKind.create()
}
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    game.over(false)
})
function 蘋果出現 () {
    蘋果 = sprites.create(img`
. . . . . . . e c 7 . . . . . . 
. . . . e e e c 7 7 e e . . . . 
. . c e e e e c 7 e 2 2 e e . . 
. c e e e e e c 6 e e 2 2 2 e . 
. c e e e 2 e c c 2 4 5 4 2 e . 
c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
. e e e 2 2 2 2 2 2 2 2 2 4 e . 
. 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
. . 2 e e 2 2 2 2 2 4 4 2 e . . 
. . . 2 2 e e 4 4 4 2 e e . . . 
. . . . . 2 2 e e e e . . . . . 
`, SpriteKind.Food)
    蘋果.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . c b a c . . . . . . 
. . . . c c b c f a c . . . . . 
. . . . a f b b b a c . . . . . 
. . . . a f f b a f c c . . . . 
. . . . c b b a f f c . . . . . 
. . . . . b b a f a . . . . . . 
. . . . . . c b b . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Attached)
    mySprite.setPosition(list[list.length - 1].x, list[list.length - 1].y)
    mySprite.follow(list[list.length - 1], 90)
    list.push(mySprite)
    otherSprite.destroy(effects.hearts, 100)
    蘋果出現()
})
let mySprite: Sprite = null
let 蘋果: Sprite = null
let list: Sprite[] = []
let 貪食蛇 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 7 7 7 7 . . . . . . 
. . . 7 7 7 c b a 7 7 . . . . . 
. . . 7 c c b c f a 7 7 . . . . 
. . . 7 7 f b b b a c 7 . . . . 
. . . 7 7 f f b a f c 7 . . . . 
. . . 7 c b b a f f 7 7 . . . . 
. . . 7 7 b b a f 7 7 . . . . . 
. . . . 7 7 c b 7 7 . . . . . . 
. . . . . 7 7 7 7 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(貪食蛇)
貪食蛇.setFlag(SpriteFlag.StayInScreen, true)
貪食蛇.setFlag(SpriteFlag.DestroyOnWall, true)
list = [貪食蛇]
蘋果出現()
