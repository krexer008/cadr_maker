import React from "react";
import css from "./Toolbar.module.css";
import ChangeArt from "./tools/ChangeArt/ChangeArt";
import ChangeCanvasSize from "./tools/ChangeCanvasSize/ChangeCanvasSize";
import ChangeImage from "./tools/ChangeImage/ChangeImage";
import ChangeTextStyle from "./tools/ChangeTextStyle/ChangeTextStyle";

function Toolbar() {
    return (
        <div className={css.toolbar}>
            <ChangeTextStyle currentSize={12} currentFamily="Arial" />
            <ChangeImage />
            <ChangeArt />
            <ChangeCanvasSize />
        </div>
    );
}
export default Toolbar;
