import ChangeArt from "../ChangeArt/ChangeArt";
import ChangeColor from "../ChangeColor/ChangeColor";
import css from "./ChangeArtBlock.module.css";

function ChangeArtBlock() {
  return (
    <div className={css.toolbar}>
      <ChangeArt />
      <ChangeColor title={"Color"} color={{ r: 0, g: 0, b: 0, a: 0 }} />
    </div>
  );
}
export default ChangeArtBlock;
