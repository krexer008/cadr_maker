import {
    ArtBlockType,
    ArtValue,
    Canvas,
    Editor,
    ImageBlockType,
    TextBlockType,
} from "./../model/types";

function generateRandomID() {
    return "id" + Math.random().toString(16).slice(2);
}

function getNewCanvas(): Canvas {
    const id = generateRandomID();
    return {
        id: id,
        active: id,
        type: "canvas",
        size: {
            width: 1000,
            height: 600,
        },
        filter: "",
        bgColor: "#ffffff",
        bgImage: {
            source: "",
        },
        blocks: [],
    };
}

function getNewText(): TextBlockType {
    const id = generateRandomID();
    return {
        id: id,
        type: "text",
        size: {
            width: 100,
            height: 32,
        },
        position: {
            left: 100,
            top: 100,
        },
        value: "New Text",
        fontSize: 16,
        fontFamily: "san-serif",
        color: "#000000",
        bold: false,
        cursive: false,
        underline: false,
        transform: {
            type: "scale",
            value: 1,
        },
    };
}

function getNewImage(): ImageBlockType {
    const id = generateRandomID();
    return {
        id: id,
        type: "image",
        size: {
            width: 100,
            height: 100,
        },
        position: {
            left: 50,
            top: 50,
        },
        image: {
            source: "",
        },
        transform: {
            type: "scale",
            value: 1,
        },
    };
}

function getNewArt(): ArtBlockType {
    const id = generateRandomID();
    return {
        id: id,
        type: "art",
        size: {
            width: 100,
            height: 100,
        },
        position: {
            left: 50,
            top: 50,
        },
        value: ArtValue.ThugLife,
        bgColor: "",
        borderColor: "#000000",
        transform: {
            type: "scale",
            value: 1,
        },
    };
}

function getEditorModel(): Editor {
    return {
        canvas: getNewCanvas(),
        templates: [],
    };
}

export { getEditorModel, getNewCanvas, getNewText, getNewImage, getNewArt };
