import { useEffect, useState } from "react";
import { PositionInterface, DirectionEnum, EntityEnum } from "../../settings/constants";
import { updateCanvas } from "../../contexts/canvas/helpers";
import { useCanvas } from "../../contexts/canvas";

const useEnemyMovement = ( initial: PositionInterface ) => {
    const [ position, setPosition ] = useState( initial );
    const [ direction, setDirection ] = useState( DirectionEnum.RIGHT );
    const { setCanvasState } = useCanvas();

    const handlerInterval = () => {
        const random = Math.floor( Math.random() * 4 ); const direction = Object.values( DirectionEnum )[ random ];
        const { nextMoviment, movimentState } = updateCanvas( position, direction, EntityEnum.ENEMY, setCanvasState )
        if ( movimentState.valid ) {
            setPosition( nextMoviment.position );
            setDirection( nextMoviment.direction );
        };
    }

    useEffect(() => {
        const interval = setInterval(handlerInterval, 2100);
        return () => clearInterval(interval);
    },[])

    return { position, direction };
};

export default useEnemyMovement;