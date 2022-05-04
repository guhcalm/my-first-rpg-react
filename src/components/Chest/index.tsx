import React from "react";
import { TILE_SIZE } from "../../settings/constants";
import "./style";

const Chest = () => (
    <div className="Chest" style={
        {
            backgroundImage: "url( './assets/CHEST.png' )",
            width: TILE_SIZE,
            bottom: TILE_SIZE * Math.floor( Math.random() * 17 + 1 ),
            left: TILE_SIZE * Math.floor( Math.random() * 20 )
        }
    }/>
)

export default Chest;