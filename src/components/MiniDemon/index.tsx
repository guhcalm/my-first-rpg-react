import React from "react";
import { TILE_SIZE } from "../../settings/constants";
import "./style";

const MiniDemon = () => (
    <div className="Mini-demon" style={
        {
            backgroundImage: "url( './assets/MINI-DEMON.png' )",
            width: TILE_SIZE,
            bottom: TILE_SIZE * Math.floor( Math.random() * 17 + 1 ),
            left: TILE_SIZE * Math.floor( Math.random() * 20 )
        }
    }/>
)

export default MiniDemon;