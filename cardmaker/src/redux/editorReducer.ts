import { Editor } from "../model/types";
import { getEditorModel } from "../utils/utils";
import { EditorActionType, EditorAction } from "./editorActions";

const initialEditorData = getEditorModel();

const editorReducer = (
  state: Editor = initialEditorData,
  action: EditorAction
): Editor => {
  switch (action.type) {
    case EditorActionType.CHANGE_CANVAS_SIZE:
      return {

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
        canvas: action.payload.newEditor.canvas,
        templates: action.payload.newEditor.templates,
      };
    default:
      return state;
  }
};

export { editorReducer };
