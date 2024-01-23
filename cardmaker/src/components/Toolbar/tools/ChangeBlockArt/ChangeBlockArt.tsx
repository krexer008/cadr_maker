import ChangeArt from "../ChangeArt/ChangeArt";
import ChangeColor from "../ChangeColor/ChangeColor";
import css from "./ChangeBlockArt.module.css";

type ChangeProps = {
    id: string;
};
function ChangeBlockArt({ id }: ChangeProps) {
    return (
        <div className={css.toolbar}>
            <ChangeArt />
            <ChangeColor title={"Color"} color={"red"} />
        </div>
    );
}
export default ChangeBlockArt;
