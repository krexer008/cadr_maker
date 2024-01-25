import { selectEditor } from "../../redux/selectors";
import { useSelector } from "react-redux";
import { useAppActions } from "../../redux/hooks";
import Toolbar from "../Toolbar/Toolbar";
import css from "./EditorView.module.css";
import Workspace from "../Workspace/Workspace";
import Header from "../Header/Header";
import { loadDatalFromLocal, saveDataToLocal } from "../../utils/fileutils";

function EditorView() {
    const editorModel = useSelector(selectEditor);

    const { createLoadCanvas } = useAppActions();

    const loadFromFile = () => {
        loadDatalFromLocal((model) => {
            createLoadCanvas(model);
        });
    };

    const saveToFile = () => {
        saveDataToLocal(editorModel);
    };

    return (
        <div>
            <Header saveToFile={saveToFile} loadFromFile={loadFromFile} />
            <div className={css.main}>
                <Toolbar />
                <Workspace />
            </div>
        </div>
    );
}

export { EditorView };
