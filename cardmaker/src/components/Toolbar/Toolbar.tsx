import { useSelector } from "react-redux";
import { selectEditor } from "../../redux/selectors";
import ChangeText from "./tools/ChangeText/ChangeText";
import css from "./Toolbar.module.css";
import ChangeBlockArt from "./tools/ChangeBlockArt/ChangeBlockArt";
import ChangeCanvas from "./tools/ChangeCanvas/ChangeCanvas";
import ChangeBlockImage from "./tools/ChangeBlockImage/ChangeBlockImage";
import ChangeTemplates from "./tools/ChangeTemplates/ChangeTemplates";
import { ArtBlockType, ImageBlockType, TextBlockType } from "../../model/types";

function Toolbar() {
    const editorData = useSelector(selectEditor);
    const { id, active, blocks } = editorData.canvas;

    let blockType = "";

    const block = blocks.find((elem) => elem.id === active);

    if (active == id) {
        blockType = "canvas";
    } else {
        if (block) {
            blockType = block.type;
        }
    }

    let menu;
    switch (blockType) {
        case "canvas":
            menu = <ChangeCanvas canvas={editorData.canvas} />;
            break;
        case "text":
            menu = <ChangeText block={block as TextBlockType} id={active} />;
            break;
        case "image":
            menu = (
                <ChangeBlockImage block={block as ImageBlockType} id={active} />
            );
            break;
        case "art":
            menu = <ChangeBlockArt block={block as ArtBlockType} id={active} />;
            break;
        default:
            menu = <ChangeTemplates />;
            break;
    }
    return (
        <div className={css.toolbar}>
            <label>Features</label>
            {menu}
        </div>
    );
}
export default Toolbar;
