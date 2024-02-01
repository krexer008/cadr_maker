import { Canvas } from "../../../../../model/types";
import ArtBlock from "../../../../Canvas/ArtBlock/ArtBlock";
import ImageBlock from "../../../../Canvas/ImageBlock/ImageBlock";
import TextBlock from "../../../../Canvas/TextBlock/TextBlock";
import css from "./TemplateView.module.module.css";

type TemplateProps = {
    canvasData: Canvas;
    key: number;
    onSelectTemplate: (selectedIndex: number) => void; // вернет ид канвас
};

function Template({ canvasData, key, onSelectTemplate }: TemplateProps) {
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
    } = canvasData;
    const styleCanvas = {
        width: width * 0.23,
        height: height * 0.23,
        maxWidth: `0.23`,
        maxHeight: `0.23`,
        filter,
        backgroundImage: `url("${bgImage.source}")`,
        backgroundColor: bgColor,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };

    return (
        <div
            className={css.canvas}
            style={styleCanvas}
            onClick={(event) => {
                onSelectTemplate(key);
                event.stopPropagation();
            }}
            id={id}
        >
            {blocks.map((block, index) => {
                block.size.width = block.size.width * 0.5;
                block.size.height = block.size.height * 0.5;
                block.position.left = block.position.left * 0.5;
                block.position.top = block.position.top * 0.5;
                switch (block.type) {
                    case "art":
                        return (
                            <ArtBlock
                                key={index}
                                block={block}
                                preview={true}
                                isSelected={false}
                            />
                        );
                    case "image":
                        return (
                            <ImageBlock
                                block={block}
                                key={index}
                                preview={true}
                                isSelected={false}
                            />
                        );
                    case "text":
                        block.fontSize = block.fontSize * 0.3;
                        return (
                            <TextBlock
                                block={block}
                                key={index}
                                preview={true}
                                isSelected={false}
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
