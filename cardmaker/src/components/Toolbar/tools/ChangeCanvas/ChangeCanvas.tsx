import React from "react";
import ChangeSize from "../ChangeSize/ChangeSize";
import ChangeColor from "../ChangeColor/ChangeColor";
import ChangeImage from "../ChangeImage/ChangeImage";

function ChangeCanvas() {
    return (
        <div>
            <ChangeColor title="Color" color="grey" />
            <ChangeImage />
            <ChangeSize />
        </div>
    );
}

export default ChangeCanvas;
