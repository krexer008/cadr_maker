import { Editor } from "../model/types";
import { getEditorModel } from "../utils/utils";



action = { type: "", payload: "" };

const defaultEditorData: Editor = getEditorModel();


const editorReducer = (state: Editor = defaultEditorData, action: Action) => {
    switch (action.type) {
        case "NEW_EDITOR":
            return { ...state, editor: action.payload.newEditor};
        default:
            return state;
    }
};

export { editorReducer };
