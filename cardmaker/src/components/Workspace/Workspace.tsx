import { useAppActions, useAppSelector } from "../../redux/hooks";
import { selectEditor } from "../../redux/selectors";
import CanvasView from "../Canvas/CanvasView";
import css from "./Workspace.module.css";

function Workspace() {
    const { createSelectActiveAction } = useAppActions();
    const editorData = useAppSelector(selectEditor);
    const canvasData = editorData.canvas;

    const handleResetActive = () => {
        createSelectActiveAction("");
    };

    const handleSelectActive = (activeID: string) => {
        createSelectActiveAction(activeID);
    };
    return (
        <div className={css.workspace} onClick={() => handleResetActive()}>
            <CanvasView
                canvasData={canvasData}
                isSelected={canvasData.active === canvasData.id}
                onSelectActive={handleSelectActive}
            />
        </div>
    );
}

export default Workspace;
