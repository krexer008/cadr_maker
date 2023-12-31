import React from "react";
import css from "../../../../common/Common.module.css";
import ToolbarButton from "../../ToolbarButton/ToolbarButton";
import bold from "../../ToolbarButton/icons/bold.svg";
import italic from "../../ToolbarButton/icons/italic.svg";
import underline from "../../ToolbarButton/icons/underline.svg";

type ChangeSizeProps = {
    currentTextSize: number,
    currentFontFamily: string,
};

function ChangeTextStyle({
    currentTextSize,
    currentFontFamily,
}: ChangeSizeProps) {
    return (
        <div className={css.toolblock}>
            <div className={css.tool}>
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
            <div className={css.tool}>
                <select id="drop-list" defaultValue={currentTextSize}>
                    <option value="Arial">Arial</option>
                    <option value="Calibri">Calibri</option>
                    <option value="Impact">Impact</option>
                    <option value="Times New Roman">Times New Roman</option>
                </select>
                <select id="drop-list" defaultValue={currentFontFamily}>
                    <option value="10">10</option>
                    <option value="12">12</option>
                    <option value="14">14</option>
                    <option value="16">16</option>
                    <option value="18">18</option>
                    <option value="20">20</option>
                    <option value="22">22</option>
                </select>
            </div>
        </div>
    );
}

export default ChangeTextStyle;
