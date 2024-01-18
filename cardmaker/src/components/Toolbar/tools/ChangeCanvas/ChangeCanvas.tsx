import React from "react";
import { useSelector } from "react-redux";
import { selectEditor } from "../../../../redux/selectors";
import ChangeSize from "../ChangeSize/ChangeSize";
import ChangeColor from "../ChangeColor/ChangeColor";
import ChangeImage from "../ChangeImage/ChangeImage";

function ChangeCanvas() {
  const editorData = useSelector(selectEditor);

  const { size, bgImage, bgColor } = editorData.canvas;
  return (
    <div>
      <ChangeColor title="Color" color={bgColor} />
      <ChangeImage image={bgImage} />
      <ChangeSize size={size} />
    </div>
  );
}
export default ChangeCanvas;
