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

    return (
        <ActiveObjectView
            isSelected={isSelected}
            position={position}
            size={size}
            className="image"
            blockId={block.id}
            transform={transform}
        >
            <img className={css.image} src={image.source} onClick={onClick} />
        </ActiveObjectView>
    );
}

export default ImageBlock;
