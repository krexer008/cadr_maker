import { Canvas, Editor, Size } from "../model/types";

enum EditorActionType {
  CHANGE_SIZE = "CHANGE_SIZE",
  UPDATE_EDITOR = "UPDATE_EDITOR",
  LOAD_CANVAS = "LOAD_CANVAS",
  NEW_CANVAS = "NEW_CANVAS",
  EMPTY_EDITOR = "NEW_EDITOR",
}

type ChangeSizeAction = {
  type: EditorActionType.CHANGE_SIZE;
  payload: {
    newSize: Size;
  };
};

type updateCanvasAction = {
  type: EditorActionType.UPDATE_EDITOR;
  payload: {
    tempEditor: Editor;
  };
};

type LoadCanvasAction = {
  type: EditorActionType.LOAD_CANVAS;
  payload: {
    loadCanvas: Canvas;
  };
};

type NewCanvasAction = {
  type: EditorActionType.NEW_CANVAS;
  payload: {
    newCanvas: Canvas;
  };
};

type EmptyEditorAction = {
  type: EditorActionType.EMPTY_EDITOR;
  payload: {
    newEditor: Editor;
  };
};

type EditorAction =
  | ChangeSizeAction
  | updateCanvasAction
  | LoadCanvasAction
  | NewCanvasAction
  | EmptyEditorAction;

export { EditorActionType, type EditorAction };
