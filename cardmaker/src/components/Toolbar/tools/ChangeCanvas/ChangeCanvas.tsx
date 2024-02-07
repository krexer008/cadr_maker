import { Canvas } from "../../../../model/types";
import { useAppActions } from "../../../../redux/hooks";
import ChangeColor from "../ChangeColor/ChangeColor";
import ChangeImage from "../ChangeImage/ChangeImage";
import ChangeSize from "./ChangeSize/ChangeSize";

type ChangeCanvasProps = {
    canvas: Canvas;
};

function ChangeCanvas({ canvas }: ChangeCanvasProps) {
    const { createChangeCanvasWidthAction, createChangeCanvasHeightAction } =
        useAppActions();

    const handleChangeWidth = (newWidth: string) => {
        createChangeCanvasWidthAction(parseInt(newWidth));
    };

    const handleChangeHeight = (newHeight: string) => {
        createChangeCanvasHeightAction(parseInt(newHeight));
    };

    return (
        <div>
            <ChangeColor />
            <ChangeImage />
            <ChangeSize
                size={canvas.size}
                setValueWidth={handleChangeWidth}
                setValueHeight={handleChangeHeight}
            />
        </div>
    );
}

export default ChangeCanvas;
