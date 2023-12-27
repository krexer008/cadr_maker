import React from "react";
import { templateArr } from "../../data/full_data";
import Canvas from "../Canvas/Canvas";
import css from "./Workspace.module.css";

function Workspace() {
    return (
        <div className={css.workspace}>
            <Canvas canvas={templateArr[0].canvas} />
        </div>
    );
}
export default Workspace;
