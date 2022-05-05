import React, { createContext, useState, ReactNode, FC, useContext } from "react";
import { Canvas } from "./helpers";

export const CanvasContext = createContext(null);
export const useCanvas = () => useContext(CanvasContext);
interface PropsInterface {
    children: ReactNode
}

const CanvasProvider: FC<PropsInterface> = (props) => {
    const [ canvasState, setCanvasState ] = useState({ canvas: Canvas });
    return (
        <CanvasContext.Provider value={ { canvasState, setCanvasState } }>
            { props.children }
        </CanvasContext.Provider>
    )
}

export default CanvasProvider;