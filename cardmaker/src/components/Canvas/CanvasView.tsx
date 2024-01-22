import React from "react";
import css from "./CanvasView.module.css";
import { Canvas } from "../../model/types";
import ImageBlock from "./ImageBlock/ImageBlock";
import ArtBlock from "./ArtBlock/ArtBlock";
import TextBlock from "./TextBlock/TextBlock";

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

    return (
        <div
            className={classNames}
            style={styleCanvas}
            onClick={() => onSelectActive(id)}
            id={id}
        >
            {canvasData.size.width}px {canvasData.size.height}px
            {blocks.map((block, index) => {
                const isBlockSelected = block.id === active;
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
                                onClick={handleClick}
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
