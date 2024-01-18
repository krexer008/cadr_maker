import ChangeColor from "../tools/ChangeColor/ChangeColor";
import ChangeTextStyle from "../tools/ChangeTextStyle/ChangeTextStyle";
import css from "./ChangeText.module.css";

function ChangeText() {
  return (
    <div className={css.textbar}>
      <ChangeColor title="Color" color={{ r: 0, g: 0, b: 0, a: 0 }} />
      <ChangeTextStyle />
    </div>
  );
}
export default ChangeText;
