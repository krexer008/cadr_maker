import { EditorActionType } from "./editorActions";
import {
    ArtBlockType,
    Canvas,
    Editor,
    ImageBlockType,
    Position,
    Size,
    TextBlockType,
} from "../model/types";

function createChangeCanvasColorAction(newColor: string) {
    return {
        type: EditorActionType.CHANGE_CANVAS_COLOR,
        payload: { newColor },
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

function createChangeTextBlockValue(textValue: string, blockIndex: number) {
    return {
        type: EditorActionType.CHANGE_TEXT_VALUE,
        payload: { textValue, blockIndex },
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
    createChangeCanvasColorAction,
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
