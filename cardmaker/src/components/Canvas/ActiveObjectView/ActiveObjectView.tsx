import React, { useRef } from "react";
import active from "./ActiveObjectView.module.css";
import { useAppActions, useAppSelector } from "../../../redux/hooks";
import { selectEditor } from "../../../redux/selectors";
import { Transform } from "../../../model/types";
import { useDragAndDrop } from "../../../hook/useDragAndDrop";

type ActiveObjectViewProps = {
    isSelected: boolean;
    position: { top: number; left: number };
    size: { width: number; height: number };
    //background: string;
    blockId: string;
    className: string;
    children: React.ReactNode;
    transform: Transform;
};

function ActiveObjectView({
    isSelected,
    className,
    children,
    position: { top, left },
    size: { width, height },
    //background,
    blockId,
    transform,
}: ActiveObjectViewProps) {
    const { createSelectActiveAction, createDragAndDropAction } =
        useAppActions();
    const editorData = useAppSelector(selectEditor);
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
        createSelectActiveAction(blockId);
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
                createDragAndDropAction(
                    activeBlockId,
                    blockSize,
                    blockPosition
                );
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
                createDragAndDropAction(
                    activeBlockId,
                    blockSize,
                    blockPosition
                );
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
                createDragAndDropAction(
                    activeBlockId,
                    blockSize,
                    blockPosition
                );
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
                createDragAndDropAction(
                    activeBlockId,
                    blockSize,
                    blockPosition
                );
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
                createDragAndDropAction(
                    activeBlockId,
                    blockSize,
                    blockPosition
                );
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
                createDragAndDropAction(
                    activeBlockId,
                    blockSize,
                    blockPosition
                );
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
                createDragAndDropAction(
                    activeBlockId,
                    blockSize,
                    blockPosition
                );
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
                createDragAndDropAction(
                    activeBlockId,
                    blockSize,
                    blockPosition
                );
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
                createDragAndDropAction(
                    activeBlockId,
                    blockSize,
                    blockPosition
                );
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

export { ActiveObjectView };
