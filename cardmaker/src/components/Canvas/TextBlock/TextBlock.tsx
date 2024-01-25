import css from "./TextBlock.module.css";
import { TextBlockType } from "../../../model/types";
import { ActiveObjectView } from "../ActiveObjectView/ActiveObjectView";

type textBlockProps = {
    block: TextBlockType;
    isSelected: boolean;
    setValue: (newText: string) => void;
};

function TextBlock({ block, isSelected, setValue }: textBlockProps) {
    const {
        id,
        size,
        position,
        value,
        fontSize,
        fontFamily,
        color,
        bold,
        cursive,
        underline,
        transform,
    } = block;

    const textStyle = {
        fontSize,
        fontFamily,
        color,
        fontWeight: bold ? "bold" : "normal",
        fontStyle: cursive ? "italic" : "normal",
        textDecoration: underline ? "underline" : "none",
    };
    return (
        <ActiveObjectView
            isSelected={isSelected}
            position={position}
            size={size}
            className="textarea"
            blockId={id}
            transform={transform}
        >
            <textarea
                className={`${css.textarea}`}
                style={textStyle}
                value={value}
                placeholder={value}
                onChange={(event) => {
                    setValue(event.target.value);
                }}
            />
        </ActiveObjectView>
    );
}
export default TextBlock;
