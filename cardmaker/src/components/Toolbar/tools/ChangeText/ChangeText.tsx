import ChangeColor from "../ChangeColor/ChangeColor";
import css from "../../../../common/Common.module.css";
import ToolbarButton from "../../ToolbarButton/ToolbarButton";
import { selectEditor } from "../../../../redux/selectors";
import { useAppActions, useAppSelector } from "../../../../redux/hooks";
import { TextBlockType } from "../../../../model/types";

type ChangeProps = { id: string; block: TextBlockType };

const Fonts = ["Arial", "Calibri", "Impact", "Times New Roman", "Symbol"];
const FontSize = [
    8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 58, 66, 72, 86, 98, 106, 114,
    122, 130, 142, 154, 166, 178, 188, 196, 202,
];

function ChangeText({ id, block }: ChangeProps) {
    const editorData = useAppSelector(selectEditor);
    const {
        createChangeFontSizeAction,
        createChangeFontFamilyAction,
        createChangeFontUnderlineAction,
        createChangeFontCursivelineAction,
        createChangeFontBoldlineAction,
    } = useAppActions();
    let ind: number;
    editorData.canvas.blocks.map((block, index) => {
        if (block.id === id && block.type === "text") {
            ind = index;
        }
    });

    const handlerChangeBold = (bold: boolean) => {
        createChangeFontBoldlineAction(bold, ind);
    };
    const handlerChangeCursive = (cursive: boolean) => {
        createChangeFontCursivelineAction(cursive, ind);
    };
    const handlerChangeUnderline = (underline: boolean) => {
        createChangeFontUnderlineAction(underline, ind);
    };
    const handlerChangeFontFamily = (fontFamily: string) => {
        createChangeFontFamilyAction(fontFamily, ind);
    };
    const handlerChangeFontSize = (fontSize: string) => {
        createChangeFontSizeAction(parseInt(fontSize), ind);
    };

    return (
        <div className={css.textbar}>
            <ChangeColor />
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
