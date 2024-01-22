import ChangeColor from "../ChangeColor/ChangeColor";
import ChangeTextStyle from "../ChangeTextStyle/ChangeTextStyle";
import css from "./ChangeText.module.css";

type ChangeProps = {
    id:string;
}

function ChangeText({id}:ChangeProps) {
    return (
        <div className={css.textbar}>
            <ChangeColor title="Color" color={"grey"} />
            <ChangeTextStyle />
        </div>
    );
}
export default ChangeText;
