import css from "../../../../common/Common.module.css";

type ChangeColorProps = {
    title: string;
    color: string;
};

function ChangeColor({ title, color }: ChangeColorProps) {
    const defaultValueColor = color;
    return (
        <div className={css.toolblock}>
            <div className={css.tool}>
                <label htmlFor="bg-color">{title}</label>
                <input
                    id="bg-color"
                    type="color"
                    defaultValue={defaultValueColor}
                />
            </div>
        </div>
    );
}

export default ChangeColor;
