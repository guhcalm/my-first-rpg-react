import React from "react";
import "./style";
import Tileset from "../Tileset";
import Player from "../Player";
import Demon from "../Demon";
import MiniDemon from "../MiniDemon";
import Trap from "../Trap";
import Chest from "../Chest";

const Environment = () => (
    <div className="Environment">
        <Tileset/>
        <Player/>
        <Demon/>
        <MiniDemon/>
        <Trap/>
        <Chest/>
    </div>
);

export default Environment;