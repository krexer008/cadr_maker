import { Canvas, Size } from "../../../../model/types";
import { useAppActions } from "../../../../redux/hooks";
import ChangeColor from "../ChangeColor/ChangeColor";
import ChangeCanvasImage from "./ChangeCanvasImage/ChangeCanvasImage";
import ChangeSize from "./ChangeSize/ChangeSize";

type ChangeCanvasProps = {
    canvas: Canvas;
};

function ChangeCanvas({ canvas }: ChangeCanvasProps) {
    const { createSaveCanvasAction } = useAppActions();

    const handleChangeColor = (newColor: string) => {
        canvas.bgColor = newColor;
        createSaveCanvasAction(canvas);
    };
    const handleChangeWidth = (newWidth: string) => {
        canvas.size.width = parseInt(newWidth);
        createSaveCanvasAction(canvas);
    };
    const handleChangeHeight = (newHeight: string) => {
        canvas.size.height = parseInt(newHeight);
        createSaveCanvasAction(canvas);
    };

    return (
        <div>
            <ChangeColor value={canvas.bgColor} setValue={handleChangeColor} />
            <ChangeCanvasImage />
            <ChangeSize
                size={canvas.size}
                setValueWidth={handleChangeWidth}
                setValueHeight={handleChangeHeight}
            />
        </div>
    );
}

export default ChangeCanvas;
