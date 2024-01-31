import { Canvas, TextBlockType } from "../../../../../model/types";
import { createSaveCanvasAction } from "../../../../../redux/actionCreators";
import ArtBlock from "../../../../Canvas/ArtBlock/ArtBlock";
import ImageBlock from "../../../../Canvas/ImageBlock/ImageBlock";
import TextBlock from "../../../../Canvas/TextBlock/TextBlock";
import css from "./TemplateView.module.module.css";

type TemplateProps = {
    canvasData: Canvas;
    key: number;
    onClick: (selectedIndex: string) => void; // вернет ид канвас
};

function Template({ canvasData, key, onClick }: TemplateProps) {
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

    let ind = -1;

    return (
        <div
            className={css.canvas}
            style={styleCanvas}
            onClick={(event) => {
                event.stopPropagation();
                selectedIndex = key;
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
                                isSelected={isBlockSelected}
                                onClick={handleClick}
                            />
                        );
                    case "image":
                        return (
                            <ImageBlock
                                block={block}
                                key={index}
                                isSelected={isBlockSelected}
                                onClick={handleClick}
                            />
                        );
                    case "text":
                        return (
                            <TextBlock
                                block={block}
                                key={index}
                                isSelected={isBlockSelected}
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

export default Template;
