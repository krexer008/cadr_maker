import { useState } from "react";
import css from "../../../../common/Common.module.css";
import { useAppActions } from "../../../../redux/hooks";
function ChangeColor() {
    const { createChangeColorAction } = useAppActions();
    const [color, setColor] = useState("#ffffff");

    function handleChangeColor(newColor: string) {
        createChangeColorAction(newColor);
        setColor(newColor);
    }

    return (
        <div className={css.toolblock}>
            <div className={css.tool}>
                <label htmlFor="color">Color</label>
                <input
                    id="color"
                    type="color"
                    defaultValue={color}
                    onChange={(e) => handleChangeColor(e.target.value)}
                />
            </div>
        </div>
    );
}

export default ChangeColor;
