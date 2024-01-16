import { Canvas, Editor } from "../model/types";

function generateRandomID() {
    return "id" + Math.random().toString(16).slice(2);
}

function getNewCanvas(): Canvas {
    return {
        id: generateRandomID(),
        size: {
            width: 800,
            height: 600,
        },
        filtr: {
            r: 256,
            g: 256,
            b: 256,
            a: 1,
        },
        bgColor: {
            r: 256,
            g: 256,
            b: 256,
            a: 1,
        },
        bgImage: {
            type: "",
            data: "",
        },
        blocks: [],
        activeBlock: "",
    };
}

function getEditorModel(): Editor {
    return {
        canvas: getNewCanvas(),
        templates: [],
    };
}

export { getEditorModel, getNewCanvas };
