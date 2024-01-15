import React from "react";
import css from "./ActiveBlock.module.css";
import { ColorType } from "../../../model/types";

type ActiveBlockProps = {
    isSelected: boolean;
    className: string;
    position: { x: number; y: number };
    size: { width: number; height: number };
    children: React.ReactNode;
    background?: ColorType;
};

function ActiveBlock({
    isSelected,
    className,
    position: { x, y },
    size: { width, height },
    children,
    background,
}: ActiveBlockProps) {
    const classNames = `${css.container}
    ${isSelected ? css.selected : css[className]}`;
    return (
        <div className={classNames}>
            <p>hekko</p>
        </div>
    );
}
