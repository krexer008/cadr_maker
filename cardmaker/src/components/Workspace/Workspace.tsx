import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { selectEditor } from "../../redux/selectors";
import CanvasView from "../Canvas/CanvasView";
import css from "./Workspace.module.css";

type WorkspaceProps = {
  onSelectElement: string;
  selectedActiveId: string | null;
}

function Workspace({onSelectElement, selectedActiveId}: WorkspaceProps) {
  const editorData = useAppSelector(selectEditor);
  //если актив = канвас ид то selectedCanvas = канвас иначе НУЛЛ
  const selectedCanvas = editorData.canvas.id === editorData.canvas.active ? editorData.canvas : null;
  const activeElementId = selectedCanvas?.active || null;
// если selectedCanvas есть то он активный элемент ИД
  if (!editorData) return null;

  const handleElementSelectClick = (elementId: string) => {
    if
  }

  return
  (
    <div className={css.workspace}>
      <CanvasView canvasData={editorData.canvas}/>
    </div>
  );
}

export default Workspace;
