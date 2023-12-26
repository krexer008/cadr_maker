import React from "react";
import { ArtBlockType } from "../../../../type/type";
import getOpacity from "../../../../utils/getOpacity";
import getRGB from "../../../../utils/getRGB";

interface ArtBlockProps {
    block: ArtBlockType;
}

function Circle({ block }: ArtBlockProps) {
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
                <path d="M256,0c141.4,0,256,114.6,256,256S397.4,512,256,512S0,397.4,0,256S114.6,0,256,0z M256,56.9C146,56.9,56.9,146,56.9,256S146,455.1,256,455.1S455.1,366,455.1,256S366,56.9,256,56.9z" />
            </g>
        </svg>
    );
}

export default Circle;
