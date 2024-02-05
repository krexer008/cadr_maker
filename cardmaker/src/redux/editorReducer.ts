import { createHistory } from "../model/history";
import { Editor, TextBlockType } from "../model/types";
import { getEditorModel } from "../utils/utils";
import { EditorAction, EditorActionType } from "./editorActions";

const initialEditorData = getEditorModel();

const history = createHistory<Editor>(initialEditorData); // создаем историю команд

const editorReducer = (
    state: Editor = initialEditorData,
    action: EditorAction
) => {
    switch (action.type) {
        case EditorActionType.DRAG_N_DROP: {
            const { activeBlockId, blockSize, blockPosition } = action.payload;
            const newBlocksState = state.canvas.blocks.map((block) => {
                if (block.id === activeBlockId) {
                    return {
                        ...block,
                        size: blockSize,
                        position: blockPosition,
                    } as TextBlockType;
                }
                return block;
            });
            const newCanvas = {
                ...state.canvas,
                blocks: newBlocksState,
            };
            const updateState = {
                ...state,
                canvas: newCanvas,
            };
            history.addHistoryItem(updateState);
            return updateState;
        }

        case EditorActionType.DELETE_BLOCK: {
            const { deleteBlockId } = action.payload;
            const newBlocks = [...state.canvas.blocks].filter(
                (block) => block.id !== deleteBlockId
            );
            const newCanvas = {
                ...state.canvas,
                blocks: newBlocks,
            };
            const updateState = {
                ...state,
                canvas: newCanvas,
            };
            history.addHistoryItem(updateState);
            return updateState;
        }
        case EditorActionType.ADD_BLOCK: {
            const { newBlock } = action.payload;
            const newCanvas = {
                ...state.canvas,
                blocks: [...state.canvas.blocks, newBlock],
            };
            const updateState = {
                ...state,
                canvas: newCanvas,
            };
            history.addHistoryItem(updateState);
            return updateState;
        }

        case EditorActionType.CHANGE_TEXT_VALUE: {
            const { textValue, blockIndex } = action.payload;
            const newBlocksState = state.canvas.blocks.map((block, index) => {
                if (index === blockIndex) {
                    return {
                        ...block,
                        value: textValue,
                    } as TextBlockType;
                }
                return block;
            });
            const newCanvas = {
                ...state.canvas,
                blocks: newBlocksState,
            };
            const updateState = {
                ...state,
                canvas: newCanvas,
            };
            history.addHistoryItem(updateState);
            return updateState;
        }

        case EditorActionType.CHANGE_CANVAS_COLOR: {
            const { newColor } = action.payload;
            const newCanvas = {
                ...state.canvas,
                color: newColor,
            };
            console.log(newColor);
            const updateState = {
                ...state,
                canvas: newCanvas,
            };
            console.log(updateState.canvas.bgColor);
            history.addHistoryItem(updateState);
            return updateState;
        }

        case EditorActionType.SELECT_ACTIVE: {
            const { activeId } = action.payload;
            const newState = {
                ...state.canvas,
                active: activeId,
            };
            const updateState = {
                ...state,
                canvas: newState,
            };
            history.addHistoryItem(updateState);
            return updateState;
        }

        case EditorActionType.SAVE_CANVAS: {
            const { updatedCanvas } = action.payload;
            const newState = {
                ...state,
                canvas: updatedCanvas,
            };
            history.addHistoryItem(newState);
            return newState;
        }
        case EditorActionType.LOAD_CANVAS:
            return {
                ...state,
                canvas: action.payload.loadCanvas,
            };
        case EditorActionType.EMPTY_EDITOR:
            return {
                state: action.payload.newEditor,
            };
        case EditorActionType.UNDO: {
            const prevState = history.undo();
            if (prevState) {
                return prevState;
            }
            return state;
        }
        case EditorActionType.REDO: {
            const nextState = history.redo();
            if (nextState) {
                return nextState;
            }
            return state;
        }
        default:
            return state;
    }
};

export { editorReducer };
