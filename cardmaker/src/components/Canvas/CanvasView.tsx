import React from "react";
import css from "./CanvasView.module.css";
import { Canvas } from "../../model/types";
import ImageBlock from "./ImageBlock/ImageBlock";
import ArtBlock from "./ArtBlock/ArtBlock";
import TextBlock from "./TextBlock/TextBlock";

type CanvasBlockProps = {
    canvasData: Canvas;
    isSelected: boolean;
    onSelectCanvas: () => void; // вернет ид канвас
    onBlockClick: () => void; // вернет ид выбранного элемента
};

function CanvasView({
    canvasData,
    isSelected,
    onSelectCanvas,
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
            onClick={onSelectCanvas}
            id={id}
        >
            {canvasData.size.width}px {canvasData.size.height}px
            {blocks.map((block, index) => {
                const isBlockSelected = block.id === canvasData.active;
                const handleClick = () => {
                    onBlockClick(block.id);
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
                        break;
                    case "image":
                        return (
                            <ImageBlock
                                block={block}
                                key={index}
                                isSelected={isBlockSelected}
                                onClick={handleClick}
                            />
                        );
                        break;
                    case "text":
                        return (
                            <TextBlock
                                block={block}
                                key={index}
                                isSelected={isBlockSelected}
                                onClick={handleClick}
                            />
                        );
                        break;
                    default:
                        return null;
                }
            })}
        </div>
    );
}

export default CanvasView;
