import { Editor } from "../model/types";
import { getEditorModel } from "../utils/utils";
import { EditorActionType, EditorAction } from "./editorActions";

const initialEditorData: Editor = getEditorModel();

const editorReducer = (
    state: Editor = initialEditorData,
    action: EditorAction,
): Editor => {
    switch (action.type) {
        case EditorActionType.NEW_EDITOR:
            const { newCanvas } = action.payload;
            return { ...state, editor:  };
        default:
            return state;
    }
};

export { editorReducer };
