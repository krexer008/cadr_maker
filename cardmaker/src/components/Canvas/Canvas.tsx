import React from "react";
import css from "./Canvas.module.css";
import { CanvasType } from "../../type/type";
import getRGBA from "../../utils/getRGBA";

type CanvasBlockProps = {
    canvasBlock: CanvasType,
};

function Canvas({ canvasBlock }: CanvasBlockProps) {
    const canvasId = canvasBlock.id;
    return (
        <div
            className={css.сanvas}
            id={canvasId}
            style={{
                ...canvasBlock.size,
                backgroundColor: getRGBA(canvasBlock.backgroundColor),
                backgroundImage: canvasBlock.backgroundImage.data,
            }}
        >
            <div> Canvas</div>
        </div>
    );
}
export default Canvas;
