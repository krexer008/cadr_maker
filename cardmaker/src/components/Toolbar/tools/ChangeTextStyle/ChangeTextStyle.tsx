import React from "react";
import css from "./ChangeTextStyle.module.css";
import ToolbarButton from "../../ToolbarButton/ToolbarButton";
import bold from "../../ToolbarButton/icons/bold.svg";
import italic from "../../ToolbarButton/icons/italic.svg";
import underline from "../../ToolbarButton/icons/underline.svg";
import ChangeColor from "../ChangeColor/ChangeColor";

type ChangeSizeProps = {
    currentSize: number,
    currentFamily: string,
};

function ChangeTextStyle({ currentSize, currentFamily }: ChangeSizeProps) {
    return (
        <div className={css.changetext}>
            <span className={css.description}>Свойства текста</span>
            <div className={css.changeTextStyle}>
                <ToolbarButton
                    handler={() => alert("bold text clicked")}
                    icon={bold}
                    alt="bold"
                />
                <ToolbarButton
                    handler={() => alert("italic text clicked")}
                    icon={italic}
                    alt="italic"
                />
                <ToolbarButton
                    handler={() => alert("underline text clicked")}
                    icon={underline}
                    alt="underline"
                />
            </div>
            <div>
                <select id="text-style" defaultValue={currentSize}>
                    <option value="Arial">Arial</option>
                    <option value="Calibri">Calibri</option>
                    <option value="Impact">Impact</option>
                    <option value="Times New Roman">Times New Roman</option>
                </select>
            </div>
            <div>
                <select id="text-size" defaultValue={currentFamily}>
                    <option value="10">10</option>
                    <option value="12">12</option>
                    <option value="14">14</option>
                    <option value="16">16</option>
                    <option value="18">18</option>
                    <option value="20">20</option>
                    <option value="22">22</option>
                </select>
                <ChangeColor />
            </div>
        </div>
    );
}

export default ChangeTextStyle;
