import ChangeColor from "../ChangeColor/ChangeColor";
import css from "../../../../common/Common.module.css";
import ToolbarButton from "../../ToolbarButton/ToolbarButton";
import { selectEditor } from "../../../../redux/selectors";
import { useAppActions, useAppSelector } from "../../../../redux/hooks";
import { TextBlockType } from "../../../../model/types";

type ChangeProps = { id: string; block: TextBlockType };

const Fonts = ["Arial", "Calibri", "Impact", "Times New Roman", "Symbol"];
const FontSize = [8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40];

function ChangeText({ id, block }: ChangeProps) {
    const editorData = useAppSelector(selectEditor);
    const { createSaveCanvasAction } = useAppActions();

    let ind: number;
    const updateBlocks = editorData.canvas.blocks.map((block, index) => {
        if (
            block.id === id &&
            "fontSize" in block &&
            "fontFamily" in block &&
            "color" in block &&
            "bold" in block &&
            "cursive" in block &&
            "underline" in block
        ) {
            ind = index;
        }
    });

    const handleChangeColor = (newColor: string) => {
        block.color = newColor;
        editorData.canvas.blocks[ind] = block;
        createSaveCanvasAction(editorData.canvas);
    };

    const handlerChangeBold = (bold: boolean) => {
        block.bold = bold;
        editorData.canvas.blocks[ind] = block;
        createSaveCanvasAction(editorData.canvas);
    };
    const handlerChangeCursive = (cursive: boolean) => {
        block.cursive = cursive;
        editorData.canvas.blocks[ind] = block;
        createSaveCanvasAction(editorData.canvas);
    };
    const handlerChangeUnderline = (underline: boolean) => {
        block.underline = underline;
        editorData.canvas.blocks[ind] = block;
        createSaveCanvasAction(editorData.canvas);
    };
    const handlerChangeFontFamily = (font: string) => {
        block.fontFamily = font;
        editorData.canvas.blocks[ind] = block;
        createSaveCanvasAction(editorData.canvas);
    };
    const handlerChangeFontSize = (font: string) => {
        block.fontSize = parseInt(font);
        editorData.canvas.blocks[ind] = block;
        createSaveCanvasAction(editorData.canvas);
    };

    const currentTextSize = 10;

    return (
        <div className={css.textbar}>
            <ChangeColor value={block.color} setValue={handleChangeColor} />
            <div className={css.toolblock}>
                <div className={css.tool}>
                    <ToolbarButton
                        handler={handlerChangeBold}
                        alt="B"
                        isClicked={block.bold}
                    />
                    <ToolbarButton
                        handler={handlerChangeCursive}
                        alt="I"
                        isClicked={block.cursive}
                    />
                    <ToolbarButton
                        handler={handlerChangeUnderline}
                        alt="U"
                        isClicked={block.underline}
                    />
                </div>
                <div className={css.tool}>
                    <select
                        id="drop-list"
                        defaultValue={block.fontFamily}
                        onChange={(event) => {
                            handlerChangeFontFamily(event.target.value);
                        }}
                    >
                        {Fonts.map((font, index) => (
                            <option value={font} key={index}>
                                {font}
                            </option>
                        ))}
                    </select>
                    <select
                        id="drop-list"
                        defaultValue={block.fontSize}
                        onChange={(event) => {
                            handlerChangeFontSize(event.target.value);
                        }}
                    >
                        {FontSize.map((sizeValue, index) => (
                            <option value={sizeValue} key={index}>
                                {sizeValue}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}
export default ChangeText;
