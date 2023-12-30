import React from "react";
import css from "../../../../common/Common.module.css";

type ChangeColorProps = {
    currentColor: {
        hexColor: string,
        opacity: number,
    },
    currentBGColor: {
        hexColor: string,
        opacity: number,
    },
};

function ChangeColor({ currentColor, currentBGColor }: ChangeColorProps) {
    // тутутут
    /*changecolor*/
    /*changeOpacity*/
    return (
        <div className={css.toolblock}>
            <div className={css.tool}>
                <label htmlFor="bg-color">Color</label>
                <input
                    id="bg-color"
                    type="color"
                    defaultValue={currentColor.hexColor}
                />
                <label htmlFor="bg-opacity">Opacity</label>
                <input
                    id="bg-opacity"
                    type="number"
                    min="0"
                    max="1"
                    step="0.1"
                    defaultValue={currentColor.opacity}
                />
            </div>
            <div className={css.tool}>
                <label htmlFor="bg-color">Field</label>
                <input
                    id="bg-color"
                    type="color"
                    defaultValue={currentBGColor.hexColor}
                />
                <label htmlFor="bg-opacity">Opacity</label>
                <input
                    id="bg-opacity"
                    type="number"
                    min="0"
                    max="1"
                    step="0.1"
                    defaultValue={currentBGColor.opacity}
                />
            </div>
        </div>
    );
}

export default ChangeColor;
