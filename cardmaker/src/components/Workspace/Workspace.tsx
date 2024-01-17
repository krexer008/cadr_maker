import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { selectEditor } from "../../redux/selectors";
import CanvasView from "../Canvas/CanvasView";
import css from "./Workspace.module.css";

function Workspace() {
  const editorData = useAppSelector(selectEditor);
  return (
    <div className={css.workspace}>
      <CanvasView canvasData={editorData.canvas} />
    </div>
  );
}
export default Workspace;
