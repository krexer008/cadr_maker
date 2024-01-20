import { Editor } from "../model/types";
import { getEditorModel } from "../utils/utils";
import { EditorAction, EditorActionType } from "./editorActions";

const initialEditorData = getEditorModel();

const editorReducer = (
  state: Editor = initialEditorData,
  action: EditorAction,
) => {
  switch (action.type) {
    case EditorActionType.CHANGE_ACTIVE:
      return {
        ...state,
        active: action.payload,
      };
    case EditorActionType.SAVE_CANVAS:
      return {
        ...state,
        canvas: action.payload.canvas,
      };
    case EditorActionType.CHANGE_SIZE:
      return {
        ...state,
        size: action.payload,
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
    case EditorActionType.NEW_CANVAS:
      return {
        ...state,
        canvas: action.payload.newCanvas,
      };
    case EditorActionType.EMPTY_EDITOR:
      return {
        ...state,
        editor: action.payload.newEditor,
      };
    default:
      return state;
  }
};

export { editorReducer };
