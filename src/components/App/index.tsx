import React, { FC } from "react";
import "./style";
import Environment from "../Environment";
import CanvasProvider from "../../contexts/canvas";
import Debugger from "../Debugger";

const App: FC = () => {
    return (
        <div className="App">
            <CanvasProvider>
                <Environment />
                <Debugger />
            </CanvasProvider>
        </div>
    )
};

export default App;