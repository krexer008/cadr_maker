import React from "react";
import Toolbar from "../Toolbar/Toolbar";
import css from "./Main.module.css";
import Workspace from "../Workspace/Workspace";

function Main() {
    return (
        <div className={css.main}>
            <Toolbar />
            <Workspace />
        </div>
    );
}
export default Main;
