import css from "../../../../common/Common.module.css";
import { ImageBlockType } from "../../../../model/types";

type ChangeProps = {
    id: string;
    block: ImageBlockType;
};
function ChangeBlockImage({ id, block }: ChangeProps) {
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

export default ChangeBlockImage;
