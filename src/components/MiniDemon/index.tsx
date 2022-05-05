import React from "react";
import useEnemyMovement from "../../hooks/useEnemyMovement";
import { DirectionEnum, TILE_SIZE } from "../../settings/constants";
import "./style";

interface PropsInterface { position: { x: number, y: number } }

const MiniDemon = (props: PropsInterface) => {
    const { position, direction } = useEnemyMovement( props.position );
    return (
        <div className="Mini-demon" style={
            {
                backgroundImage: "url( './assets/MINI-DEMON.png' )",
                width: TILE_SIZE,
                top: TILE_SIZE * position.y,
                left: TILE_SIZE * position.x,
                transform: `scaleX(${ direction === DirectionEnum.RIGHT ? 1 : -1 }) translateY(-48px)`
            }
        }/>
    )
}

export default MiniDemon;