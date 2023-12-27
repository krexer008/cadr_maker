import React from "react";
import Canvas from "../Canvas/Canvas";
import css from "./Workspace.module.css";
import { templateArr } from "../../data/full_data";

function Workspace() {
    return (
        <div className={css.workspace}>
            <Canvas block={templateArr[0].canvas} />
        </div>
    );
}
export default Workspace;
