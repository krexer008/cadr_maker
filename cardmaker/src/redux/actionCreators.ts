import { EditorActionType } from "./editorActions";
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

function createChangeArtAction(newArt: ArtValue) {
    return {
        type: EditorActionType.CHANGE_ART,
        payload: { newArt },
    };
}

function createChangeFontBoldlineAction(newBold: boolean, blockIndex: number) {
    return {
        type: EditorActionType.CHANGE_FONT_BOLD,
        payload: { newBold, blockIndex },
    };
}

function createChangeFontCursivelineAction(
    newCursive: boolean,
    blockIndex: number
) {
    return {
        type: EditorActionType.CHANGE_FONT_CURSIVE,
        payload: { newCursive, blockIndex },
    };
}

function createChangeFontUnderlineAction(
    newUnderline: boolean,
    blockIndex: number
) {
    return {
        type: EditorActionType.CHANGE_FONT_UNDERLINE,
        payload: { newUnderline, blockIndex },
    };
}

function createChangeFontFamilyAction(
    newFontFamily: string,
    blockIndex: number
) {
    return {
        type: EditorActionType.CHANGE_FONT_FAMILY,
        payload: { newFontFamily, blockIndex },
    };
}

function createChangeFontSizeAction(newFontSize: number, blockIndex: number) {
    return {
        type: EditorActionType.CHANGE_FONT_SIZE,
        payload: { newFontSize, blockIndex },
    };
}

function createChangeTextBlockValue(textValue: string, blockIndex: number) {
    return {
        type: EditorActionType.CHANGE_TEXT_VALUE,
        payload: { textValue, blockIndex },
    };
}

function createChangeColorAction(newColor: ColorType) {
    return {
        type: EditorActionType.CHANGE_COLOR,
        payload: { newColor },
    };
}

function createChangeImageAction(newImage: ImageType) {
    return {
        type: EditorActionType.CHANGE_IMAGE,
        payload: { newImage },
    };
}

function createChangeCanvasHeightAction(newHeight: number) {
    return {
        type: EditorActionType.CHANGE_CANVAS_HEIGHT,
        payload: { newHeight },
    };
}
function createChangeCanvasWidthAction(newWidth: number) {
    return {
        type: EditorActionType.CHANGE_CANVAS_WIDHT,
        payload: { newWidth },
    };
}
function createDragAndDropAction(
    activeBlockId: string,
    blockSize: Size,
    blockPosition: Position
) {
    return {
        type: EditorActionType.DRAG_N_DROP,
        payload: {
            activeBlockId,
            blockSize,
            blockPosition,
        },
    };
}

function createDeleteBlockAction(deleteBlockId: string) {
    return {
        type: EditorActionType.DELETE_BLOCK,
        payload: { deleteBlockId },
    };
}

function createAddBlockAction(
    newBlock: TextBlockType | ImageBlockType | ArtBlockType
) {
    return {
        type: EditorActionType.ADD_BLOCK,
        payload: { newBlock },
    };
}

function createSelectActiveAction(activeId: string) {
    return {
        type: EditorActionType.SELECT_ACTIVE,
        payload: { activeId },
    };
}

function createSaveCanvasAction(updatedCanvas: Canvas) {
    return {
        type: EditorActionType.SAVE_CANVAS,
        payload: { updatedCanvas },
    };
}

function createLoadCanvas(loadedCanvases: Editor) {
    return {
        type: EditorActionType.LOAD_CANVAS,
        payload: { loadCanvas: loadedCanvases.canvas },
    };
}

function createEmptyEditor(newEditor: Editor) {
    return {
        type: EditorActionType.EMPTY_EDITOR,
        payload: { newEditor },
    };
}

function createUndoAction() {
    return {
        type: EditorActionType.UNDO,
    };
}

function createRedoAction() {
    return {
        type: EditorActionType.REDO,
    };
}

export {
    createChangeArtAction,
    createChangeFontBoldlineAction,
    createChangeFontCursivelineAction,
    createChangeFontUnderlineAction,
    createChangeFontFamilyAction,
    createChangeFontSizeAction,
    createChangeColorAction,
    createChangeImageAction,
    createChangeCanvasHeightAction,
    createChangeCanvasWidthAction,
    createDragAndDropAction,
    createDeleteBlockAction,
    createAddBlockAction,
    createChangeTextBlockValue,
    createSelectActiveAction,
    createSaveCanvasAction,
    createLoadCanvas,
    createEmptyEditor,
    createUndoAction,
    createRedoAction,
};
