import { Size } from "../../../../../model/types";

interface ArtBlockProps {
    color: string;
    size: Size;
}

function ArtObjectSquare({ color, size: { width, height } }: ArtBlockProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 45 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="100%" height="100%" fill="" />
            <path
                d="M14 1C14.5523 1 15 1.44772 15 2V14C15 14.5523 14.5523 15 14 15H2C1.44772 15 1 14.5523 1 14V2C1 1.44772 1.44772 1 2 1H14ZM2 0C0.895431 0 0 0.895431 0 2V14C0 15.1046 0.895431 16 2 16H14C15.1046 16 16 15.1046 16 14V2C16 0.895431 15.1046 0 14 0H2Z"
                fill={color}
            />
        </svg>
    );
}

export default ArtObjectSquare;
