import css from "./TextBlock.module.css";
import { TextBlockType } from "../../../model/types";
import { ActiveObjectView } from "../ActiveObjectView/ActiveObjectView";

type textBlockProps = {
    block: TextBlockType;
    preview: boolean;
    isSelected: boolean;
    setValue?: (newText: string) => void;
};

function TextBlock({ block, isSelected, preview, setValue }: textBlockProps) {
    const {
        id,
        size,
        position,
        value,
        fontFamily,
        color,
        bold,
        cursive,
        underline,
        transform,
    } = block;

    if (!preview && setValue) {
        const textStyle = {
            fontSize: block.fontSize,
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
    } else {
        const top = position.top * 0.1;
        const left = position.left * 0.1;
        const width = size.width * 0.1;
        const height = size.height * 0.1;
        const padding = 0;
        const fontSize: number = block.fontSize * 0.1;
        const stylePreview = {
            top,
            left,
            width,
            height,
            padding,
        };

        const textStyle = {
            fontSize,
            fontFamily,
            color,
            fontWeight: bold ? "bold" : "normal",
            fontStyle: cursive ? "italic" : "normal",
            textDecoration: underline ? "underline" : "none",
        };
        return (
            <div
                style={stylePreview}
                //background={bgColor}
                className="artobject"
            >
                <textarea
                    className={`${css.textarea}`}
                    style={textStyle}
                    value={value}
                    placeholder={value}
                />
            </div>
        );
    }
}
export default TextBlock;
