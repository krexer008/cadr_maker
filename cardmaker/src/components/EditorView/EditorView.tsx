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
  const editorData = useSelector(selectEditor);

  const { createLoadCanvas, createEmptyEditor } = useAppActions();

  const resetModelHandler = () => {
    const emptyModel = getEditorModel();
    createEmptyEditor(emptyModel);
  };

  const saveToFile = () => {
    saveDataToLocal(editorData);
  };

  const loadFromFile = () => {
    loadDatalFromLocal((model) => {
      createLoadCanvas(model);
    });
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
