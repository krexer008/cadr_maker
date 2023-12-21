import React from "react";
import Canvas from "../Canvas/Canvas";
import css from "./Workspace.module.css";

function Workspace() {
    return (
        <div className={css.workspace}>
            <Canvas />
        </div>
    );
}
export default Workspace;
