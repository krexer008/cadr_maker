import React from "react";
import css from "./ActiveObjectView.module.css";
import { useAppSelector } from "../../../redux/hooks";
import { selectEditor } from "../../../redux/selectors";

type ActiveObjectViewProps = {
    isSelected: boolean;
    position: { top: number; left: number };
    size: { width: number; height: number };
    background?: string;
    blockId: string;
    className: string;
};

function ActiveObjectView({
    isSelected,
    position,
    size,
    background,
    blockId,
    className,
}: ActiveObjectViewProps) {
    const editorData = useAppSelector(selectEditor);
    const activeCanvasId = editorData.canvas.id;
    const activeBlocktId = editorData.canvas.active === blockId ? blockId : "";
    const classNames = `${css.container} ${
        isSelected ? css.selected : css[className]
    }`;

    return <div className={classNames}>drag resize</div>;
}

export { ActiveObjectView };