scene.onOverlapTile(SpriteKind.Player, assets.tile`GG_Guard`, function (sprite, location) {
    music.spooky.play()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(assets.image`Jess`, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`Dungeon Maze`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleBlueCrystal)
scene.cameraFollowSprite(mySprite)
info.startCountdown(40)
