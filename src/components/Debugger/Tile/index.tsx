import React from "react";
import "./style";
import { TILE_SIZE } from "../../../settings/constants";
import { CanvasEnum } from "../../../contexts/canvas/helpers";

interface PropsInterface { position: { x: number, y: number }, text: number }

const Tile = (props: PropsInterface) => { 
    const getTileColor = () => {
        switch (props.text) {
            case CanvasEnum.FLOOR:      return 'rgba(0,0,0,.3)';
            case CanvasEnum.WALL:       return 'yellow';
            case CanvasEnum.DOOR:       return 'cyan';
            case CanvasEnum.TRAP:       return 'orange';
            case CanvasEnum.MINI_DEMON: return 'orange';
            case CanvasEnum.DEMON:      return 'red';
            case CanvasEnum.CHEST:      return 'magenta';
            case CanvasEnum.PLAYER:     return 'white';
        }
    }
    return (
        <div className="Tile" style={{
            color: getTileColor(),
            borderColor: getTileColor(),
            top:  TILE_SIZE * props.position.y,
            left: TILE_SIZE *  props.position.x
        }}>{ props.text }</div>
    )
}

export default Tile;