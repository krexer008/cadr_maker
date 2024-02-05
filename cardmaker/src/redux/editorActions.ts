import { Canvas, Editor } from "../model/types";

enum EditorActionType {
    CHANGE_TEXT_VALUE = "CHANGE_TEXT_VALUE",
    SELECT_ACTIVE = "SELECT_ACTIVE",
    UPDATE_EDITOR = "UPDATE_EDITOR",
    LOAD_CANVAS = "LOAD_CANVAS",
    SAVE_CANVAS = "SAVE_CANVAS",
    EMPTY_EDITOR = "NEW_EDITOR",
    UNDO = "UNDO",
    REDO = "REDO",
}

type ChangeTextBlockValue = {
    type: EditorActionType.CHANGE_TEXT_VALUE;
    payload: {
        textValue: string;
        blockIndex: number;
    };
};

type SelectActiveAction = {
    type: EditorActionType.SELECT_ACTIVE;
    payload: {
        activeId: string;
    };
};

type SaveCanvasAction = {
    type: EditorActionType.SAVE_CANVAS;
    payload: {
        updatedCanvas: Canvas;
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

type UndoAction = {
    type: EditorActionType.UNDO;
};

type RedoAction = {
    type: EditorActionType.REDO;
};

type EditorAction =
    | ChangeTextBlockValue
    | SelectActiveAction
    | SaveCanvasAction
    | LoadCanvasAction
    | EmptyEditorAction
    | UndoAction
    | RedoAction;

export { EditorActionType, type EditorAction };
