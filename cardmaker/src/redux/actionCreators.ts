import { EditorActionType } from "./editorActions";
import { Canvas, Editor } from "../model/types";

function createUpdateCanvas(tempEditor: Editor) {
  return {
    type: EditorActionType.UPDATE_EDITOR,
    payload: { tempEditor },
  };
}

function createLoadCanvas(loadedCanvases: Editor) {
  return {
    type: EditorActionType.LOAD_CANVAS,
    payload: { loadCanvas: loadedCanvases.canvas },
  };
}

function createNewCanvas(newCanvas: Canvas) {
  return {
    type: EditorActionType.NEW_CANVAS,
    payload: { newCanvas },
  };
}

function createEmptyEditor(newEditor: Editor) {
  return {
    type: EditorActionType.EMPTY_EDITOR,
    payload: { newEditor },
  };
}

export {
  createUpdateCanvas,
  createLoadCanvas,
  createNewCanvas,
  createEmptyEditor,
};
