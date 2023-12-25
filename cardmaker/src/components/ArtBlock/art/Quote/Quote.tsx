import React from "react";
import { ArtBlockType } from "../../../../type/type";
import getOpacity from "../../../../utils/getOpacity";
import getRGB from "../../../../utils/getRGB";

interface ArtBlockProps {
    block: ArtBlockType;
}

function Quote({ block }: ArtBlockProps) {
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
                <path d="M2800 8764 c-711 -77 -1342 -340 -1807 -753 -384 -341 -716 -925 -873 -1536 -233 -908 -118 -1864 322 -2671 186 -342 376 -571 644 -776 436 -332 1073 -582 1759 -689 71 -11 130 -21 132 -22 2 -3 43 -251 164 -992 22 -137 78 -481 125 -764 46 -282 84 -515 84 -517 0 -10 46 -44 61 -44 48 0 53 11 459 1171 l396 1134 2835 6 c2565 5 2845 7 2947 22 818 120 1410 391 1863 855 181 184 307 357 447 616 522 957 583 2118 166 3140 -96 235 -270 546 -406 726 -408 542 -1046 906 -1850 1054 -318 59 -115 56 -3885 55 -2840 -1 -3480 -4 -3583 -15z m7120 -124 c266 -25 545 -82 802 -166 631 -206 1106 -565 1421 -1075 705 -1142 700 -2591 -13 -3726 -312 -497 -788 -852 -1416 -1056 -222 -72 -399 -112 -689 -155 -99 -14 -400 -16 -2971 -19 -2692 -3 -2862 -5 -2877 -21 -9 -9 -81 -204 -160 -432 -491 -1406 -568 -1626 -574 -1640 -3 -8 -14 32 -24 90 -17 103 -141 859 -260 1590 -33 202 -66 375 -74 387 -9 13 -29 24 -47 27 -18 3 -85 12 -148 21 -462 65 -1020 245 -1375 442 -515 286 -814 616 -1070 1183 -444 982 -412 2144 86 3089 230 436 486 725 854 967 400 262 941 443 1480 493 137 13 6915 13 7055 1z"/>
            </g>
        </svg>
    )
};

export default Quote;