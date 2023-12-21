import {
    TextBlockType,
    ImageBlockType,
    ArtBlockType,
    CanvasType,
    EditorType,
    Template,
    Hystory,
} from "../type/type.js";

const textBlockWazzap: TextBlockType = {
    id: "text1",
    size: {
        width: 52,
        height: 16,
    },
    position: {
        xPosition: 20,
        yPosition: 20,
    },
    type: "text",
    value: "Wazzap",
    fontSize: 16,
    fontFamily: "Arial",
    color: { color: "Red" },
    italic: false,
    bold: false,
};

const imageBlockLink: ImageBlockType = {
    id: "img1",
    type: "image",
    filtr: { color: "Red" },
    background: {
        type: "link",
        data: "https://catherineasquithgallery.com/uploads/posts/2021-03/1614587290_31-p-kartinka-telefon-na-belom-fone-33.png",
    },
    size: {
        width: 240,
        height: 160,
    },
    position: {
        xPosition: 100,
        yPosition: 100,
    },
};

const artBlockNote: ArtBlockType = {
    id: "note",
    type: "art",
    data: "",
    size: {
        width: 200,
        height: 50,
    },
    position: {
        xPosition: 300,
        yPosition: 130,
    },
    background: { color: "White" },
    borderStyle: "solid",
    borederSize: 5,
    borderColor: { color: "Red" },
};

const canvas1: CanvasType = {
    name: "canvas",
    objects: [artBlockNote],
    size: {
        width: 80,
        height: 40,
    },
    filtr: { color: "Yellow" },
    background: {
        type: "link",
        data: "'https://catherineasquithgallery.com/uploads/posts/2021-03/1614587290_31-p-kartinka-telefon-na-belom-fone-32.png'",
    },
};

const editor1: EditorType = {
    canvas: canvas1,
    selectObject: ["note"],
    hystory: [],
    template: [],
};

const template1: Template = {
    id: "template1",
    canvas: {
        name: "",
        objects: [],
        size: {
            width: 0,
            height: 0,
        },
        filtr: { color: "" },
        background: {
            type: "link",
            data: "https://cs14.pikabu.ru/images/community/1426/169712059939710739.webp",
        },
    },
};

const hystory1: Hystory = {};

export {
    textBlockWazzap,
    imageBlockLink,
    artBlockNote,
    canvas1,
    editor1,
    template1,
    hystory1,
};
