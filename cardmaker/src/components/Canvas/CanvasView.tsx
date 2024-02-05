import css from "./CanvasView.module.css";
import { Canvas } from "../../model/types";
import ImageBlock from "./ImageBlock/ImageBlock";
import ArtBlock from "./ArtBlock/ArtBlock";
import TextBlock from "./TextBlock/TextBlock";
import { useAppActions } from "../../redux/hooks";

type CanvasBlockProps = {
    canvasData: Canvas;
    isSelected: boolean;
    onSelectActive: (activeID: string) => void; // вернет ид канвас
};

function CanvasView({
    canvasData,
    isSelected,
    onSelectActive,
}: CanvasBlockProps) {
    const { createChangeTextBlockValue } = useAppActions();
    if (!canvasData) {
        return null;
    }
    const {
        id,
        filter,
        size: { width, height },
        bgImage,
        bgColor,
        blocks,
        active,
    } = canvasData;
    const styleCanvas = {
        width,
        height,
        maxWidth: `100%`,
        maxHeight: `100%`,
        filter,
        backgroundImage: `url("${bgImage.source}")`,
        backgroundColor: bgColor,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };
    const classNames = `${css.canvas} ${
        isSelected ? css.selected : css.canvas
    }`;

    let ind = -1;

    const handleChangeText = (textValue: string) => {
        createChangeTextBlockValue(textValue, ind);
    };

    return (
        <div
            className={classNames}
            style={styleCanvas}
            onClick={(event) => {
                onSelectActive(id);
                event.stopPropagation();
            }}
            id={id}
        >
            {blocks.map((block, index) => {
                const isBlockSelected = block.id === active;
                if (isBlockSelected) ind = index;
                const handleClick = () => {
                    onSelectActive(block.id);
                };
                switch (block.type) {
                    case "art":
                        return (
                            <ArtBlock
                                key={index}
                                block={block}
                                preview={false}
                                isSelected={isBlockSelected}
                                onClick={handleClick}
                            />
                        );
                    case "image":
                        return (
                            <ImageBlock
                                block={block}
                                key={index}
                                preview={false}
                                isSelected={isBlockSelected}
                                onClick={handleClick}
                            />
                        );
                    case "text":
                        return (
                            <TextBlock
                                block={block}
                                key={index}
                                preview={false}
                                isSelected={isBlockSelected}
                                onClick={handleClick}
                                setValue={handleChangeText}
                            />
                        );
                    default:
                        return null;
                }
            })}
        </div>
    );
}

export default CanvasView;
