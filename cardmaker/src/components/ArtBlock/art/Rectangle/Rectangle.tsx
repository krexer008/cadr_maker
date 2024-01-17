import React from "react";
import { ArtBlockType } from "../../../../model/types";
import getOpacity from "../../../../utils/getOpacity";
import getRGB from "../../../../utils/getRGB";

interface ArtBlockProps {
  block: ArtBlockType;
}

function Rectangle({ block }: ArtBlockProps) {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 45 45"
      preserveAspectRatio="xMidYMid meet"
      width={block.size.width}
      height={block.size.height}
      stroke={getRGB(block.borderColor)}
      strokeOpacity={getOpacity(block.borderColor)}
      fill={getRGB(block.bgColor)}
      fillOpacity={getOpacity(block.bgColor)}
    >
      <g transform="translate(0.0, 200.0) scale(0.1, -0.1)">
        <path d="M8.5 22.5A3.5 3.5 0 0 0 5 26v48a3.5 3.5 0 0 0 3.5 3.5h83A3.5 3.5 0 0 0 95 74V26a3.5 3.5 0 0 0-3.5-3.5h-83zm3.5 7h76v41H12v-41z" />
      </g>
    </svg>
  );
}

export default Rectangle;
