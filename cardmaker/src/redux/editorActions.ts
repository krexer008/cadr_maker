import { Canvas, Editor } from "../model/types";

enum EditorActionType {
    NEW_CANVAS = "NEW_CANVAS",
    NEW_EDITOR = "NEW_EDITOR",
}

interface NewCanvasAction {
    type: EditorActionType.NEW_CANVAS;
    payload: {
        newCanvas: Canvas;
    };
}

interface NewEditorAction {
    type: EditorActionType.NEW_EDITOR;
    payload: {
        newEditor: Editor;
    };
}

type EditorAction = NewCanvasAction | NewEditorAction;

export { EditorActionType, type EditorAction };
