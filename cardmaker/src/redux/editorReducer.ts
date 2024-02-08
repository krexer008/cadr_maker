import { createHistory } from "../model/history";
import {
    ArtBlockType,
    Editor,
    ImageBlockType,
    TextBlockType,
} from "../model/types";
import { getEditorModel } from "../utils/utils";
import { EditorAction, EditorActionType } from "./editorActions";

const initialEditorData = getEditorModel();

const history = createHistory<Editor>(initialEditorData); // создаем историю команд

const editorReducer = (
    state: Editor = initialEditorData,
    action: EditorAction
) => {
    switch (action.type) {
        case EditorActionType.CHANGE_ART: {
            const { newArt } = action.payload;
            const active = state.canvas.active;
            const newBlocksState = state.canvas.blocks.map((block) => {
                if (block.id === active) {
                    return {
                        ...block,
                        value: newArt,
                    } as ArtBlockType;
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
        case EditorActionType.CHANGE_FONT_BOLD: {
            const { newBold, blockIndex } = action.payload;
            const newBlocksState = state.canvas.blocks.map((block, index) => {
                if (index === blockIndex) {
                    return {
                        ...block,
                        bold: newBold,
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
        case EditorActionType.CHANGE_FONT_CURSIVE: {
            const { newCursive, blockIndex } = action.payload;
            const newBlocksState = state.canvas.blocks.map((block, index) => {
                if (index === blockIndex) {
                    return {
                        ...block,
                        cursive: newCursive,
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
        case EditorActionType.CHANGE_FONT_UNDERLINE: {
            const { newUnderline, blockIndex } = action.payload;
            const newBlocksState = state.canvas.blocks.map((block, index) => {
                if (index === blockIndex) {
                    return {
                        ...block,
                        underline: newUnderline,
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
        case EditorActionType.CHANGE_FONT_FAMILY: {
            const { newFontFamily, blockIndex } = action.payload;
            const newBlocksState = state.canvas.blocks.map((block, index) => {
                if (index === blockIndex) {
                    return {
                        ...block,
                        fontFamily: newFontFamily,
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
        case EditorActionType.CHANGE_FONT_SIZE: {
            const { newFontSize, blockIndex } = action.payload;
            const newBlocksState = state.canvas.blocks.map((block, index) => {
                if (index === blockIndex) {
                    return {
                        ...block,
                        fontSize: newFontSize,
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

        case EditorActionType.CHANGE_COLOR: {
            const { newColor } = action.payload;
            const active = state.canvas.active;
            if (active == state.canvas.id) {
                const updateCanvas = {
                    ...state.canvas,
                    bgColor: newColor,
                };
                const updateState = {
                    ...state,
                    canvas: updateCanvas,
                };
                history.addHistoryItem(updateState);
                return updateState;
            } else {
                const newBlocksState = [...state.canvas.blocks].map((block) => {
                    if (block.id === active && "color" in block) {
                        return {
                            ...block,
                            color: newColor,
                        };
                    }
                    return block;
                });
                const updateCanvas = {
                    ...state.canvas,
                    blocks: newBlocksState,
                };
                const updateState = {
                    ...state,
                    canvas: updateCanvas,
                };
                history.addHistoryItem(updateState);
                return updateState;
            }
        }

        case EditorActionType.CHANGE_IMAGE: {
            const { newImage } = action.payload;
            const active = state.canvas.active;
            if (active == state.canvas.id) {
                const updateCanvas = {
                    ...state.canvas,
                    bgImage: newImage,
                };
                const updateState = {
                    ...state,
                    canvas: updateCanvas,
                };
                history.addHistoryItem(updateState);
                return updateState;
            } else {
                const newBlocksState = [...state.canvas.blocks].map((block) => {
                    if (block.id === active && "image" in block) {
                        return {
                            ...block,
                            image: newImage,
                        } as ImageBlockType;
                    }
                    return block;
                });
                const updateCanvas = {
                    ...state.canvas,
                    blocks: newBlocksState,
                };
                const updateState = {
                    ...state,
                    canvas: updateCanvas,
                };
                history.addHistoryItem(updateState);
                return updateState;
            }
        }

        case EditorActionType.DRAG_N_DROP: {
            const { activeBlockId, blockSize, blockPosition } = action.payload;
            const newBlocksState = state.canvas.blocks.map((block) => {
                if (block.id === activeBlockId) {
                    return {
                        ...block,
                        size: blockSize,
                        position: blockPosition,
                    };
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
                active: newBlock.id,
            };
            const updateState = {
                ...state,
                canvas: newCanvas,
            };
            history.addHistoryItem(updateState);
            return updateState;
        }

        case EditorActionType.CHANGE_CANVAS_HEIGHT: {
            const { newHeight } = action.payload;
            const newSize = {
                ...state.canvas.size,
                height: newHeight,
            };
            const newCanvas = {
                ...state.canvas,
                size: newSize,
            };
            const updateState = {
                ...state,
                canvas: newCanvas,
            };
            history.addHistoryItem(updateState);
            return updateState;
        }
        case EditorActionType.CHANGE_CANVAS_WIDHT: {
            const { newWidth } = action.payload;
            const newSize = {
                ...state.canvas.size,
                width: newWidth,
            };
            const newCanvas = {
                ...state.canvas,
                size: newSize,
            };
            const updateState = {
                ...state,
                canvas: newCanvas,
            };
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
