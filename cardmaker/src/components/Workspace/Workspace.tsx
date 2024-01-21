import { useAppActions, useAppSelector } from "../../redux/hooks";
import { selectEditor } from "../../redux/selectors";
import CanvasView from "../Canvas/CanvasView";
import css from "./Workspace.module.css";

type WorkspaceProps = {
    onSelectCanvas: (canvasId|string)=>void;
};

function Workspace() {
    const {createChangeActiveElement} = useAppActions;
    //объявляем экшн для выбора активного элемента
    const editorData = useAppSelector(selectEditor);
    const canvasData = editorData.canvas;
    const selectedCanvas = editorData.canvas;
    const activeBlockId = selectedCanvas.active

    return (
        <div className={css.workspace}>
            <CanvasView
                canvasData={canvasData}
                isSelected={canvasData.active === canvasData.id}
                onBlockClick={handleSelectElementClick}
                onSelectCanvas={() => onSelectCanvas(canvasData.id)}
            />
        </div>
    );
}

export default Workspace;
