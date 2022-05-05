import { PositionInterface, DirectionEnum, EntityEnum } from "../../settings/constants";

export const handlerNextMoviment = (position: PositionInterface, direction: DirectionEnum ) => {
    switch( direction ) {
        case DirectionEnum.LEFT: return  { position: { ...position, x: position.x - 1 }, direction };       
        case DirectionEnum.RIGHT: return { position: { ...position, x: position.x + 1 }, direction };  
        case DirectionEnum.UP: return    { position: { ...position, y: position.y - 1 }, direction };
        case DirectionEnum.DOWN: return  { position: { ...position, y: position.y + 1 }, direction };
    };
};
/**
 * Todo valor "1" é igual a parede
 * Todo valor "0" é igual a chão
 * 
 */
 export enum CanvasEnum {
    FLOOR      = 0,
    WALL       = 1,
    DOOR       = 2,
    TRAP       = 3,
    MINI_DEMON = 4,
    DEMON      = 5,
    CHEST      = 6,
    PLAYER     = 7
}

const FL = CanvasEnum.FLOOR;
const WL = CanvasEnum.WALL;
const DR = CanvasEnum.DOOR;
const TP = CanvasEnum.TRAP;
const MD = CanvasEnum.MINI_DEMON;
const DN = CanvasEnum.DEMON;
const CH = CanvasEnum.CHEST;
const PL = CanvasEnum.PLAYER;

export const Canvas = [
    [WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,DR,DR,WL,WL,WL,WL,WL],
    [WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,DR,DR,WL,WL,WL,WL,WL],
    [WL,DN,FL,WL,DN,FL,FL,FL,WL,FL,FL,TP,FL,FL,FL,FL,WL,FL,FL,WL],
    [WL,FL,CH,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,FL,FL,FL,MD,MD,MD,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,FL,FL,FL,FL,MD,FL,FL,FL,FL,FL,FL,FL,FL,TP,FL,FL,FL,FL,WL],
    [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,DN,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,FL,FL,FL,TP,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,FL,WL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,PL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,FL,WL],
    [WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL,WL]
]

export const checkValidMoviment = ( position: PositionInterface, entity = null ) => {
    const target = Canvas[position.y][position.x]
    if ( entity === EntityEnum.PLAYER ) return getPlayerValidMoviment( target );
    return getEnemyValidMoviment( target );
};

export const getPlayerValidMoviment = (target) => ({
    valid: target !== CanvasEnum.WALL,
    dead: target === CanvasEnum.MINI_DEMON || target === CanvasEnum.DEMON || target === CanvasEnum.TRAP,
    chest:  target === CanvasEnum.CHEST,
    door:  target === CanvasEnum.DOOR
})
export const getEnemyValidMoviment = (target) => ({
    valid: target === CanvasEnum.PLAYER || target === CanvasEnum.FLOOR,
    dead: false,
    chest:  false,
    door:  false
})

export const updateCanvas = ( currentPosition, direction, entity, setCanvasState ) => {
    console.log('atualizando o canvas');
    const nextMoviment = handlerNextMoviment( currentPosition, direction );
    const movimentState = checkValidMoviment( nextMoviment.position, entity );

    if ( movimentState.valid ) {
        setCanvasState((currentState) => {
            const currentValue = currentState.canvas[currentPosition.y][currentPosition.x]
            const newCanvas = Object.assign([], currentState.canvas);
            const { x, y } = nextMoviment.position;
            if ( newCanvas[nextMoviment.position.y][nextMoviment.position.x] === CanvasEnum.PLAYER ) {
                alert("VOCÊ MORREU, REINICIE O JOGO"), location.reload();
            } else {
                newCanvas[currentPosition.y][currentPosition.x] = CanvasEnum.FLOOR;
            }
            newCanvas[y][x] = currentValue;

            return { canvas: newCanvas }
        })
    }

    return { nextMoviment, movimentState}
}