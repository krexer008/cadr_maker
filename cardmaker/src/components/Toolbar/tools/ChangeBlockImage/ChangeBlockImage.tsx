import { ChangeEvent, useState } from "react";
import css from "../../../../common/Common.module.css";
import { ImageBlockType } from "../../../../model/types";

type ChangeProps = {
    id: string;
    block: ImageBlockType;
};
function ChangeBlockImage({ id, block }: ChangeProps) {
    const [file, setFile] = useState<File>();

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

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
                    onChange={handleFileChange}
                />
            </div>
        </div>
    );
}

export default ChangeBlockImage;
