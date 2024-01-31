import css from "./ImageBlock.module.css";
import { ImageBlockType } from "../../../model/types";
import { ActiveObjectView } from "../ActiveObjectView/ActiveObjectView";

type ImageBlockProps = {
    block: ImageBlockType;
    preview: boolean;
    isSelected: boolean;
    onClick?: () => void;
};

function ImageBlock({ block, isSelected, preview, onClick }: ImageBlockProps) {
    const { size, position, image, transform } = block;

    const styleImageBlock = {
        width: `100%`,
        height: `100%`,
        backgroundImage: `url("${image.source}")`,
        //backgroundColor: "#a1f2ff",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };

    if (!preview) {
        return (
            <ActiveObjectView
                isSelected={isSelected}
                position={position}
                size={size}
                className="image"
                blockId={block.id}
                transform={transform}
            >
                <div
                    className={css.image}
                    style={styleImageBlock}
                    onClick={onClick}
                ></div>
            </ActiveObjectView>
        );
    } else {
        const top = position.top * 0.1;
        const left = position.left * 0.1;
        const width = size.width * 0.1;
        const height = size.height * 0.1;
        const stylePreview = {
            top,
            left,
            width,
            height,
            backgroundImage: `url("${image.source}")`,
            //backgroundColor: "#a1f2ff",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        };
        return (
            <div
                className={css.image}
                style={stylePreview}
                onClick={onClick}
            ></div>
        );
    }
}

export default ImageBlock;
