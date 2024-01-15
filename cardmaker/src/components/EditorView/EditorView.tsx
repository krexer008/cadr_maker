import React from "react";
import Toolbar from "../Toolbar/Toolbar";
import css from "./EditorView.module.css";
import Workspace from "../Workspace/Workspace";
import Header from "../Header/Header";
import { Editor } from "../../model/types";

type EditorViewProps = {
    editorData: Editor;
};

function EditorView() {
    return (
        <div>
            <Header />
            <div className={css.main}>
                <Toolbar />
                <Workspace />
            </div>
        </div>
    );
}
export { EditorView };
