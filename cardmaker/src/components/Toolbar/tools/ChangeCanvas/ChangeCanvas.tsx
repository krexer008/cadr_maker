import React from "react";
import ChangeCanvasSize from "../ChangeCanvasSize/ChangeCanvasSize";
import ChangeColor from "../ChangeColor/ChangeColor";
import ChangeImage from "../ChangeImage/ChangeImage";

function ChangeCanvas() {
  return (
    <div>
      <ChangeColor text={"Color"} />
      <ChangeImage />
      <ChangeCanvasSize />
    </div>
  );
}
export default ChangeCanvas;
