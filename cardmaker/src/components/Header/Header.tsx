import React from "react";
import css from "./Header.module.css";
import HeaderButton from "./HeaderButton/HeaderButton";
import openFile from "./icons/openFile.png";
import saveFile from "./icons/saveFile.png";
import addText from "./icons/addText.png";
import addImg from "./icons/addImg.png";
import addArt from "./icons/addArt.png";
import deleteObj from "./icons/deleteObj.png";

function Header() {
    return (
        <div className={css.header}>
            <div className={css.logo}>
                <span>Card Maker</span>
            </div>
            <HeaderButton
                handler={() => alert("OpenFile clicked")}
                icon={openFile}
                alt="open file"
            />

            <HeaderButton
                handler={() => alert("SaveFile clicked")}
                icon={saveFile}
                alt="save file"
            />

            <HeaderButton
                handler={() => alert("AddText clicked")}
                icon={addText}
                alt="Add Text"
            />

            <HeaderButton
                handler={() => alert("Add Img clicked")}
                icon={addImg}
                alt="Add IMG"
            />

            <HeaderButton
                handler={() => alert("Add Art clicked")}
                icon={addArt}
                alt="Add ART"
            />

            <HeaderButton
                handler={() => alert("DeleteObj clicked")}
                icon={deleteObj}
                alt="deleteObj"
            />
        </div>
    );
}

export default Header;
