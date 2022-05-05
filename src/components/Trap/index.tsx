import React from "react";
import { TILE_SIZE } from "../../settings/constants";
import "./style";

interface PropsInterface { position: { x: number, y: number } }

const Trap = (props: PropsInterface) => {
    return (
        <div className="Trap" style={
            {
                backgroundImage: "url( './assets/TRAP.png' )",
                width: TILE_SIZE,
                top: TILE_SIZE * props.position.y,
                left: TILE_SIZE * props.position.x
            }
        }/>
    )
}

export default Trap;