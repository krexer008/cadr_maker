import { Canvas, Size } from "../../../../model/types";
import { useAppActions } from "../../../../redux/hooks";
import ChangeColor from "../ChangeColor/ChangeColor";
import ChangeCanvasImage from "./ChangeCanvasImage/ChangeCanvasImage";
import ChangeSize from "./ChangeSize/ChangeSize";

type ChangeCanvasProps = {
    canvas: Canvas;
};

function ChangeCanvas({ canvas }: ChangeCanvasProps) {
    const { createUpdateCanvasBGAction } = useAppActions();

    const handleChangeColor = (newColor: string) => {
        createUpdateCanvasBGAction(newColor);
    };

    return (
        <div>
            <ChangeColor value={canvas.bgColor} setValue={handleChangeColor} />
            <ChangeCanvasImage />
            <ChangeSize />
        </div>
    );
}

export default ChangeCanvas;
