import { Editor } from "../model/types";
import { getEditorModel } from "../utils/utils";
import { ActionType, Action } from "./editorAction";

const defaultEditorData: Editor = getEditorModel();

const editorReducer = (state: Editor = defaultEditorData, action: Action) => {
    switch (action.type) {
        case ActionType.NEW_EDITOR:
            return { ...state, editor: action.payload.newEditor };
        default:
            return state;
    }
};

export { editorReducer };
