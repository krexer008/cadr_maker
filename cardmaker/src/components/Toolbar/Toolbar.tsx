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
    const block = blocks.find((block) => block.id === active);

    let blockType = "";

    if (active == id) {
        blockType = "canvas";
    } else {
        if (block) {
            blockType = block?.id;
        }
    }

    let menu;
    switch (blockType) {
        case "":
            menu = <ChangeTemplates />;
            break;
        case "canvas":
            menu = <ChangeCanvas />;
            break;
        case "text":
            menu = <ChangeText block={block as TextBlockType} />;
            break;
        case "image":
            menu = <ChangeBlockImage id={active} />;
            break;
        case "art":
            menu = <ChangeBlockArt id={active} />;
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
