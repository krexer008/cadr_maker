import css from "../../../../common/Common.module.css";
import { useSelector } from "react-redux";
import { selectEditor } from "../../../../redux/selectors";
import { ImageType } from "../../../../model/types";
import { useAppActions } from "../../../../redux/hooks";
import { useState } from "react";

function ChangeImage() {
    const editorData = useSelector(selectEditor);
    const { createChangeImageAction } = useAppActions();
    const [link, setLink] = useState("");
    let value = "";

    const saveImageToElement = (newImage: string) => {
        if (editorData.canvas.active) {
            const newImageElem: ImageType = { source: newImage };
            createChangeImageAction(newImageElem);
        }
    };
    const handleLinkChange = (url: string) => {
        setLink(url);
    };

    function toDataURL(url: string) {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
            const reader = new FileReader();
            reader.onloadend = function () {
                saveImageToElement(
                    reader.result ? reader.result.toString() : ""
                );
            };
            reader.readAsDataURL(xhr.response);
        };
        xhr.open("GET", url);
        xhr.responseType = "blob";
        xhr.send();
    }

    const onClickURL = () => {
        if (link.length) {
            toDataURL(link);
            value = "";
        } else {
            console.log("enter URL");
        }
    };

    const handleFileChange = (e: any) => {
        if (e.target.files.length) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = function () {
                saveImageToElement(
                    reader.result ? reader.result.toString() : ""
                );
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className={css.tool}>
            <div>
                <input
                    id="image-link"
                    type="text"
                    placeholder="Insert URL and press enter"
                    defaultValue={value}
                    onChange={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleLinkChange(e.target.value);
                    }}
                />
                <label htmlFor="image-link" onClick={onClickURL}>
                    Upload by URL
                </label>
                <label htmlFor="image-upload">Upload file</label>
                <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e)}
                />
            </div>
        </div>
    );
}

export default ChangeImage;
