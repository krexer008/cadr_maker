enum ArtName {
    Arrow,
    Circle,
    Line,
    Quote,
    Rectangle,
}

enum BlockType {
    Art,
    Image,
    Text,
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
    textDecoration: "underline" | "none",
};

// Object type

type Block = {
    id: string,
    size: Size,
    position: Position,
};

type TextBlockType = Block & {
    type: BlockType.Text,
    value: string,
    textStyle: TextStyle,
    color: ColorType,
};

type ImageBlockType = Block & {
    type: BlockType.Image,
    image: ImageType,
    color: ColorType,
};

type ArtBlockType = Block & {
    type: BlockType.Art,
    artName: ArtName,
    background: ColorType,
    borderColor: ColorType,
};

type CanvasType = {
    id: string,
    type: BlockType.Canvas,
    size: Size,
    filtr: ColorType,
    backgroundImage: ImageType,
    backgroundColor: ColorType,
};

type Template = {
    id: string,
    //activeOdject: string,
    canvas: CanvasType,
    objects: Array<TextBlockType | ImageBlockType | ArtBlockType>,
};

type EditorType = {
    selectId: string,
    template: Array<Template>,
};

export type {
    TextBlockType,
    ImageBlockType,
    ArtBlockType,
    Template,
    CanvasType,
    EditorType,
    ColorType,
    Size,
    Position,
    ImageType,
};

export { ArtName, BlockType };
