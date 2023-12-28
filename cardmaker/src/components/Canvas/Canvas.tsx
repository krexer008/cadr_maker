import React from "react";
import css from "./Canvas.module.css";
import { CanvasType } from "../../type/type";
import getRGBA from "../../utils/getRGBA";

type CanvasBlockProps = {
    canvas: CanvasType,
};

function Canvas({ canvas }: CanvasBlockProps) {
    const {
        id,
        size: { width, height },
        backgroundImage,
        backgroundColor,
    } = canvas;
    const styleCanvas = {
        width,
        height,
        maxWidth: `100%`,
        maxHeight: `100%`,
        backgroundColor: getRGBA(backgroundColor),
        backgroundImage: `url("${backgroundImage.data}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no repeat",
    };
    return (
        <div className={css.сanvas} id={id} style={styleCanvas}>
            Canvas
        </div>
    );
}
export default Canvas;
