import React from "react";
import { templateArr } from "../../data/full_data";
import Canvas from "../Canvas/Canvas";
import Toolbar from "../Toolbar/Toolbar";
import css from "./Main.module.css";

function Main() {
    return (
        <div className={css.main}>
            <Toolbar />
            <Canvas block={templateArr[0].canvas} />
        </div>
    );
}
export default Main;
