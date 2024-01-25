import { Editor } from "../model/types";
import { getEditorModel } from "../utils/utils";
import { EditorAction, EditorActionType } from "./editorActions";

const initialEditorData = getEditorModel();

const editorReducer = (
    state: Editor = initialEditorData,
    action: EditorAction
) => {
    switch (action.type) {
        case EditorActionType.CHANGE_SIZE:
            return {
                ...state,
                size: action.payload.newSize,
            };
        case EditorActionType.SAVE_CANVAS:
            return {
                ...state,
                canvas: action.payload.updatedCanvas,
            };
        case EditorActionType.NEW_CANVAS:
            return {
                ...state,
                canvas: action.payload.newCanvas,
            };
        case EditorActionType.UPDATE_EDITOR:
            return {
                ...state,
                canvas: action.payload.tempEditor.canvas,
                templates: action.payload.tempEditor.templates,
            };
        case EditorActionType.LOAD_CANVAS:
            return {
                ...state,
                canvas: action.payload.loadCanvas,
            };
        case EditorActionType.EMPTY_EDITOR:
            return {
                state: action.payload.newEditor,
            };
        default:
            return state;
    }
};

export { editorReducer };
