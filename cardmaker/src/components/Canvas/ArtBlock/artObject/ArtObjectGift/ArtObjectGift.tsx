import { Size } from "../../../../../model/types";

interface ArtBlockProps {
    color: string;
    size: Size;
}

function ArtObjectGift({ color, size: { width, height } }: ArtBlockProps) {
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
                d="M8.4375 7.03125C8.4375 3.148 11.5855 0 15.4688 0C19.352 0 22.5 3.148 22.5 7.03125C22.5 3.148 25.648 0 29.5312 0C33.4145 0 36.5625 3.148 36.5625 7.03125L36.5625 7.04691C36.5626 7.2434 36.5629 7.80656 36.4561 8.4375H42.1875C43.7408 8.4375 45 9.6967 45 11.25V16.875C45 18.4283 43.7408 19.6875 42.1875 19.6875V40.7812C42.1875 43.1112 40.2987 45 37.9688 45H7.03125C4.7013 45 2.8125 43.1112 2.8125 40.7812L2.8125 19.6875C1.2592 19.6875 0 18.4283 0 16.875V11.25C0 9.6967 1.2592 8.4375 2.8125 8.4375H8.54389C8.43713 7.80656 8.4374 7.24339 8.43749 7.04691C8.4375 7.0414 8.4375 7.03618 8.4375 7.03125ZM11.4412 8.4375H19.6875V7.03125C19.6875 4.7013 17.7987 2.8125 15.4688 2.8125C13.1388 2.8125 11.25 4.7013 11.25 7.03125C11.25 7.26961 11.2555 7.80049 11.3762 8.24327C11.3977 8.32204 11.42 8.38649 11.4412 8.4375ZM25.3125 8.4375H33.5588C33.58 8.38649 33.6023 8.32204 33.6238 8.24327C33.7445 7.80049 33.75 7.26961 33.75 7.03125C33.75 4.7013 31.8612 2.8125 29.5312 2.8125C27.2013 2.8125 25.3125 4.7013 25.3125 7.03125V8.4375ZM2.8125 11.25V16.875H19.6875V11.25H2.8125ZM25.3125 11.25V16.875H42.1875V11.25H25.3125ZM39.375 19.6875H25.3125V42.1875H37.9688C38.7454 42.1875 39.375 41.5579 39.375 40.7812V19.6875ZM19.6875 42.1875V19.6875H5.625V40.7812C5.625 41.5579 6.2546 42.1875 7.03125 42.1875H19.6875Z"
                fill={color}
            />
        </svg>
    );
}

export default ArtObjectGift;
