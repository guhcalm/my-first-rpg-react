import React from "react";
import { TILE_SIZE } from "../../settings/constants";
import "./style";

interface PropsInterface { position: { x: number, y: number } }

const Chest = (props: PropsInterface) => {  
    return (
        <div className="Chest" style={
            {
                backgroundImage: "url( './assets/CHEST.png' )",
                width: TILE_SIZE,
                top: TILE_SIZE * props.position.y,
                left: TILE_SIZE * props.position.x
            }
        }/>
    )
}

export default Chest;