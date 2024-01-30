import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";

export const exportToImage = (canvasId: string) => {
    const canvas = document.getElementById(canvasId);
    if (!canvas) {
        console.log("canvas is not exist");
        return;
    }
    const jpegFileName = "card_image";

    htmlToImage.toJpeg(canvas).then(function (dataUrl) {
        const link = document.createElement("a");
        link.download = jpegFileName ? jpegFileName + ".jpeg" : "unnamed.jpeg";
        link.href = dataUrl;
        link.click();
    });
    console.log("image create");
};

