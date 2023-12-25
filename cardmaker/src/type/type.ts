enum ArtName {
    arrow,
    circle,
    line,
    quote,
    rectangle,
}

enum TypeBlock {
    Art,
    Text,
    Image,
    Canvas,
}
type Position = {
    left: number,
    top: number,
};
type Size = {
    width: number,
    height: number,
};

type ImageType = {
    type: "link" | "base64" | "path" | "",
    data: string,
};

type ColorType = {
    r: number,
    g: number,
    b: number,
    a: number,
};

type TextStyle = {
    fontSize: number,
    fontFamily: string,
    fontWeight: number,
    fontStyle: "normal" | "italic",
    textDecoration: "underline" | "none",// | "blink" | "line-through" | "overline" | "inherit",
};

// Object type

type Block = {
    id: string,
    size: Size,
    position: Position,
};

type TextBlockType = Block & {
    type: TypeBlock.Text,
    value: string,
    textStyle: TextStyle,
    color: ColorType,
    /*
    textPosition: {
        justifyContent: "center" | "start" | "end";
        alignItems: "center" | "start" | "end";
    };
    backgroundImage: ImageType;
    backgroundColor: ColorType;
    */
};

type ImageBlockType = Block & {
    type: TypeBlock.Image,
    image: ImageType,
    color: ColorType,
};

type ArtBlockType = Block & {
    type: TypeBlock.Art,
    artName: ArtName,
    background: ColorType,
    borderColor: ColorType,
    /*
    borderStyle: "solid" | "dotted" | "dashed" | "double";
    borederSize: number,
    */
};

type CanvasType = {
    id: string,
    type: TypeBlock.Canvas,
    size: Size,
    filtr: ColorType,
    backgroundImage: ImageType,
    backgroundColor: ColorType,
};

type Template = {
    id: string,
    canvas: CanvasType,
    objects: Array<TextBlockType | ImageBlockType | ArtBlockType>,
};

type Hystory = {
    command: string,
    time: number,
};

type EditorType = {
    canvas: CanvasType,
    selectObject: Array<string>,
    hystory: Array<Hystory>,
    template: Array<Template>,
};

export type {
    TextBlockType,
    ImageBlockType,
    ArtBlockType,
    Template,
    CanvasType,
    Hystory,
    EditorType,
    ColorType,
    Size,
    Position,
    ImageType,
};

export { ArtName, TypeBlock };
