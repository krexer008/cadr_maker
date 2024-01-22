import { selectEditor } from "../../redux/selectors";
import { useSelector } from "react-redux";
import { useAppActions } from "../../redux/hooks";
import Toolbar from "../Toolbar/Toolbar";
import css from "./EditorView.module.css";
import Workspace from "../Workspace/Workspace";
import Header from "../Header/Header";
import { getEditorModel } from "../../utils/utils";
import { loadDatalFromLocal, saveDataToLocal } from "../../utils/fileutils";

function EditorView() {
    const editorModel = useSelector(selectEditor);

    const { createLoadCanvas, createEmptyEditor } = useAppActions();

    const loadFromFile = () => {
        loadDatalFromLocal((model) => {
            createLoadCanvas(model);
        });
    };

    const saveToFile = () => {
        saveDataToLocal(editorModel);
    };

    const resetModelHandler = () => {
        const emptyModel = getEditorModel();
        createEmptyEditor(emptyModel);
    };

    return (
        <div>
            <Header
                saveToFile={saveToFile}
                loadFromFile={loadFromFile}
                resetModelHandler={resetModelHandler}
            />
            <div className={css.main}>
                <Toolbar />
                <Workspace />
            </div>
        </div>
    );
}

export { EditorView };
