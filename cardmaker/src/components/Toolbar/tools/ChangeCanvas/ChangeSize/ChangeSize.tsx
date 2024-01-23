import React, { useState } from "react";
import css from "../../../../common/Common.module.css";
import { useAppActions } from "../../../../redux/hooks";
import ChangeInput from "./ChangeInput/ChangeInput";

function ChangeSize() {
    const { createChangeSize } = useAppActions();
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");

    const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.target.value ? setWidth(event.target.value) : setWidth("800");
    };
    const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.target.value ? setHeight(event.target.value) : setHeight("600");
    };

    const handleChangeApply = () => {
        const newSize = {
            width: width ? parseInt(width, 10) : 800,
            height: height ? parseInt(height, 10) : 800,
        };
        createChangeSize(newSize);
    };

    return (
        <div className={css.tool}>
            <div className={css.toolblock}>
                <ChangeInput
                    text={"Width"}
                    defaultValue={800}
                    onChange={handleWidthChange}
                />
                <ChangeInput
                    text={"Height"}
                    defaultValue={600}
                    onChange={handleHeightChange}
                />
                <button onClick={handleChangeApply}>Apply size</button>
            </div>
        </div>
    );
}

export default ChangeSize;
