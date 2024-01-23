import React from "react";
import ChangeColor from "../ChangeColor/ChangeColor";
import ChangeCanvasImage from "./ChangeCanvasImage/ChangeCanvasImage";
import ChangeSize from "./ChangeSize/ChangeSize";

function ChangeCanvas() {    
    return (
        <div>
            <ChangeColor title="Color" color="grey" />
            <ChangeCanvasImage />
            <ChangeSize />
        </div>
    );
}

export default ChangeCanvas;
