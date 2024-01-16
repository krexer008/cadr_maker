import { Canvas, Editor } from "../model/types";
import { EditorActionType } from "./editorActions";

function createNewCanvas(newCanvas: Canvas) {
    return {
        type: EditorActionType.NEW_CANVAS,
        payload: {
            newCanvas,
        },
    };
}

function createEmptyEditor(newEditor: Editor) {
    return {
        type: EditorActionType.EMPTY_EDITOR,
        payload: {
            newEditor,
        },
    };
}
