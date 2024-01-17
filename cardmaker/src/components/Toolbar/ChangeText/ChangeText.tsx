import ChangeColor from "../tools/ChangeColor/ChangeColor";
import ChangeTextStyle from "../tools/ChangeTextStyle/ChangeTextStyle";
import css from "./ChangeText.module.css";

function ChangeText() {
  return (
    <div className={css.textbar}>
      <ChangeColor text={"Color"} />
      <ChangeTextStyle />
    </div>
  );
}
export default ChangeText;
