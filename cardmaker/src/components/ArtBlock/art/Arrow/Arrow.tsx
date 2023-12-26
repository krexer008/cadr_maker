import React from "react";
import { ArtBlockType } from "../../../../type/type";
import getOpacity from "../../../../utils/getOpacity";
import getRGB from "../../../../utils/getRGB";

interface ArtBlockProps {
    block: ArtBlockType;
}

function Arrow({ block }: ArtBlockProps) {
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
                <path d="M244.4,124.2l-53.6-53.6c-1.1-1.1-2.1-1.6-3.8-1.6c-3.2,0-5.4,2.1-5.4,5.4c0,1.6,0.5,2.7,1.6,3.8l44.5,44.5H15.4c-3.2,0-5.4,2.1-5.4,5.4c0,3.2,2.1,5.4,5.4,5.4h212.4l-44.5,44.5c-1.1,1.1-1.6,2.1-1.6,3.8c0,3.2,2.1,5.4,5.4,5.4c1.6,0,2.7-0.5,3.8-1.6l53.6-53.6c1.1-1.1,1.6-2.1,1.6-3.8C246,126.4,245.5,125.3,244.4,124.2z" />
            </g>
        </svg>
    );
}

export default Arrow;
