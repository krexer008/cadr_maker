import ChangeArt from "./ChangeArt/ChangeArt";
import ChangeColor from "../ChangeColor/ChangeColor";
import css from "./ChangeBlockArt.module.css";

function ChangeBlockArt() {
    return (
        <div className={css.toolbar}>
            <ChangeArt />
            <ChangeColor />
        </div>
    );
}
export default ChangeBlockArt;
