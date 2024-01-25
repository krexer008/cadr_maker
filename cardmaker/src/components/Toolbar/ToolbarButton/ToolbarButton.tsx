import css from "./ToolbarButton.module.css";

type toolbarButtonProps = {
    handler: (value: boolean) => void; // func
    alt: string; // button name
    isClicked: boolean;
};

function ToolbarButton({ handler, alt, isClicked }: toolbarButtonProps) {
    const classNames = `${css.button} ${
        isClicked ? css.changed : css.unchanged
    }`;

    let buttonType = "";
    switch (alt) {
        case "B":
            buttonType = css.bold;
            break;
        case "I":
            buttonType = css.cursive;
            break;
        default:
            buttonType = css.underline;
            break;
    }

    return (
        <button
            className={classNames}
            onClick={() => {
                isClicked = !isClicked;
                handler(isClicked);
            }}
        >
            <span className={buttonType}>{alt}</span>
        </button>
    );
}
export default ToolbarButton;
