import React from "react";
import { ArtBlockType } from "../../../../type/type";
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
            viewBox="0 0 800 600"
            preserveAspectRatio="xMidYMid meet"
            width="100%"
            height="100%"
            stroke={getRGB(block.borderColor)}
            strokeOpacity={getOpacity(block.borderColor)}
            fill={getRGB(block.background)}
            fillOpacity={getOpacity(block.background)}
        >
            <g transform="translate(0.0, 640.0) scale(0.1, -0.1)">
                <path d="M170 4090 l0 -70 6230 0 6230 0 0 70 0 70 -6230 0 0 -70z" />
            </g>
        </svg>
    );
}

export default Line;
