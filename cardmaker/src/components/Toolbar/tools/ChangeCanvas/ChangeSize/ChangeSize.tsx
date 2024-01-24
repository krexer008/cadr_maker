import css from "../../../../../common/Common.module.css";
import { Size } from "../../../../../model/types";
import ChangeInput from "./ChangeInput/ChangeInput";

type ChangeSizeProps = {
    size: Size;
    setValueWidth: (newWidth: string) => void;
    setValueHeight: (newHeight: string) => void;
};

function ChangeSize({ size, setValueWidth, setValueHeight }: ChangeSizeProps) {
    return (
        <div className={css.tool}>
            <div className={css.toolblock}>
                <ChangeInput
                    text={"Width"}
                    defaultValue={size.width}
                    onChange={(e) => setValueWidth(e.target.value)}
                />
                <ChangeInput
                    text={"Height"}
                    defaultValue={size.height}
                    onChange={(e) => setValueHeight(e.target.value)}
                />
            </div>
        </div>
    );
}

export default ChangeSize;
