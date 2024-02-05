import { EditorActionType } from "./editorActions";
import { Canvas, Editor } from "../model/types";

function createChangeTextBlockValue(textValue: string, blockIndex: number) {
    return {
        type: EditorActionType.CHANGE_TEXT_VALUE,
        payload: { textValue, blockIndex },
    };
}

function createSelectActiveAction(activeId: string) {
    return {
        type: EditorActionType.SELECT_ACTIVE,
        payload: { activeId },
    };
}

function createSaveCanvasAction(updatedCanvas: Canvas) {
    return {
        type: EditorActionType.SAVE_CANVAS,
        payload: { updatedCanvas },
    };
}

function createLoadCanvas(loadedCanvases: Editor) {
    return {
        type: EditorActionType.LOAD_CANVAS,
        payload: { loadCanvas: loadedCanvases.canvas },
    };
}

function createEmptyEditor(newEditor: Editor) {
    return {
        type: EditorActionType.EMPTY_EDITOR,
        payload: { newEditor },
    };
}

function createUndoAction() {
    return {
        type: EditorActionType.UNDO,
    };
}

function createRedoAction() {
    return {
        type: EditorActionType.REDO,
    };
}

export {
    createChangeTextBlockValue,
    createSelectActiveAction,
    createSaveCanvasAction,
    createLoadCanvas,
    createEmptyEditor,
    createUndoAction,
    createRedoAction,
};
