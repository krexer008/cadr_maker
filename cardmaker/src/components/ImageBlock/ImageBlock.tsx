import React from "react";
import css from "./ImageBlock.module.css";
import { ImageBlockType } from "../../type/type";

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
