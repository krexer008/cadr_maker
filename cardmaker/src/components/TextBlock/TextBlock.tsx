import React from "react";
import css from "./TextBlock.module.css";
import { TextBlockType } from "../../type/type";
import GetRGBA from "../../utils/getRGBA";

type textBlockProps = {
    textBlock: TextBlockType,
};

function TextBlock({ textBlock }: textBlockProps) {
    return (
        <div
            className={css.text}
            id={textBlock.id}
            style={{
                ...textBlock.size,
                ...textBlock.position,
            }}
        >
            <p
                style={{
                    ...textBlock.textStyle,
                    color: GetRGBA(textBlock.color),
                }}
            >
                {textBlock.value}
            </p>
        </div>
    );
}
export default TextBlock;
