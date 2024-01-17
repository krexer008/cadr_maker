import { Canvas, Editor } from "../model/types";

enum EditorActionType {
  LOAD_CANVAS = "LOAD_CANVAS",
  NEW_CANVAS = "NEW_CANVAS",
  EMPTY_EDITOR = "NEW_EDITOR",
}

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

type EditorAction = LoadCanvasAction | NewCanvasAction | EmptyEditorAction;

export { EditorActionType, type EditorAction };
