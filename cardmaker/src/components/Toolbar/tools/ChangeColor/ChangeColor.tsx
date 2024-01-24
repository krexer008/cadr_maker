import css from "../../../../common/Common.module.css";

type ChangeColorProps = {
    title?: string;
    value: string;
    setValue: (newColor: string) => void;
};

function ChangeColor({ title, value, setValue }: ChangeColorProps) {
    return (
        <div className={css.toolblock}>
            <div className={css.tool}>
                <label htmlFor="bg-color">{title ? title : "Color"}</label>
                <input
                    id="bg-color"
                    type="color"
                    value={value}
                    defaultValue={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
        </div>
    );
}

export default ChangeColor;
