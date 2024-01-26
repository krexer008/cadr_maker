import css from "./ImageBlock.module.css";
import { ImageBlockType } from "../../../model/types";
import { ActiveObjectView } from "../ActiveObjectView/ActiveObjectView";

type ImageBlockProps = {
    block: ImageBlockType;
    isSelected: boolean;
    onClick: () => void;
};

function ImageBlock({ block, isSelected, onClick }: ImageBlockProps) {
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
}

export default ImageBlock;
