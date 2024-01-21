import { EditorActionType } from "./editorActions";
import { Canvas, Editor, Size } from "../model/types";

function createChangeActiveAction(activeElement: string) {
    return {
        type: EditorActionType.CHANGE_ACTIVE,
        payload: activeElement,
    };
}

function createChangeSize(newSize: Size) {
    return {
        type: EditorActionType.CHANGE_SIZE,
        payload: { newSize },
    };
}

function createSaveCanvasAction(updatedCanvas: Canvas) {
    return {
        type: EditorActionType.SAVE_CANVAS,
        payload: { updatedCanvas },
    };
}

function createNewCanvas(newCanvas: Canvas) {
    return {
        type: EditorActionType.NEW_CANVAS,
        payload: { newCanvas },
    };
}

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

function createEmptyEditor(newEditor: Editor) {
    return {
        type: EditorActionType.EMPTY_EDITOR,
        payload: { newEditor },
    };
}

export {
    createChangeActiveAction,
    createSaveCanvasAction,
    createChangeSize,
    createUpdateCanvas,
    createLoadCanvas,
    createNewCanvas,
    createEmptyEditor,
};
