import { Editor } from "../model/types";
import { getEditorModel } from "../utils/utils";
import { EditorActionType, EditorAction } from "./editorActions";

const initialEditorData = getEditorModel();

const editorReducer = (
    state: Editor = initialEditorData,
    action: EditorAction,
): Editor => {
    switch (action.type) {
        case EditorActionType.NEW_CANVAS:
            const { newCanvas } = action.payload;
            return {
                ...state,
                canvas: [...state.canvas, newCanvas],
            };
        case EditorActionType.EMPTY_EDITOR:
            const { newEditor } = action.payload;
            return {
                ...state,
                canvas: newEditor.canvas,
                templates: newEditor.templates,
                active: newEditor.active,
            };
        default:
            return state;
    }
};

export { editorReducer };
