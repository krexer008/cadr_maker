import { Canvas } from "../../../../../model/types";
import ArtBlock from "../../../../Canvas/ArtBlock/ArtBlock";
import ImageBlock from "../../../../Canvas/ImageBlock/ImageBlock";
import TextBlock from "../../../../Canvas/TextBlock/TextBlock";
import css from "./TemplateView.module.module.css";

type TemplateProps = {
    canvasData: Canvas;
    index: number;
    onSelectTemplate: (selectedIndex: number) => void; // вернет ид канвас
};

function Template({ canvasData, index, onSelectTemplate }: TemplateProps) {
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
        maxWidth: `100%`,
        maxHeight: `100%`,
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
                onSelectTemplate(index);
                console.log({ index });
                event.stopPropagation();
            }}
        >
            {blocks.map((block) => {
                switch (block.type) {
                    case "art":
                        return (
                            <ArtBlock
                                block={block}
                                preview={true}
                                isSelected={false}
                            />
                        );
                    case "image":
                        return (
                            <ImageBlock
                                block={block}
                                preview={true}
                                isSelected={false}
                            />
                        );
                    case "text":
                        return (
                            <TextBlock
                                block={block}
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
