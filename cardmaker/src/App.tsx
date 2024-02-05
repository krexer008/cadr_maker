import css from "./App.module.css";
import { EditorView } from "./components/EditorView/EditorView";
import { useUndoRedoListeners } from "./hook/useUndoRedoListeners";

const App = () => {
    useUndoRedoListeners();
    return (
        <div className={css.app}>
            <EditorView />
        </div>
    );
};
export default App;
