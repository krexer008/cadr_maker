import { ArtBlockType } from "../../../../model/types";
import { useAppActions, useAppSelector } from "../../../../redux/hooks";
import { selectEditor } from "../../../../redux/selectors";
import ChangeArt from "../ChangeArt/ChangeArt";
import ChangeColor from "../ChangeColor/ChangeColor";
import css from "./ChangeBlockArt.module.css";

type ChangeProps = {
    index: number;
    id: string;
};

function ChangeBlockArt({ index, id }: ChangeProps) {
    const editorData = useAppSelector(selectEditor);
    const { createUpdateBlocks } = useAppActions();

    const block = editorData.canvas.blocks[index] as ArtBlockType;

    const handleChangeBorderColor = (newColor: string) => {
        const updateBlocks = editorData.canvas.blocks.map((block) => {
            if (block.id === id && "borderColor" in block) {
                block.borderColor = newColor;
            }
            return block;
        });
        createUpdateBlocks(updateBlocks);
    };

    const handleChangeBGColor = (newColor: string) => {
        const updateBlocks = editorData.canvas.blocks.map((block) => {
            if (block.id === id && "bgColor" in block) {
                block.bgColor = newColor;
            }
            return block;
        });
        createUpdateBlocks(updateBlocks);
    };

    return (
        <div className={css.toolbar}>
            <ChangeArt />
            <ChangeColor
                title="Border color"
                value={block.borderColor}
                setValue={handleChangeBorderColor}
            />
            <ChangeColor
                title="Backgroud color"
                value={block.bgColor}
                setValue={handleChangeBGColor}
            />
        </div>
    );
}
export default ChangeBlockArt;
