import { useSelector } from "react-redux";
import { selectEditor } from "../../redux/selectors";
import css from "./Header.module.css";
import HeaderButton from "./HeaderButton/HeaderButton";
import {
    getNewArt,
    getNewCanvas,
    getNewImage,
    getNewText,
} from "../../utils/utils";
import { useAppActions } from "../../redux/hooks";

type MenuFileProps = {
    saveToFile: () => void;
    loadFromFile: () => void;
};

function Header({ saveToFile, loadFromFile }: MenuFileProps) {
    const editorModel = useSelector(selectEditor);
    const { createSaveCanvasAction } = useAppActions();
    const canvas = editorModel.canvas;

    const resetModelHandler = () => {
        const newCanvas = getNewCanvas();
        createSaveCanvasAction(newCanvas);
    };

    const handleAddNewText = () => {
        const newTextBlock = getNewText();
        canvas.blocks.push(newTextBlock);
        canvas.active = newTextBlock.id;
        createSaveCanvasAction(canvas);
    };

    const handleAddNewArt = () => {
        const newArtBlock = getNewArt();
        canvas.blocks.push(newArtBlock);
        canvas.active = newArtBlock.id;
        createSaveCanvasAction(canvas);
    };

    const handleAddNewImageBlock = () => {
        const newImageBlock = getNewImage();
        canvas.blocks.push(newImageBlock);
        canvas.active = newImageBlock.id;
        createSaveCanvasAction(canvas);
    };

    const handleDeleteItem = () => {
        const updateBlocks = canvas.blocks.filter(
            (block) => block.id !== canvas.active
        );
        canvas.blocks = updateBlocks;
        createSaveCanvasAction(canvas);
    };

    return (
        <div className={css.header}>
            <div className={css.logo}>
                <span>Card Maker</span>
            </div>
            <HeaderButton
                onClick={loadFromFile}
                className={"button"}
                text="Open File"
            />

            <HeaderButton
                onClick={saveToFile}
                className={"button"}
                text="Save File"
            />

            <HeaderButton
                onClick={() => resetModelHandler()}
                className={"button"}
                text="Clear Editor" //Очистить редактор
            />

            <HeaderButton
                onClick={handleAddNewText}
                className={"button"}
                text="Add Text"
            />

            <HeaderButton
                onClick={() => handleAddNewImageBlock()}
                className={"button"}
                text="Add Image"
            />

            <HeaderButton
                onClick={handleAddNewArt}
                className={"button"}
                text="Add ART"
            />

            <HeaderButton
                onClick={() => handleDeleteItem()}
                className={"button"}
                text="Delete Item"
            />

            <HeaderButton
                onClick={() => alert("SaveFile clicked")}
                className={"button__dowload"}
                text="Export to Image"
            />

            <HeaderButton
                onClick={() => alert("SaveFile clicked")}
                className={"button__dowload"}
                text="Export to PDF"
            />
        </div>
    );
}

export default Header;
