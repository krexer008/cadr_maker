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

    let ArtOjectContent;
    switch (value) {
        case ArtValue.Arrow:
            ArtOjectContent = (
                <ArtObjectArrow color={borderColor} size={size} />
            );
            break;
        case ArtValue.Circle:
            ArtOjectContent = (
                <ArtObjectCircle color={borderColor} size={size} />
            );
            break;
        case ArtValue.Chat:
            ArtOjectContent = <ArtObjectChat color={borderColor} size={size} />;
            break;
        case ArtValue.Clock:
            ArtOjectContent = (
                <ArtObjectCircle color={borderColor} size={size} />
            );
            break;
        case ArtValue.Flower:
            ArtOjectContent = (
                <ArtObjectClock color={borderColor} size={size} />
            );
            break;
        case ArtValue.Gift:
            ArtOjectContent = <ArtObjectGift color={borderColor} size={size} />;
            break;
        case ArtValue.Heart:
            ArtOjectContent = (
                <ArtObjectHeart color={borderColor} size={size} />
            );
            break;
        case ArtValue.Square:
            ArtOjectContent = (
                <ArtObjectSquare color={borderColor} size={size} />
            );
            break;
        case ArtValue.ThugLife:
            ArtOjectContent = (
                <ArtObjectThugLife color={borderColor} size={size} />
            );
            break;
        case ArtValue.ThumbsUp:
            ArtOjectContent = (
                <ArtObjectThumbsUp color={borderColor} size={size} />
            );
            break;
        default:
            ArtOjectContent = null;
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
            <div onClick={onClick}>{ArtOjectContent}</div>
        </ActiveObjectView>
    );
}

export default ArtBlock;
