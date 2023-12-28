import React from "react";
import css from "./Toolbar.module.css";
import ChangeArt from "./tools/ChangeArt/ChangeArt";
import ChangeCanvasSize from "./tools/ChangeCanvasSize/ChangeCanvasSize";
import ChangeImage from "./tools/ChangeImage/ChangeImage";
import ChangeText from "./tools/ChangeText/ChangeText";

function Toolbar() {
    return (
        <div className={css.toolbar}>
            <ChangeText />
            <ChangeImage />
            <ChangeArt />
            <ChangeCanvasSize />
        </div>
    );
}
export default Toolbar;
