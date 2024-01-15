import React from "react";
import { ArtBlockType } from "../../../../model/types";
import getOpacity from "../../../../utils/getOpacity";
import getRGB from "../../../../utils/getRGB";

interface ArtBlockProps {
    block: ArtBlockType;
}

function Line({ block }: ArtBlockProps) {
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
            <g transform="translate(0.0, 640.0) scale(0.1, -0.1)">
                <path d="M170 4090 l0 -70 6230 0 6230 0 0 70 0 70 -6230 0 0 -70z" />
            </g>
        </svg>
    );
}

export default Line;
