import React from "react";
import css from "./TextBlock.module.css";
import { TextBlockType } from "../../type/type";
import GetRGBA from "../../utils/getRGBA";

type textBlockProps = {
    block: TextBlockType,
};

function TextBlock({ block }: textBlockProps) {
    return (
        <div
            className={css.text}
            id={block.id}
            style={{
                ...block.size,
                ...block.position,
            }}
        >
            <p
                style={{
                    ...block.textStyle,
                    color: GetRGBA(block.color),
                }}
            >
                {block.value}
            </p>
        </div>
    );
}
export default TextBlock;
