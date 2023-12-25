import React from "react";
import css from "./Canvas.module.css";
import { CanvasType } from "../../type/type"


type CanvasBlockProps = {
    canvasBlock: CanvasType;
}

function Canvas({ canvasBlock }: CanvasBlockProps) {
    const canvasId = canvasBlock.id;
    const canvasStyle: React.CSSProperties = {
        ...canvasBlock.size,
        backgroundColor: getRGBA(canvasBlock.backgroundColor),
    };
    return (
        <div
            className={css.сanvas}
            style = {canvasStyle}
            id = {canvasId}{/*onMouseDown*/}
        >
            <div> Canvas</div>
        </div>
    );
}
export default Canvas;



import { ImageBlockType } from "../../type/type";
import getRGBA from "../../utils/getRGBA";

type ImageBlockProps = {
    imageBlock: ImageBlockType,
};

function ImageBlock({ imageBlock }: ImageBlockProps) {
    return (
        <div
            className={css.image}
            id={imageBlock.id}
            style={{
                ...imageBlock.size,
                ...imageBlock.position,
            }}
        >
            <img src={imageBlock.image.data} alt="img"></img>
        </div>
    );
}
export default ImageBlock;
