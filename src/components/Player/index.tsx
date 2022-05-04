import React, { useEffect, useState } from "react";
import useEventListener from "@use-it/event-listener";
import "./style";
import { TILE_SIZE } from "../../settings/constants";


const Player = () => {
    const [ position, setPosition ] = useState( { x: 0, y: 0 } );
    const [ direction, setDirection ] = useState( 'RIGHT' )

    useEventListener('keydown', (event: KeyboardEvent) => {
        switch( event.key ) {
            case "ArrowLeft":
                setPosition({ ...position, x: position.x - 1 }); setDirection( "LEFT" );
                break;
            case "ArrowRight":
                setPosition({ ...position, x: position.x + 1 }); setDirection( "RIGHT" );
                break;
            case "ArrowUp":
                setPosition({ ...position, y: position.y + 1 })
                break;
            case "ArrowDown":
                setPosition({ ...position, y: position.y - 1 })
                break;
            default:
        }
    });

    useEffect(() => {

    }, [position])

    return (
        <div className="Player" style={
            {
                backgroundImage: "url( './assets/HERO.png' )",
                width: TILE_SIZE,
                bottom: TILE_SIZE * position.y,
                left: TILE_SIZE * position.x,
                transform: `scaleX(${ direction === "RIGHT" ? 1 : -1 })`
            }
        }/>
    )
}

export default Player;