import { ActiveObjectView } from "../ActiveObjectView/ActiveObjectView";
import { ArtBlockType, ArtValue } from "../../../model/types";
import ArtObjectArrow from "./artObject/ArtObjectArrow/ArtObjectArrow";
import ArtObjectCircle from "./artObject/ArtObjectCircle/ArtObjectCircle";
import ArtObjectChat from "./artObject/ArtObjectChat/ArtObjectChat";
import ArtObjectClock from "./artObject/ArtObjectClock/ArtObjectClock";
import ArtObjectGift from "./artObject/ArtObjectGift/ArtObjectGift";
import ArtObjectHeart from "./artObject/ArtObjectHeart/ArtObjectHeart";
import ArtObjectSquare from "./artObject/ArtObjectSquare/ArtObjectSquare";
import ArtObjectThugLife from "./artObject/ArtObjectThugLife/ArtObjectThugLife";
import ArtObjectThumbsUp from "./artObject/ArtObjectThumbsUp/ArtObjectThumbsUp";

type artBlockProps = {
    block: ArtBlockType;
    isSelected: boolean;
    onClick: () => void;
};

function ArtBlock({ block, isSelected, onClick }: artBlockProps) {
    const { value, bgColor, borderColor, size, position, transform } = block;

    let ArtObjectContent;
    switch (value) {
        case ArtValue.Arrow:
            ArtObjectContent = (
                <ArtObjectArrow color={borderColor} size={size} />
            );
            break;
        case ArtValue.Circle:
            ArtObjectContent = (
                <ArtObjectCircle color={borderColor} size={size} />
            );
            break;
        case ArtValue.Chat:
            ArtObjectContent = <ArtObjectChat color={borderColor} size={size} />;
            break;
        case ArtValue.Clock:
            ArtObjectContent = (
                <ArtObjectCircle color={borderColor} size={size} />
            );
            break;
        case ArtValue.Flower:
            ArtObjectContent = (
                <ArtObjectClock color={borderColor} size={size} />
            );
            break;
        case ArtValue.Gift:
            ArtObjectContent = <ArtObjectGift color={borderColor} size={size} />;
            break;
        case ArtValue.Heart:
            ArtObjectContent = (
                <ArtObjectHeart color={borderColor} size={size} />
            );
            break;
        case ArtValue.Square:
            ArtObjectContent = (
                <ArtObjectSquare color={borderColor} size={size} />
            );
            break;
        case ArtValue.ThugLife:
            ArtObjectContent = (
                <ArtObjectThugLife color={borderColor} size={size} />
            );
            break;
        case ArtValue.ThumbsUp:
            ArtObjectContent = (
                <ArtObjectThumbsUp color={borderColor} size={size} />
            );
            break;
        default:
            ArtObjectContent = null;
    }
    return (
        <ActiveObjectView
            isSelected={isSelected}
            position={position}
            size={size}
            background={bgColor}
            className="artobject"
            blockId={block.id}
            transform={transform}
        >
            <div onClick={onClick}>{ArtObjectContent}</div>
        </ActiveObjectView>
    );
}

export default ArtBlock;
