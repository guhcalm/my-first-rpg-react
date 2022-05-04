import React from "react";
import { DEMON_SIZE, TILE_SIZE } from "../../settings/constants";
import "./style";

const Demon = () => (
    <div className="Demon" style={
        {
            backgroundImage: "url( './assets/DEMON.png' )",
            width: DEMON_SIZE,
            bottom: TILE_SIZE * Math.floor( Math.random() * 17 + 1 ),
            left: TILE_SIZE * Math.floor( Math.random() * 19 )
        }
    }/>
)

export default Demon;