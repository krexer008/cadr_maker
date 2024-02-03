import { Canvas, Editor, Size } from "../model/types";

enum EditorActionType {
    UPDATE_EDITOR = "UPDATE_EDITOR",
    LOAD_CANVAS = "LOAD_CANVAS",
    SAVE_CANVAS = "SAVE_CANVAS",
    EMPTY_EDITOR = "NEW_EDITOR",
}

type SaveCanvasAction = {
    type: EditorActionType.SAVE_CANVAS;
    payload: {
        updatedCanvas: Canvas;
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

type EmptyEditorAction = {
    type: EditorActionType.EMPTY_EDITOR;
    payload: {
        newEditor: Editor;
    };
};

type EditorAction =
    | SaveCanvasAction
    | updateCanvasAction
    | LoadCanvasAction
    | EmptyEditorAction;

export { EditorActionType, type EditorAction };
