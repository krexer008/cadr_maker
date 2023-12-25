import React from "react";
import css from "./ArtBlock.module.css";
import { ArtBlockType, ArtName } from "../../type/type";
import Arrow from "./art/Arrow/Arrow";


type artBlockProps = {
    artBlock: ArtBlockType;
};

const artBlockSource = {
    [ArtName.Arrow]: Arrow,
    [ArtName.Circle]: Circle,
    [ArtName.Line]: Line,
    [ArtName.Quote]: Quote,
    [ArtName.Rectangle]: Rectangle,

}

function ArtBlock() {
    return <div className={css.artblock} id=""></div>;
}
export default ArtBlock;
