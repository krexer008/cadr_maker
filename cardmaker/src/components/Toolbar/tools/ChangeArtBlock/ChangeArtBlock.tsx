import ChangeArt from "../ChangeArt/ChangeArt";
import ChangeColor from "../ChangeColor/ChangeColor";
import css from "./ChangeArtBlock.module.css";

function ChangeArtBlock() {
  return (
    <div className={css.toolbar}>
      <ChangeArt />
      <ChangeColor text={"Color"} />
    </div>
  );
}
export default ChangeArtBlock;
