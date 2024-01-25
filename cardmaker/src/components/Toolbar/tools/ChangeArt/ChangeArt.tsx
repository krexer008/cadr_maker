import css from "../../../../common/Common.module.css";
import { ArtValue } from "../../../../model/types";

type ChangeProps = {
    artValue: ArtValue;
    setValue: (newArt: ArtValue) => void;
};

function ChangeArt({ artValue, setValue }: ChangeProps) {
    const ArtValues = [
        ArtValue.Arrow,
        ArtValue.Chat,
        ArtValue.Circle,
        ArtValue.Clock,
        ArtValue.Flower,
        ArtValue.Gift,
        ArtValue.Heart,
        ArtValue.Square,
        ArtValue.ThugLife,
        ArtValue.ThumbsUp,
    ];
    const ArtValuesNames = [
        "Arrow",
        "Chat",
        "Circle",
        "Clock",
        "Flower",
        "Gift",
        "Heart",
        "Square",
        "ThugLife",
        "ThumbsUp",
    ];
    return (
        <div className={css.tool}>
            <label htmlFor="art-name">Art object: </label>
            <select
                id="art-name"
                defaultValue={artValue}
                onChange={(event) => {
                    setValue(parseInt(event.target.value));
                }}
            >
                {ArtValues.map((art) => (
                    <option key={art} value={art}>
                        {ArtValuesNames[art]}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default ChangeArt;
