import css from "../../../../../common/Common.module.css";
import { ArtBlockType, ArtValue } from "../../../../../model/types";
import { useAppActions, useAppSelector } from "../../../../../redux/hooks";
import { selectEditor } from "../../../../../redux/selectors";

function ChangeArt() {
    const editorData = useAppSelector(selectEditor);
    const { createChangeArtAction } = useAppActions();
    const activeBlock = editorData.canvas.blocks.find(
        (block) => block.id === editorData.canvas.active
    ) as ArtBlockType;

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

    const handleChangeArtObject = (value: string) => {
        const changeArt = parseInt(value);
        createChangeArtAction(changeArt);
    };
    return (
        <div className={css.tool}>
            <label htmlFor="art-name">Art object: </label>
            <select
                id="art-name"
                defaultValue={activeBlock.value}
                onChange={(event) => {
                    handleChangeArtObject(event.target.value);
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
