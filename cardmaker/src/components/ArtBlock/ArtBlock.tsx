import React from "react";
import css from "./ArtBlock.module.css";
import { ArtBlockType, ArtName } from "../../type/type";
import Arrow from "./art/Arrow/Arrow";
import Circle from "./art/Circle/Circle";
import Line from "./art/Line/Line";
import Quote from "./art/Quote/Quote";
import Rectangle from "./art/Rectangle/Rectangle";

type artBlockProps = {
    block: ArtBlockType,
};

const artBlockSource = {
    [ArtName.Arrow]: Arrow, // объект с именем Arrow  типа Arrow ...
    [ArtName.Circle]: Circle,
    [ArtName.Line]: Line,
    [ArtName.Quote]: Quote,
    [ArtName.Rectangle]: Rectangle,
};

function ArtBlock({ block }: artBlockProps) {
    return (
        <div className={css.art} id={block.id}>
            {artBlockSource[block.artName]({ block })}
        </div>
    );
}
export default ArtBlock;
