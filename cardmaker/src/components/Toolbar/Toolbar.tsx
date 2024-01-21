import { useSelector } from "react-redux";
import { selectEditor } from "../../redux/selectors";
import ChangeText from "./tools/ChangeText/ChangeText";
import css from "./Toolbar.module.css";
import ChangeArtBlock from "./tools/ChangeArtBlock/ChangeArtBlock";
import ChangeCanvas from "./tools/ChangeCanvas/ChangeCanvas";
import ChangeImage from "./tools/ChangeImage/ChangeImage";
import ChangeTemplates from "./tools/ChangeTemplates/ChangeTemplates";
import React from "react";

function Toolbar() {
    const editorData = useSelector(selectEditor);
    const { id, active, blocks } = editorData.canvas;
    let blockType = "";
    if (active) {
        if (active == id) {
            blockType = "canvas";
        } else {
            for (let i = 0; i < blocks.length; i++) {
                if (blocks[i].id == active) {
                    blockType = blocks[i].type;
                    break;
                }
            }
        }
    }
    return (
        <div className={css.toolbar}>
            <label>Features</label>
            {blockType == "canvas" ? (
                <ChangeCanvas />
            ) : blockType == "text" ? (
                <ChangeText />
            ) : blockType == "image" ? (
                <ChangeImage />
            ) : blockType == "art" ? (
                <ChangeArtBlock />
            ) : (
                <ChangeTemplates />
            )}
        </div>
    );
}

export default Toolbar;
