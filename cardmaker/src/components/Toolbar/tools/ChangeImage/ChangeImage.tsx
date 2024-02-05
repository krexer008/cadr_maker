import css from "../../../../common/Common.module.css";
import { useSelector } from "react-redux";
import { selectEditor } from "../../../../redux/selectors";
import { createSaveCanvasAction } from "../../../../redux/actionCreators";

function ChangeImage() {
    const editorData = useSelector(selectEditor);

    let ind: number;
    let link = "";
    let value = "";

    const saveImageToElement = (image: string) => {
        const updateCanvas = editorData.canvas;
        if (updateCanvas.active === updateCanvas.id) {
            updateCanvas.bgImage.source = image;
        } else {
            editorData.canvas.blocks.map((block, index) => {
                if (block.id === updateCanvas.active && "image" in block) {
                    ind = index;
                    return (block.image.source = image);
                }
            });
        }
        createSaveCanvasAction(updateCanvas);
    };

    const handleLinkChange = (url: string) => {
        link = url;
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
        } else {
            console.log("enter URL");
        }
        value = "";
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
