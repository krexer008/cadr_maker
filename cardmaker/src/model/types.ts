export enum ArtValue {
    Arrow,
    Chat,
    Circle,
    Clock,
    Flower,
    Gift,
    Heart,
    Square,
    ThugLife,
    ThumbsUp,
}

type Transform = {
    type: "scale";
    value: number;
};

type Position = {
    left: number;
    top: number;
};

type Size = {
    width: number;
    height: number;
};

type ImageType = {
    type: "link" | "base64" | "";
    source: string;
};

type ColorType = string;

// Object type
type Block = {
    id: string;
    size: Size;
    position: Position;
    transform: Transform;
};

type TextBlockType = Block & {
    type: "text";
    value: string;
    fontSize: number;
    fontFamily: string;
    color: ColorType;
    bold: boolean;
    coursive: boolean;
    underline: boolean;
};

type ImageBlockType = Block & {
    type: "image";
    image: ImageType;
};

type ArtBlockType = Block & {
    type: "art";
    value: ArtValue;
    bgColor: ColorType;
    borderColor: ColorType;
};

type ActiveElement = string;

type Canvas = {
    id: string;
    type: "canvas";
    size: Size;
    filter: ColorType;
    bgImage: ImageType;
    bgColor: ColorType;
    blocks: Array<TextBlockType | ImageBlockType | ArtBlockType>;
    active: ActiveElement;
};

type Template = {
    id: string;
    canvas: Canvas;
};

type Editor = {
    canvas: Canvas;
    templates: Array<Template>;
};

export type {
    TextBlockType,
    ImageBlockType,
    ArtBlockType,
    Template,
    Canvas,
    Editor,
    ColorType,
    ImageType,
    Size,
    Position,
    ActiveElement,
};
