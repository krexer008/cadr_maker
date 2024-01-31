import React, { useRef } from "react";
import active from "./ActiveObjectView.module.css";
import { useAppActions, useAppSelector } from "../../../redux/hooks";
import { selectEditor } from "../../../redux/selectors";

type PreviewObjectProps = {
    isSelected: boolean;
    position: { top: number; left: number };
    size: { width: number; height: number };
    //background: string;
    blockId: string;
    className: string;
    children: React.ReactNode;
    transform: Transform;
};

function PreviewObject({
    isSelected,
    className,
    children,
    position: { top, left },
    size: { width, height },
    //background,
    blockId,
    transform,
}: PreviewObjectProps) {
    const { createSaveCanvasAction } = useAppActions();
    const editorData = useAppSelector(selectEditor);
    const canvas = editorData.canvas;
    const activeBlockId = editorData.canvas.active === blockId ? blockId : "";
    const classNames = `${active.container} ${
        isSelected ? active.selected : active[className]
    }`;

    const refMiddleButton = useRef<HTMLDivElement>(null);
    const refResizeMiddleRight = useRef<HTMLDivElement>(null);
    const refResizeDownRight = useRef<HTMLDivElement>(null);
    const refResizeUpRight = useRef<HTMLDivElement>(null);
    const refResizeUpMiddle = useRef<HTMLDivElement>(null);
    const refResizeMiddleLeft = useRef<HTMLDivElement>(null);
    const refResizeDownLeft = useRef<HTMLDivElement>(null);
    const refResizeUpLeft = useRef<HTMLDivElement>(null);

    let blockSize = { width, height };
    let blockPosition = { top, left };

    const ref = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        canvas.active = blockId;
        createSaveCanvasAction(canvas);
    };

    const { isDragging } = useDragAndDrop(
        { elementRef: ref, isActive: isSelected },
        {
            onPositionChange: (delta) => {
                blockSize = {
                    width,
                    height,
                };

                blockPosition = {
                    left: left + delta.left,
                    top: top + delta.top,
                };

                const updateBlocks = canvas.blocks.map((block) => {
                    if (block.id === activeBlockId) {
                        block.size = blockSize;
                        block.position = blockPosition;
                    }
                    return block;
                });

                canvas.blocks = updateBlocks;
                createSaveCanvasAction(canvas);
            },
        }
    );

    useDragAndDrop(
        { elementRef: refResizeUpLeft, isActive: isSelected },
        {
            onPositionChange: (delta) => {
                blockSize = {
                    width: width - delta.left,
                    height: height - delta.top,
                };

                blockPosition = {
                    left: left + delta.left,
                    top: top + delta.top,
                };

                const updateBlocks = canvas.blocks.map((block) => {
                    if (block.id === activeBlockId) {
                        block.size = blockSize;
                        block.position = blockPosition;
                    }
                    return block;
                });

                canvas.blocks = updateBlocks;
                createSaveCanvasAction(canvas);
            },
        }
    );

    useDragAndDrop(
        { elementRef: refResizeDownLeft, isActive: isSelected },
        {
            onPositionChange: (delta) => {
                blockSize = {
                    width: width - delta.left,
                    height: height + delta.top,
                };

                blockPosition = {
                    left: left + delta.left,
                    top,
                };

                const updateBlocks = canvas.blocks.map((block) => {
                    if (block.id === activeBlockId) {
                        block.size = blockSize;
                        block.position = blockPosition;
                    }
                    return block;
                });

                canvas.blocks = updateBlocks;
                createSaveCanvasAction(canvas);
            },
        }
    );

    useDragAndDrop(
        { elementRef: refResizeMiddleLeft, isActive: isSelected },
        {
            onPositionChange: (delta) => {
                blockSize = {
                    width: width - delta.left,
                    height,
                };

                blockPosition = {
                    left: left + delta.left,
                    top,
                };

                const updateBlocks = canvas.blocks.map((block) => {
                    if (block.id === activeBlockId) {
                        block.size = blockSize;
                        block.position = blockPosition;
                    }
                    return block;
                });

                canvas.blocks = updateBlocks;
                createSaveCanvasAction(canvas);
            },
        }
    );

    useDragAndDrop(
        { elementRef: refResizeUpRight, isActive: isSelected },
        {
            onPositionChange: (delta) => {
                blockSize = {
                    width: width + delta.left,
                    height: height - delta.top,
                };

                blockPosition = {
                    left,
                    top: top + delta.top,
                };

                const updateBlocks = canvas.blocks.map((block) => {
                    if (block.id === activeBlockId) {
                        block.size = blockSize;
                        block.position = blockPosition;
                    }
                    return block;
                });

                canvas.blocks = updateBlocks;
                createSaveCanvasAction(canvas);
            },
        }
    );

    useDragAndDrop(
        { elementRef: refMiddleButton, isActive: isSelected },
        {
            onPositionChange: (delta) => {
                blockSize = {
                    width,
                    height: height + delta.top,
                };

                blockPosition = {
                    left,
                    top,
                };

                const updateBlocks = canvas.blocks.map((block) => {
                    if (block.id === activeBlockId) {
                        block.size = blockSize;
                        block.position = blockPosition;
                    }
                    return block;
                });

                canvas.blocks = updateBlocks;
                createSaveCanvasAction(canvas);
            },
        }
    );

    useDragAndDrop(
        { elementRef: refResizeMiddleRight, isActive: isSelected },
        {
            onPositionChange: (delta) => {
                blockSize = {
                    width: width + delta.left,
                    height,
                };

                blockPosition = {
                    left,
                    top,
                };

                const updateBlocks = canvas.blocks.map((block) => {
                    if (block.id === activeBlockId) {
                        block.size = blockSize;
                        block.position = blockPosition;
                    }
                    return block;
                });

                canvas.blocks = updateBlocks;
                createSaveCanvasAction(canvas);
            },
        }
    );

    useDragAndDrop(
        { elementRef: refResizeDownRight, isActive: isSelected },
        {
            onPositionChange: (delta) => {
                blockSize = {
                    width: width + delta.left,
                    height: height + delta.top,
                };

                blockPosition = {
                    left,
                    top,
                };

                const updateBlocks = canvas.blocks.map((block) => {
                    if (block.id === activeBlockId) {
                        block.size = blockSize;
                        block.position = blockPosition;
                    }
                    return block;
                });

                canvas.blocks = updateBlocks;
                createSaveCanvasAction(canvas);
            },
        }
    );

    useDragAndDrop(
        { elementRef: refResizeUpMiddle, isActive: isSelected },
        {
            onPositionChange: (delta) => {
                blockSize = {
                    width,
                    height: height - delta.top,
                };

                blockPosition = {
                    left,
                    top: top + delta.top,
                };

                const updateBlocks = canvas.blocks.map((block) => {
                    if (block.id === activeBlockId) {
                        block.size = blockSize;
                        block.position = blockPosition;
                    }
                    return block;
                });

                canvas.blocks = updateBlocks;
                createSaveCanvasAction(canvas);
            },
        }
    );

    function getTransformStyle(transform: Transform) {
        switch (transform.type) {
            case "scale":
                return `scale(${transform.value})`;
            default:
                return "";
        }
    }

    const activeStyles = {
        width: blockSize.width,
        height: blockSize.height,
        left: blockPosition.left,
        top: blockPosition.top,
        cursor: isDragging ? "grabbing" : "grab",
        //background: background?.color,
        transform: transform ? getTransformStyle(transform) : "",
    };

    const resizeMiddleRight = {
        top: `${blockSize.height / 2 - 5}px`,
        left: `${blockSize.width - 5}px`,
        cursor: `col-resize`,
    };

    const resizeUpLeft = {
        top: `-8px`,
        left: `-8px`,
        cursor: `nwse-resize`,
    };

    const resizeUpRight = {
        top: `-8px`,
        left: `${blockSize.width - 5}px`,
        cursor: `nesw-resize`,
    };

    const resizeDownLeft = {
        top: `${blockSize.height - 5}px`,
        left: `-8px`,
        cursor: `nesw-resize`,
    };

    const resizeDownRight = {
        top: `${blockSize.height - 5}px`,
        left: `${blockSize.width - 5}px`,
        cursor: `nwse-resize`,
    };

    const resizeUpMiddle = {
        top: `-8px`,
        left: `${blockSize.width / 2 - 5}px`,
        cursor: `row-resize`,
    };

    const resizeDownMiddle = {
        top: `${blockSize.height - 5}px`,
        left: `${blockSize.width / 2 - 5}px`,
        cursor: `row-resize`,
    };

    const resizeMiddleLeft = {
        top: `${blockSize.height / 2 - 5}px`,
        left: `-8px`,
        cursor: `col-resize`,
    };

    return (
        <div
            className={classNames}
            style={activeStyles}
            ref={ref}
            onClick={(event) => {
                handleClick();
                event.stopPropagation();
            }}
        >
            {isSelected && (
                <div
                    className={active.resize}
                    style={resizeUpLeft}
                    ref={refResizeUpLeft}
                ></div>
            )}
            {isSelected && (
                <div
                    className={active.resize}
                    style={resizeUpMiddle}
                    ref={refResizeUpMiddle}
                ></div>
            )}
            {isSelected && (
                <div
                    className={active.resize}
                    style={resizeUpRight}
                    ref={refResizeUpRight}
                ></div>
            )}
            {isSelected && (
                <div
                    className={active.resize}
                    style={resizeMiddleRight}
                    ref={refResizeMiddleRight}
                ></div>
            )}
            {children}
            {isSelected && (
                <div
                    className={active.resize}
                    style={resizeMiddleLeft}
                    ref={refResizeMiddleLeft}
                ></div>
            )}
            {isSelected && (
                <div
                    className={active.resize}
                    style={resizeDownLeft}
                    ref={refResizeDownLeft}
                ></div>
            )}
            {isSelected && (
                <div
                    className={active.resize}
                    style={resizeDownMiddle}
                    ref={refMiddleButton}
                ></div>
            )}
            {isSelected && (
                <div
                    className={active.resize}
                    style={resizeDownRight}
                    ref={refResizeDownRight}
                ></div>
            )}
        </div>
    );
}

export { PreviewObject };
