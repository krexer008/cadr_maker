import css from "./TextBlock.module.css";
import { TextBlockType } from "../../../model/types";
import { ActiveObjectView } from "../ActiveObjectView/ActiveObjectView";
import { useAppActions } from "../../../redux/hooks";

type textBlockProps = {
    block: TextBlockType;
    isSelected: boolean;
    onClick: () => void;
};

function TextBlock({ block, isSelected, onClick }: textBlockProps) {
    //const { createChangeTextValue } = useAppActions;
    const blockId = block.id;
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
                onClick={onClick}
                onChange={(e) => {
                    //createChangeTextValue(block.id, e.target.value);
                }}
            />
        </ActiveObjectView>
    );
}
export default TextBlock;
