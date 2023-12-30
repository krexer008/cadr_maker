import React from "react";
import css from "../../../../common/Common.module.css";

function ChangeArt() {
    return (
        <div className={css.tool}>
            <label htmlFor="art-name">Art object: </label>
            <select id="art-name" defaultValue="quote">
                <option value="quote">quote</option>
                <option value="line">line</option>
                <option value="circle">circle</option>
                <option value="Times New Roman">Times New Roman</option>
            </select>
        </div>
    );
}

export default ChangeArt;
