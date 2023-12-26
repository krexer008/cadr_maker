import React from "react";
import css from "./ArtBlock.module.css";
import { ArtBlockType } from "../../type/type";
import Arrow from "./art/Arrow/Arrow";
import Circle from "./art/Circle/Circle";
import Line from "./art/Line/Line";
import Quote from "./art/Quote/Quote";
import Rectangle from "./art/Rectangle/Rectangle";

type artBlockProps = {
    art: ArtBlockType,
    isSelected: boolean,
    onClick: () => void,
};

function ArtBlock({ art, isSelected, onClick }: artBlockProps) {
    return (
        <div className={css.art}>
            <Arrow art />
        </div>
    );
}
export default ArtBlock;
