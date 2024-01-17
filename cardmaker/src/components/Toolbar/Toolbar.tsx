import React from "react";
import css from "./Toolbar.module.css";
import ChangeArt from "./tools/ChangeArt/ChangeArt";
import ChangeCanvasSize from "./tools/ChangeCanvasSize/ChangeCanvasSize";
import ChangeColor from "./tools/ChangeColor/ChangeColor";
import ChangeImage from "./tools/ChangeImage/ChangeImage";
import ChangeTextStyle from "./tools/ChangeTextStyle/ChangeTextStyle";

function Toolbar() {
  const currentColor = {
    hexColor: "#ffffff",
    opacity: 1,
  };
  const currentBGColor = {
    hexColor: "#ffffff",
    opacity: 1,
  };
  const currentTextSize = 10;
  const currentFontFamily = "Arial";

  return (
    <div className={css.toolbar}>
      <ChangeColor
        currentColor={currentColor}
        currentBGColor={currentBGColor}
      />
      <ChangeTextStyle
        currentTextSize={currentTextSize}
        currentFontFamily={currentFontFamily}
      />
      <ChangeImage />
      <ChangeArt />
      <ChangeCanvasSize />
    </div>
  );
}
export default Toolbar;
