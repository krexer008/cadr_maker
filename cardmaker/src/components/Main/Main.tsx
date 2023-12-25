import React from "react";
import Toolbar from "../Toolbar/Toolbar";
import Canvas from "../Canvas/Canvas";
import css from "./Main.module.css";

function Main() {
    return (
        <div className={css.main}>
            <Toolbar />
            <Canvas />
        </div>
    );
}
export default Main;
