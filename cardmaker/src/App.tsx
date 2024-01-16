import { useState } from "react";
import css from "./App.css";
import { EditorView } from "./components/EditorView/EditorView";
import { editorData } from "./data/full_data";

const App = () => {
    // слушатель УНДО/РЕДО
    return (
        <div className={css.app}>
            <EditorView />
        </div>
    );
};
export default App;
