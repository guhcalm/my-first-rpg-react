import React from "react";
import useEnemyMovement from "../../hooks/useEnemyMovement";
import { DEMON_SIZE, DirectionEnum, TILE_SIZE } from "../../settings/constants";
import "./style";

interface PropsInterface { position: { x: number, y: number } }

const Demon = (props: PropsInterface) => {
    const { position, direction } = useEnemyMovement( props.position );
    return (
        <div className="Demon" style={
            {
                backgroundImage: "url( './assets/DEMON.png' )",
                width: DEMON_SIZE,
                top: TILE_SIZE * position.y,
                left: TILE_SIZE * position.x,
                transform: `scaleX(${ direction === DirectionEnum.RIGHT ? 1 : -1 }) translateY(-48px)`
            }
        }/>
    )
}

export default Demon;