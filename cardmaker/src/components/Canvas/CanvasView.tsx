import React from "react";
import css from "./CanvasView.module.css";
import { Canvas } from "../../model/types";
import getRGBA from "../../utils/getRGBA";
import ImageBlock from "../ImageBlock/ImageBlock";
import ArtBlock from "../ArtBlock/ArtBlock";
import TextBlock from "../TextBlock/TextBlock";

type CanvasBlockProps = {
  canvasData: Canvas;
  isSelected?: boolean;
  onSelectCanvas?: () => void;
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
    backgroundImage: `url("${bgImage.data}")`,
    backgroundColor: getRGBA(bgColor),
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  const classNames = `${css.canvas} ${isSelected ? css.selected : css.canvas}`;

  return (
    <div
      className={classNames}
      id={id}
      style={styleCanvas}
      onClick={onSelectCanvas}
    >
      <div>
        {canvasData.size.width}"px /// "{canvasData.size.height}px
      </div>
      {blocks.map((block, index) => {
        switch (block.type) {
          case "art":
            return <ArtBlock block={block} key={index} />;
            break;
          case "image":
            return <ImageBlock block={block} key={index} />;
            break;
          case "text":
            return <TextBlock block={block} key={index} />;
            break;
        }
      })}
    </div>
  );
}

export default CanvasView;
