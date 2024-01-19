import css from "../../../../common/Common.module.css";

type ChangeColorProps = {
  title: string;
  color: string;
};

function ChangeColor({ title, color }: ChangeColorProps) {
  const defaultValueOpacity = 1;
  const defaultValueColor = color;
  return (
    <div className={css.toolblock}>
      <div className={css.tool}>
        <label htmlFor="bg-color">{title}</label>
        <input id="bg-color" type="color" defaultValue={defaultValueColor} />
        <label htmlFor="bg-opacity">Opacity</label>
        <input
          id="bg-opacity"
          type="number"
          min="0"
          max="1"
          step="0.1"
          defaultValue={defaultValueOpacity}
        />
      </div>
    </div>
  );
}

export default ChangeColor;
