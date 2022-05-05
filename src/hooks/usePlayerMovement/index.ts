import { useEffect, useState } from "react";
import { PositionInterface, DirectionEnum, EntityEnum } from "../../settings/constants";
import { Canvas, updateCanvas } from "../../contexts/canvas/helpers";
import { useCanvas } from "../../contexts/canvas";

const usePlayerMovement = ( initial: PositionInterface ) => {
    const [ position, setPosition ] = useState( initial );
    const [ direction, setDirection ] = useState( DirectionEnum.RIGHT )
    const { setCanvasState } = useCanvas();

    const handlerKeys = (event: KeyboardEvent) => {        
        const {movimentState, nextMoviment} = updateCanvas( position, event.key, EntityEnum.PLAYER, setCanvasState );
        if ( movimentState.valid ) {
            setPosition( nextMoviment.position );
            setDirection( nextMoviment.direction );
            if ( movimentState.dead ) {alert("VOCÊ MORREU, REINICIE O JOGO"), location.reload();};
            if ( movimentState.chest ) alert("VOCÊ ENCONTROU O TESOURO");
            if ( movimentState.door ) alert("VOCÊ VENCEU, CONGRATS!!");
        };
    }

    useEffect(()=>{
        window.addEventListener( 'keydown', handlerKeys )
        return () => window.removeEventListener( 'keydown', handlerKeys )
    },[]);
    
    return { position, direction };
};

export default usePlayerMovement;

