import { ArtBlockType, ArtValue } from "../../../../model/types";
import { useAppActions, useAppSelector } from "../../../../redux/hooks";
import { selectEditor } from "../../../../redux/selectors";
import ChangeArt from "./ChangeArt/ChangeArt";
import ChangeColor from "../ChangeColor/ChangeColor";
import css from "./ChangeBlockArt.module.css";

type ChangeProps = { id: string; block: ArtBlockType };

function ChangeBlockArt({ id, block }: ChangeProps) {
    const editorData = useAppSelector(selectEditor);
    const { createSaveCanvasAction } = useAppActions();

    let ind: number;

    const updateBlocks = editorData.canvas.blocks.map((block, index) => {
        if (block.id === id && "bgColor" in block && "borderColor" in block) {
            ind = index;
        }
    });

    const handleChangeBorderColor = (newColor: string) => {
        block.borderColor = newColor;
        editorData.canvas.blocks[ind] = block;
        createSaveCanvasAction(editorData.canvas);
    };
    const handleChangeArtObject = (newArt: ArtValue) => {
        block.value = newArt;
        editorData.canvas.blocks[ind] = block;
        createSaveCanvasAction(editorData.canvas);
    };

    return (
        <div className={css.toolbar}>
            <ChangeArt
                artValue={block.value}
                setValue={handleChangeArtObject}
            />
            <ChangeColor
                title="Border color"
                value={block.borderColor}
                setValue={handleChangeBorderColor}
            />
        </div>
    );
}
export default ChangeBlockArt;
