import { ActiveObjectView } from "../ActiveObjectView/ActiveObjectView";
import { ArtBlockType, ArtValue, Size } from "../../../model/types";
import ArtObjectArrow from "./artObject/ArtObjectArrow/ArtObjectArrow";
import ArtObjectCircle from "./artObject/ArtObjectCircle/ArtObjectCircle";
import ArtObjectChat from "./artObject/ArtObjectChat/ArtObjectChat";
import ArtObjectClock from "./artObject/ArtObjectClock/ArtObjectClock";
import ArtObjectGift from "./artObject/ArtObjectGift/ArtObjectGift";
import ArtObjectHeart from "./artObject/ArtObjectHeart/ArtObjectHeart";
import ArtObjectSquare from "./artObject/ArtObjectSquare/ArtObjectSquare";
import ArtObjectThugLife from "./artObject/ArtObjectThugLife/ArtObjectThugLife";
import ArtObjectThumbsUp from "./artObject/ArtObjectThumbsUp/ArtObjectThumbsUp";
import ArtObjectFlower from "./artObject/ArtObjectFlower/ArtObjectFlower";
import css from "../ActiveObjectView/ActiveObjectView.module.css";

type artBlockProps = {
    block: ArtBlockType;
    preview: boolean;
    isSelected: boolean;
    onClick?: () => void;
};

function ArtBlock({ block, preview, isSelected, onClick }: artBlockProps) {
    const { value, borderColor, size, position, transform } = block;
    let ArtObjectContent;
    const sizeArt: Size = {
        width: preview ? size.width * 0.23 : size.width,
        height: preview ? size.height * 0.23 : size.height,
    };

    switch (value) {
        case ArtValue.Arrow:
            ArtObjectContent = (
                <ArtObjectArrow color={borderColor} size={sizeArt} />
            );
            break;
        case ArtValue.Circle:
            ArtObjectContent = (
                <ArtObjectCircle color={borderColor} size={sizeArt} />
            );
            break;
        case ArtValue.Chat:
            ArtObjectContent = (
                <ArtObjectChat color={borderColor} size={sizeArt} />
            );
            break;
        case ArtValue.Clock:
            ArtObjectContent = (
                <ArtObjectClock color={borderColor} size={sizeArt} />
            );
            break;
        case ArtValue.Flower:
            ArtObjectContent = (
                <ArtObjectFlower color={borderColor} size={sizeArt} />
            );
            break;
        case ArtValue.Gift:
            ArtObjectContent = (
                <ArtObjectGift color={borderColor} size={sizeArt} />
            );
            break;
        case ArtValue.Heart:
            ArtObjectContent = (
                <ArtObjectHeart color={borderColor} size={sizeArt} />
            );
            break;
        case ArtValue.Square:
            ArtObjectContent = (
                <ArtObjectSquare color={borderColor} size={sizeArt} />
            );
            break;
        case ArtValue.ThugLife:
            ArtObjectContent = (
                <ArtObjectThugLife color={borderColor} size={sizeArt} />
            );
            break;
        case ArtValue.ThumbsUp:
            ArtObjectContent = (
                <ArtObjectThumbsUp color={borderColor} size={sizeArt} />
            );
            break;
        default:
            ArtObjectContent = null;
    }

    if (!preview) {
        return (
            <ActiveObjectView
                isSelected={isSelected}
                position={position}
                size={size}
                //background={bgColor}
                className="artobject"
                blockId={block.id}
                transform={transform}
            >
                <div onClick={() => onClick}>{ArtObjectContent}</div>
            </ActiveObjectView>
        );
    } else {
        const top = position.top * 0.23;
        const left = position.left * 0.23;
        const width = sizeArt.width;
        const height = sizeArt.height;
        const stylePreview = {
            top,
            left,
            width,
            height,
        };
        return (
            <div style={stylePreview} className={css.container}>
                {ArtObjectContent}
            </div>
        );
    }
}

export default ArtBlock;
