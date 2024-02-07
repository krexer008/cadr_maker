import {
    ArtBlockType,
    ArtValue,
    Canvas,
    ColorType,
    Editor,
    ImageBlockType,
    ImageType,
    Position,
    Size,
    TextBlockType,
} from "../model/types";

enum EditorActionType {
    CHANGE_ART = "CHANGE_ART",
    CHANGE_FONT_BOLD = "CHANGE_FONT_BOLD",
    CHANGE_FONT_CURSIVE = "CHANGE_FONT_CURSIVE",
    CHANGE_FONT_UNDERLINE = "CHANGE_FONT_UNDERLINE",
    CHANGE_FONT_FAMILY = "CHANGE_FONT_FAMILY",
    CHANGE_FONT_SIZE = "CHANGE_FONT_SIZE",
    CHANGE_TEXT_VALUE = "CHANGE_TEXT_VALUE",
    CHANGE_COLOR = "CHANGE_COLOR",
    CHANGE_IMAGE = "CHANGE_IMAGE",
    CHANGE_CANVAS_HEIGHT = "CHANGE_CANVAS_HEIGHT",
    CHANGE_CANVAS_WIDHT = "CHANGE_CANVAS_WIDHT",
    DRAG_N_DROP = "DRAG_N_DROP",
    DELETE_BLOCK = "DELETE_BLOCK",
    ADD_BLOCK = "ADD_BLOCK",
    SELECT_ACTIVE = "SELECT_ACTIVE",
    UPDATE_EDITOR = "UPDATE_EDITOR",
    LOAD_CANVAS = "LOAD_CANVAS",
    SAVE_CANVAS = "SAVE_CANVAS",
    EMPTY_EDITOR = "NEW_EDITOR",
    UNDO = "UNDO",
    REDO = "REDO",
}

type ChangeArtAction = {
    type: EditorActionType.CHANGE_ART;
    payload: {
        newArt: ArtValue;
    };
};

type ChangeFontBoldAction = {
    type: EditorActionType.CHANGE_FONT_BOLD;
    payload: {
        newBold: boolean;
        blockIndex: number;
    };
};
type ChangeFontCursiveAction = {
    type: EditorActionType.CHANGE_FONT_CURSIVE;
    payload: {
        newCursive: boolean;
        blockIndex: number;
    };
};
type ChangeFontUnderlineAction = {
    type: EditorActionType.CHANGE_FONT_UNDERLINE;
    payload: {
        newUnderline: boolean;
        blockIndex: number;
    };
};
type ChangeFontFamilyAction = {
    type: EditorActionType.CHANGE_FONT_FAMILY;
    payload: {
        newFontFamily: string;
        blockIndex: number;
    };
};
type ChangeFontSizeAction = {
    type: EditorActionType.CHANGE_FONT_SIZE;
    payload: {
        newFontSize: number;
        blockIndex: number;
    };
};

type ChangeTextBlockValue = {
    type: EditorActionType.CHANGE_TEXT_VALUE;
    payload: {
        textValue: string;
        blockIndex: number;
    };
};

type ChangeColorAction = {
    type: EditorActionType.CHANGE_COLOR;
    payload: { newColor: ColorType };
};
type ChangeImageAction = {
    type: EditorActionType.CHANGE_IMAGE;
    payload: { newImage: ImageType };
};
type ChangeCanvasHeightAction = {
    type: EditorActionType.CHANGE_CANVAS_HEIGHT;
    payload: {
        newHeight: number;
    };
};
type ChangeCanvasWidthAction = {
    type: EditorActionType.CHANGE_CANVAS_WIDHT;
    payload: {
        newWidth: number;
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
    | ChangeArtAction
    | ChangeFontBoldAction
    | ChangeFontCursiveAction
    | ChangeFontUnderlineAction
    | ChangeFontFamilyAction
    | ChangeFontSizeAction
    | ChangeColorAction
    | ChangeImageAction
    | ChangeCanvasHeightAction
    | ChangeCanvasWidthAction
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
