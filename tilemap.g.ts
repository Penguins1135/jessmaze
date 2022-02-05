// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Dungeon Maze":
            case "level1":return tiles.createTilemap(hex`12001200050201010101010101050101010101010105010000000000000000000000000000000001010001010101010100010101010001010001010004000000000000000000000000010001010001000101040101010104010100010001010000000100000000000000000100010001010001000100010101010101000100000001010001000100000000000501000100010001010001000100010101010101000400010001010001000400010505050501000100010005010000000000010505050501000105010001010001000100010101010101000101010001010001000105010000000000000005010001010001000104010101000101010101010001010001000000000001000000000003010001010004010101010101010101010101010001010000000000000000000000000000000001050101010101010101010101010101010105`, img`
..2222222.2222222.
2................2
2.222222.2222.22.2
2.2............2.2
2.2.2222222222.2.2
2...2........2.2.2
2.2.2.222222.2...2
2.2.2......2.2.2.2
2.2.2.222222.2.2.2
2.2.2.2....2.2.2..
2.....2....2.2.2.2
2.2.2.222222.222.2
2.2.2.2........2.2
2.2.22222.222222.2
2.2.....2......2.2
2.22222222222222.2
2................2
.2222222222222222.
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.chestClosed,sprites.dungeon.doorLockedWest,myTiles.tile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "GG_Guard":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
