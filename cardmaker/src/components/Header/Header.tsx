import React from "react";
import { useSelector } from "react-redux";
import { selectEditor } from "../../redux/selectors";
import css from "./Header.module.css";
import HeaderButton from "./HeaderButton/HeaderButton";

type MenuFileProps = {
  saveToFile: () => void;
  loadFromFile: () => void;
  resetModelHandler: () => void;
};

function Header({
  saveToFile,
  loadFromFile,
  resetModelHandler,
}: MenuFileProps) {
  const editorModel = useSelector(selectEditor);
  return (
    <div className={css.header}>
      <div className={css.logo}>
        <span>Card Maker</span>
      </div>
      <HeaderButton
        onClick={loadFromFile}
        className={"button__main"}
        text="Open File"
      />

      <HeaderButton
        onClick={saveToFile}
        className={"button__main"}
        text="Save File"
      />

      <HeaderButton
        onClick={resetModelHandler}
        className={"button__main"}
        text="Clear Editor" //Очистить редактор
      />

      <HeaderButton
        onClick={() => alert("Add Text clicked")}
        className={"button__main"}
        text="Add Text"
      />

      <HeaderButton
        onClick={() => alert("Add Img clicked")}
        className={"button__main"}
        text="Add Image"
      />

      <HeaderButton
        onClick={() => alert("Add Art clicked")}
        className={"button__main"}
        text="Add ART"
      />

      <HeaderButton
        onClick={() => alert("DeleteObj clicked")}
        className={"button__main"}
        text="Delete Item"
      />

      <HeaderButton
        onClick={() => alert("SaveFile clicked")}
        className={"button__dowload"}
        text="Export to Image"
      />

      <HeaderButton
        onClick={() => alert("SaveFile clicked")}
        className={"button__dowload"}
        text="Export to PDF"
      />
    </div>
  );
}

export default Header;
