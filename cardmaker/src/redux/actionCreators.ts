import { EditorActionType } from "./editorActions";
import { Canvas, Editor } from "../model/types";

function createSaveCanvasAction(updatedCanvas: Canvas) {
    return {
        type: EditorActionType.SAVE_CANVAS,
        payload: { updatedCanvas },
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
    createSaveCanvasAction,
    createUpdateCanvas,
    createLoadCanvas,
    createEmptyEditor,
};
