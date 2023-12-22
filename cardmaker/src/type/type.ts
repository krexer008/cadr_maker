enum ArtName {
    arrow,
    circle,
    line,
    quote,
    rectangle,
}

enum TypeBlock {
    art,
    text,
    image,
    canvas,
}
type Position = {
    xPosition: number;
    yPosition: number;
};
type Size = {
    height: number;
    width: number;
};

type ImageType = {
    type: "link" | "base64" | "path" | "";
    data: string;
};

type ColorType = {
    r: number;
    g: number;
    b: number;
    a: number
};

type TextType = {
    value: string;
    fontSize: number;
    fontFamily: string;
    color: ColorType;
    italic: boolean;
    bold: boolean;
    decoration: boolean;
}

// Object type

type Block = {
    id: string;
    size: Size;
    position: Position;
};

type TextBlockType = Block & {
    textPosition:{
        justifyContent: "center"| "start"|"end";
        alignItems: "center"| "start"|"end";
    };
    type: TypeBlock.text;
    text: Text;
    backgroundImage: ImageType;
    backgroundColor: ColorType;
};

type ImageBlockType = Block & {
    type: TypeBlock.image;
    filtr: ColorType;
};

type ArtBlockType = Block & {
    type: TypeBlock.art;
    artName: ArtName;
    background: ColorType | ImageType;
    borderStyle: "solid" | "dotted" | "dashed" | "double";
    borederSize: number;
    borderColor: ColorType | "";
};

type CanvasType = {
    name: string;
    objects: Array<TextBlockType | ImageBlockType | ArtBlockType>;
    size: Size;
    filtr: ColorType;
    background: ColorType | ImageType;
};

type Hystory = {
    //
};

type Template = {
    id: string;
    canvas: CanvasType;
};

type EditorType = {
    canvas: CanvasType;
    selectObject: Array<string>;
    hystory: Array<Hystory>;
    template: Array<Template>;
};

export type {
    Position,
    Size,
    ImageType,
    ColorType,
    Block,
    TextBlockType,
    ImageBlockType,
    ArtBlockType,
    CanvasType,
    EditorType,
    Template,
    Hystory,
};
