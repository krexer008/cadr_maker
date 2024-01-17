import { EditorActionType } from "./editorActions";
import { Canvas, Editor } from "../model/types";

function createLoadCanvas(loadedCanvases: Editor) {
  return {
    type: EditorActionType.LOAD_CANVAS,
    payload: {
      loadCanvas: loadedCanvases.canvas,
    },
  };
}

function createNewCanvas(newCanvas: Canvas) {
  return {
    type: EditorActionType.NEW_CANVAS,
    payload: {
      newCanvas,
    },
  };
}

function createEmptyEditor(newEditor: Editor) {
  return {
    type: EditorActionType.EMPTY_EDITOR,
    payload: {
      newEditor,
    },
  };
}

export { createLoadCanvas, createNewCanvas, createEmptyEditor };
