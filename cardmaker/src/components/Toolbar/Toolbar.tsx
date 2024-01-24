import { useSelector } from "react-redux";
import { selectEditor } from "../../redux/selectors";
import ChangeText from "./tools/ChangeText/ChangeText";
import css from "./Toolbar.module.css";
import ChangeBlockArt from "./tools/ChangeBlockArt/ChangeBlockArt";
import ChangeCanvas from "./tools/ChangeCanvas/ChangeCanvas";
import ChangeBlockImage from "./tools/ChangeBlockImage/ChangeBlockImage";
import ChangeTemplates from "./tools/ChangeTemplates/ChangeTemplates";
import { TextBlockType } from "../../model/types";

function Toolbar() {
    const editorData = useSelector(selectEditor);
    const { id, active, blocks } = editorData.canvas;

    let index = NaN;

    const block = () => {
        for (let i = 0; i < blocks.length; i++) {
            if (blocks[i].id === active) {
                index = i;
                return;
            }
        }
    };

    //const block = blocks.find((block) => block.id === active);

    let blockType = "";

    if (active == id) {
        blockType = "canvas";
    } else {
        if (blocks[index]) {
            blockType = blocks[index]?.id;
        }
    }

    let menu;
    switch (blockType) {
        case "canvas":
            menu = <ChangeCanvas canvas={editorData.canvas} />;
            break;
        case "text":
            menu = <ChangeText index={index} id={active} />;
            break;
        case "image":
            menu = <ChangeBlockImage id={active} />;
            break;
        case "art":
            menu = <ChangeBlockArt index={index} id={active} />;
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
