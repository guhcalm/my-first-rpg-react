export const TILE_SIZE = 48;
export const DEMON_SIZE = TILE_SIZE * 2;
export const TILESET_SIZE = 960;
export interface PositionInterface {
    x: number,
    y: number
}
export enum DirectionEnum {
    LEFT = "ArrowLeft",
    RIGHT = "ArrowRight",
    UP = "ArrowUp",
    DOWN = "ArrowDown"
};
export enum EntityEnum {
    PLAYER = "player",
    ENEMY = "enemy"
}