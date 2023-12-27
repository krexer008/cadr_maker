import React from "react";
import css from "./Canvas.module.css";
import { CanvasType } from "../../type/type";
import getRGBA from "../../utils/getRGBA";

type CanvasBlockProps = {
    block: CanvasType,
};

function Canvas({ block }: CanvasBlockProps) {
    const canvasId = block.id;
    return (
        <div
            className={css.сanvas}
            id={canvasId}
            style={{
                ...block.size,
                backgroundColor: getRGBA(block.backgroundColor),
            }}
        >
            <img src={block.backgroundImage.data} alt="canvas" />
            {/*
                if(block.backgroundImage.type){
            return (
            
            );
            
            }*/}
        </div>
    );
}
export default Canvas;
