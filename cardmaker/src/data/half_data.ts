import {
    TextBlock,
    ImageBlock,
    ArtBlock,
    CanvasType,
    EditorType,
    Template,
    Hystory
} from '../type/type.js';

const textBlockHalf: TextBlock = {
    id: '',
    type: 'text',
    value: 'half',
    fontSize: 16,
    fontFamily: 'Arial',
    color: { color: 'Red' },
    italic: false,
    bold: false,
    size: {
        width: 52,
        height: 16
    },
    position: {
        xPosition: 0,
        yPosition: 0
    },
};

const imageBlockLink: ImageBlock = {
    id: 'img1',
    size: {
        width: 240,
        height: 160
    },
    position: {
        xPosition: 100,
        yPosition: 100
    },
    type: 'image',
    filtr: { color: 'Red' },
    background: { type: 'link', data: '' }
};

const artBlockNote: ArtBlock = {
    id: 'note',
    type: 'art',
    data: '',
    size: {
        width: 200,
        height: 50
    },
    position: {
        xPosition: 300,
        yPosition: 130
    },
    background: { color: 'White' },
    borderStyle: 'solid',
    borederSize: 5,
    borderColor: { color: 'Red' }
};

const canvas1: CanvasType = {
    name: 'canvas',
    objects: [artBlockNote],
    size: {
        width: 80,
        height: 40
    },
    filtr: { color: 'Yellow' },
    background: { type: 'link',
    data: '' }
};

const editor1: EditorType = {
    canvas: canvas1,
    selectObject: ['note'],
    hystory: [],
    template: []
};

const template1: Template = {
    id: 'template1',
    canvas: {
        name: '',
        objects: [],
        size: {
            width: 0,
            height: 0
        },
        filtr: { color: '' },
        background: { type: 'link',
        data: '' }
    }
};

const hystory1: Hystory = {

};

export {
    textBlockHalf,
    imageBlockLink,
    artBlockNote,
    canvas1,
    editor1,
    template1,
    hystory1
};
