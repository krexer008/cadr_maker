import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectEditor } from "../../../../redux/selectors";
import ChangeSize from "../ChangeSize/ChangeSize";
import ChangeColor from "../ChangeColor/ChangeColor";
import ChangeImage from "../ChangeImage/ChangeImage";
import { useAppActions } from "../../../../redux/hooks";

function ChangeCanvas() {
  const editorData = useSelector(selectEditor);
  const { createChangeSize } = useAppActions();

  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.value ? setWidth(event.target.value) : setWidth("800");
  };
  const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.value ? setHeight(event.target.value) : setHeight("800");
  };

  const handleCanvasChange = () => {
    const newSize = {
      width: width ? parseInt(width, 10) : 800,
      height: height ? parseInt(height, 10) : 800,
    };

    createChangeSize(newSize);
  };

  if (editorData.canvas.active) {
    handleCanvasChange;
  }

  return (
    <div>
      <ChangeColor title="Color" color="grey" />
      <ChangeImage />
      <ChangeSize
        handleWidthChange={handleWidthChange}
        handleHeightChange={handleHeightChange}
      />
    </div>
  );
}
export default ChangeCanvas;
