import {
    ArtBlockType,
    Canvas,
    Editor,
    ImageBlockType,
    Position,
    Size,
    TextBlockType,
} from "../model/types";

enum EditorActionType {
    CHANGE_CANVAS_COLOR = "CHANGE_CANVAS_COLOR",
    DRAG_N_DROP = "DRAG_N_DROP",
    DELETE_BLOCK = "DELETE_BLOCK",
    ADD_BLOCK = "ADD_BLOCK",
    CHANGE_TEXT_VALUE = "CHANGE_TEXT_VALUE",
    SELECT_ACTIVE = "SELECT_ACTIVE",
    UPDATE_EDITOR = "UPDATE_EDITOR",
    LOAD_CANVAS = "LOAD_CANVAS",
    SAVE_CANVAS = "SAVE_CANVAS",
    EMPTY_EDITOR = "NEW_EDITOR",
    UNDO = "UNDO",
    REDO = "REDO",
}

type ChangeCanvasColorAction = {
    type: EditorActionType.CHANGE_CANVAS_COLOR;
    payload: {
        newColor: string;
    };
};

type DragAndDropAction = {
    type: EditorActionType.DRAG_N_DROP;
    payload: {
        activeBlockId: string;
        blockSize: Size;
        blockPosition: Position;
    };
};

type DeleteBlockAction = {
    type: EditorActionType.DELETE_BLOCK;
    payload: {
        deleteBlockId: string;
    };
};
type AddBlockAction = {
    type: EditorActionType.ADD_BLOCK;
    payload: {
        newBlock: TextBlockType | ImageBlockType | ArtBlockType;
    };
};

type ChangeTextBlockValue = {
    type: EditorActionType.CHANGE_TEXT_VALUE;
    payload: {
        textValue: string;
        blockIndex: number;
    };
};

type SelectActiveAction = {
    type: EditorActionType.SELECT_ACTIVE;
    payload: {
        activeId: string;
    };
};

type SaveCanvasAction = {
    type: EditorActionType.SAVE_CANVAS;
    payload: {
        updatedCanvas: Canvas;
    };
};

type LoadCanvasAction = {
    type: EditorActionType.LOAD_CANVAS;
    payload: {
        loadCanvas: Canvas;
    };
};

type EmptyEditorAction = {
    type: EditorActionType.EMPTY_EDITOR;
    payload: {
        newEditor: Editor;
    };
};

type UndoAction = {
    type: EditorActionType.UNDO;
};

type RedoAction = {
    type: EditorActionType.REDO;
};

type EditorAction =
    | ChangeCanvasColorAction
    | DragAndDropAction
    | DeleteBlockAction
    | AddBlockAction
    | ChangeTextBlockValue
    | SelectActiveAction
    | SaveCanvasAction
    | LoadCanvasAction
    | EmptyEditorAction
    | UndoAction
    | RedoAction;

export { EditorActionType, type EditorAction };
