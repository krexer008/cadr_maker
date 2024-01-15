import React from "react";
import { Canvas } from "../../model/types";
import CanvasView from "../Canvas/CanvasView";
import css from "./Workspace.module.css";

type WorkspaceProps = {
    canvasData: Canvas;
    onSelectCanvas: () => void;
};

function Workspace() {
    return (
        <div className={css.workspace}>
            <CanvasView />
        </div>
    );
}
export default Workspace;
