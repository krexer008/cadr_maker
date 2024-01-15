import { Canvas, Editor } from "../model/types";


enum ActionType {
    NEW_EDITOR = "NEW_EDITOR",
    NEW_CANVAS = "NEW_CANVAS",
}

type NewCanvasAction = {
    type: ActionType.NEW_EDITOR;
    payload: {
        newCanvas: Canvas;
    };
};

type NewEditorAction = {
    type: ActionType.NEW_EDITOR;
    payload: {
        newEditor: Editor;
    };
};

type Action =
    | NewCanvasAction
    | NewEditorAction;

export { ActionType, type Action };
