import React from "react";
import css from "../../../../common/Common.module.css";

type ChangeProps = {
    id:string;
}
function ChangeImage({id}:ChangeProps) {
    return (
        <div className={css.tool}>
            <div>
                <input
                    id="image-link"
                    type="text"
                    placeholder="Insert URL and press enter"
                />
                <label htmlFor="image-upload">Upload file</label>
                <input
                    id="image-upload"
                    type="file"
                    accept="image/png, image/jpeg"
                />
            </div>
        </div>
    );
}

export default ChangeImage;
