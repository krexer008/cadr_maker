import ChangeArt from "../ChangeArt/ChangeArt";
import ChangeColor from "../ChangeColor/ChangeColor";
import css from "./ChangeArtBlock.module.css";

function ChangeArtBlock() {
  return (
    <div className={css.toolbar}>
      <ChangeArt />
      <ChangeColor title={"Color"} color={"red"} />
    </div>
  );
}
export default ChangeArtBlock;
