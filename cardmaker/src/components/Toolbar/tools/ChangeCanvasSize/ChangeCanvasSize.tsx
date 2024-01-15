import React from "react";
import css from "../../../../common/Common.module.css";

function ChangeCanvasSize() {
    return (
        <div className={css.tool}>
            <div className={css.toolblock}>
                <label>Canvas Size</label>
                <div className={css.size}>
                    <label htmlFor="canvas-width">Width </label>
                    <input
                        id="canvas-width"
                        type="number"
                        min="10"
                        max="1980"
                        step="1"
                        defaultValue="800"
                    />
                </div>
                <div className={css.size}>
                    <label htmlFor="canvas-height">Height </label>
                    <input
                        id="canvas-height"
                        type="number"
                        min="10"
                        max="1080"
                        step="1"
                        defaultValue="600"
                    />
                </div>
            </div>
        </div>
    );
}

export default ChangeCanvasSize;
