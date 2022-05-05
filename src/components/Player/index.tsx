import React, { useEffect, useState } from "react";
import "./style";
import { TILE_SIZE } from "../../settings/constants";
import usePlayerMovement from "../../hooks/usePlayerMovement";
import { DirectionEnum } from "../../settings/constants";
import { Canvas } from "../../contexts/canvas/helpers"

interface PropsInterface { position: { x: number, y: number } }

const Player = (props: PropsInterface) => {
    const { position, direction } = usePlayerMovement( props.position );
    Canvas[position.y][position.x] = 7
    return (
        <div className="Player" style={
            {
                backgroundImage: "url( './assets/HERO.png' )",
                width: TILE_SIZE,
                top: TILE_SIZE * position.y,
                left: TILE_SIZE * position.x,
                transform: `scaleX(${ direction === DirectionEnum.RIGHT ? 1 : -1 }) translateY(-48px)`
            }
        }/>
    )
}

export default Player;