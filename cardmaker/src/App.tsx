import React from "react";
import css from "./App.module.css";
import { EditorView } from "./components/EditorView/EditorView";

const App = () => {
    // слушатель УНДО/РЕДО
    return (
        <div className={css.app}>
            <EditorView />
        </div>
    );
};
export default App;
