import React from "react";
import css from "./ChangeColor.module.css";

function ChangeColor() {
    return (
        <input
            className={css.changecolor}
            type="color"
            id="head"
            name="color"
            value="#e66465"
        />
    );
}

export default ChangeColor;
