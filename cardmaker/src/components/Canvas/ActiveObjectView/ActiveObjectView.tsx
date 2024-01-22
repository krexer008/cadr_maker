import React, {useRef} from "react";
import css from "./ActiveObjectView.module.css";
import { useAppSelector } from "../../../redux/hooks";
import { selectEditor } from "../../../redux/selectors";
import { Transform } from "../../../model/types"
import {useDragAndDrop} from "../../../hook/useDragAndDrop";

type ActiveObjectViewProps = {
    isSelected: boolean;
    position: { top: number; left: number };
    size: { width: number; height: number };
    background: string;
    blockId: string;
    className: string;
    children: React.ReactNode;
    transform: Transform;
};

function ActiveObjectView({
    isSelected,
    className,
    children,
    position:{ top, left },
    size: {width, height},
    background,
    blockId,
}: ActiveObjectViewProps) {
    const editorData = useAppSelector(selectEditor);
    const activeCanvasId = editorData.canvas.id;
    const activeBlockId = editorData.canvas.active === blockId ? blockId : "";
    const classNames = `${css.container} ${
        isSelected ? css.selected : css[className]
    }`;

    const rfMiddleButton = useRef<HTMLDivElement>(null);
    const rfResizeMiddleRight = useRef<HTMLDivElement>(null);
    const rfResizeDownRight = useRef<HTMLDivElement>(null);
    const rfResizeUpRight = useRef<HTMLDivElement>(null);
    const rfResizeUpMiddle = useRef<HTMLDivElement>(null);
    const rfResizeMiddleLeft = useRef<HTMLDivElement>(null);
    const rfResizeDownLeft = useRef<HTMLDivElement>(null);
    const rfResizeUpLeft = useRef<HTMLDivElement>(null);

    let blockSize = {width, height};
    let blockPosition = {top, left};

    const ref = useRef<HTMLDivElement>(null);

    const {isDragging} = useDragAndDrop(
        {elementRef:ref, isActive: isSelected},
        onPositionChange:(delta)=>{
            blockSize = {
                width, height,
            };
            createChangeElementSize(activeCanvasId, activeElementId, blockSize);
            blockPosition = {
                left:left + delta.left,
                top: top+delta.top,
            };
            createChangeElementPosition(
                activeCanvasId,
                activeBlockId,
                blockPosition,
            );
        },
    );

    return <div className={classNames}>drag resize</div>;
}

export { ActiveObjectView };
