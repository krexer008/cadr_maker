import React, { useState } from "react";
import css from "./Canvas.module.css";
import { CanvasType } from "../../type/type";
import getRGBA from "../../utils/getRGBA";

type CanvasBlockProps = {
    canvas: CanvasType,
};

function Canvas({ canvas }: CanvasBlockProps) {
    const canvasId = canvas.id;
    const styleCanvas = {
        ...canvas.size,
        backgroundColor: getRGBA(canvas.backgroundColor),
        backgroundImage: `url("${canvas.backgroundImage.data}")`,
    };
    const [count, setCount] = useState(0);
    return (
        <div className={css.сanvas} id={canvasId} style={styleCanvas}>
            <p>Вы нажали {count} раз</p>
            <button onClick={() => setCount(count + 1)}>Нажми меня</button>
        </div>
    );
}
export default Canvas;
