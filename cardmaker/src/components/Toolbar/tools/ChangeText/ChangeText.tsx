import React from "react";
import css from "./ChangeText.module.css";
import ToolbarButton from "../../ToolbarButton/ToolbarButton";
import bold from "../../ToolbarButton/icons/bold.svg";
import italic from "../../ToolbarButton/icons/italic.svg";
import underline from "../../ToolbarButton/icons/underline.svg";

function ChangeText() {
    return (
        <div className={css.changetext}>
            <span className={css.description}>Свойства текста</span>
            <div className={css.changeTextStyle}>
                <ToolbarButton
                    handler={() => alert("bold text clicked")}
                    icon={bold}
                    alt="bold text"
                />
                <ToolbarButton
                    handler={() => alert("italic text clicked")}
                    icon={italic}
                    alt="italic text"
                />
                <ToolbarButton
                    handler={() => alert("underline text clicked")}
                    icon={underline}
                    alt="underline text"
                />
            </div>
            <select className="">
                <option>Пункт 1</option>
                <option>Пункт 2</option>
            </select>
        </div>
    );
}

export default ChangeText;
