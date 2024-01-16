import { Canvas, Editor } from "../model/types";

enum EditorActionType {
    NEW_CANVAS = "NEW_CANVAS",
    EMPTY_EDITOR = "NEW_EDITOR",
}

type NewCanvasAction = {
    type: EditorActionType.NEW_CANVAS;
    payload: {
        newCanvas: Canvas;
    };
};

type EmptyEditorAction = {
    type: EditorActionType.EMPTY_EDITOR;
    payload: {
        emptyEditor: Editor;
    };
};

type EditorAction = NewCanvasAction | EmptyEditorAction;

export { EditorActionType, type EditorAction };
