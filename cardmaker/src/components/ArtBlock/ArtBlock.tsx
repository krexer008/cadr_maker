import React from "react";
import css from "./ArtBlock.module.css";
import { ArtBlockType, ArtValue } from "../../model/types";
import Arrow from "./art/Arrow/Arrow";
import Circle from "./art/Circle/Circle";
import Line from "./art/Line/Line";
import Quote from "./art/Quote/Quote";
import Rectangle from "./art/Rectangle/Rectangle";

type artBlockProps = {
    block: ArtBlockType;
};

const artBlockSource = {
    [ArtValue.Arrow]: Arrow, // объект с именем Arrow  типа Arrow ...
    [ArtValue.Circle]: Circle,
    [ArtValue.Line]: Line,
    [ArtValue.Quote]: Quote,
    [ArtValue.Rectangle]: Rectangle,
};

function ArtBlock({ block }: artBlockProps) {
    const {
        size: { width, height },
        position: { left, top },
    } = block;

    const blockStyle = {
        width,
        height,
        maxWidth: `100%`,
        maxHeight: `100%`,
        top,
        left,
    };
    return (
        <div style={blockStyle} id={block.id} className={css.container}>
            {artBlockSource[block.value]({ block })}
        </div>
    );
}
export default ArtBlock;
