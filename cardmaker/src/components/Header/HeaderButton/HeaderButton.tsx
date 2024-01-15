import React from "react";

type headerButtonProps = {
    handler: () => void; // func
    icon: string; // source
    alt: string; // button name
};

function HeaderButton({ handler, icon, alt }: headerButtonProps) {
    return (
        <button onClick={handler}>
            <img src={icon} alt={alt} />
        </button>
    );
}
export default HeaderButton;
