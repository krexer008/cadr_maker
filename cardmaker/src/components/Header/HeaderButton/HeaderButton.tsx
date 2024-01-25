import css from "./HeaderButton.module.css";

type headerButtonProps = {
    onClick: () => void; // func
    text: string; // button name
    className: string; // className
};

function HeaderButton({ onClick, className, text }: headerButtonProps) {
    const classNames = css[className];
    return (
        <button className={classNames} type="button" onClick={onClick}>
            {text}
        </button>
    );
}
export default HeaderButton;
