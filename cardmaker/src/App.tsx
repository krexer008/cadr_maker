import { useState } from "react";
import css from "./App.module.css";
import { EditorView } from "./components/EditorView/EditorView";
import { editorData } from "./data/full_data";

const App = () => {

    const [editor, setEditorData] = useState({ editorData });
    return (
        <div className={css.app}>
            <EditorView editorData={editor} />
        </div>
    );
};
export default App;
