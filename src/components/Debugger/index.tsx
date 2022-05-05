import React from "react";
import "./style";
import Tile from "./Tile";
import { useCanvas } from "../../contexts/canvas";

const getCanvasMap = (Canvas) => {
    const tilesComponents = []
    Canvas.forEach((row, y) => {
        row.forEach((value, x) => {
            const position = { x, y }
            const tile = Canvas[y][x]
            const key = `${x}-${y}`
            tilesComponents.push(<Tile key={ key } position={ position } text={ tile }/>)
        })
    })
    return ( tilesComponents );
}

const Debugger = () => {
    const { canvasState } = useCanvas()
    const tiles = getCanvasMap( canvasState.canvas )
    return (
        <div className="Debugger">
            { tiles }
        </div>
    )
}

export default Debugger;