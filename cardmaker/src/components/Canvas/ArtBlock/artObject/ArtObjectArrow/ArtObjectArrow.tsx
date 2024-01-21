import { Size } from "../../../../../model/types";

interface ArtBlockProps {
    color: string;
    size: Size;
}

function ArtObjectArrow({ color, size: { width, height } }: ArtBlockProps) {
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
                d="M1 8C1 7.72386 1.22386 7.5 1.5 7.5L13.2929 7.5L10.1464 4.35355C9.95118 4.15829 9.95118 3.84171 10.1464 3.64645C10.3417 3.45118 10.6583 3.45118 10.8536 3.64645L14.8536 7.64645C15.0488 7.84171 15.0488 8.15829 14.8536 8.35355L10.8536 12.3536C10.6583 12.5488 10.3417 12.5488 10.1464 12.3536C9.95118 12.1583 9.95118 11.8417 10.1464 11.6464L13.2929 8.5H1.5C1.22386 8.5 1 8.27614 1 8Z"
                fill={color}
            />
        </svg>
    );
}

export default ArtObjectArrow;
