import React from "react";
import css from "./ChangeColor.module.css";

function ChangeColor() {
    return <div className={css.changecolor}>
        ChangeColor
        <p>ChangeColor:</p>
        <div>
            <input type="color" id="head" name="head" value="#e66465" />
            <label for="head">Head</label>
        </div>
        <div>
            <input type="color" id="body" name="body" value="#f6b73c" />
            <label for="body">Body</label>
        </div>
    </div>;
}

export default ChangeColor;
