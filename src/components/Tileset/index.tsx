import React from "react";
import "./style";
import { TILESET_SIZE } from "../../settings/constants";

const Tileset = () => (
    <div className="Tileset" style={{
        width: TILESET_SIZE,
        height: TILESET_SIZE,
        backgroundImage: "url( './assets/tileset.gif' )"
    }}>
    </div>
);

export default Tileset;