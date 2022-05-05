import React, { useEffect, useMemo } from "react";
import "./style";
import Tileset from "../Tileset";
import Player from "../Player";
import Demon from "../Demon";
import MiniDemon from "../MiniDemon";
import Trap from "../Trap";
import Chest from "../Chest";
import { CanvasEnum } from "../../contexts/canvas/helpers";
import { useCanvas } from "../../contexts/canvas";

const getCanvasMap = ( Canvas ) => {
    const elements = [];
    Canvas.forEach((row, y) => {
        row.forEach((value, x) => {
            const position = { x, y }
            const text = Canvas[y][x]
            const key = `${x}-${y}`
            switch( text ) {
                case CanvasEnum.PLAYER:
                    elements.push(<Player key={ key } position={ position }/>);
                    break;
                case CanvasEnum.MINI_DEMON:
                    elements.push(<MiniDemon key={ key } position={ position }/>);
                    break;
                case CanvasEnum.DEMON:
                    elements.push(<Demon key={ key } position={ position }/>);
                    break;
                case CanvasEnum.TRAP:
                    elements.push(<Trap key={ key } position={ position }/>);
                    break;
                case CanvasEnum.CHEST:
                    elements.push(<Chest key={ key } position={ position }/>);
                    break;
            }
        })
    })
    return ( elements );
}



const Environment = () => {
    const { canvasState } = useCanvas();
    let elements = useMemo(()=>getCanvasMap( canvasState.canvas ), [canvasState])
    return (
        <div className="Environment">
            <Tileset/>
            { elements }
        </div>
    );
}

export default Environment;