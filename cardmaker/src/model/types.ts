enum ArtValue {
  Arrow,
  Circle,
  Line,
  Quote,
  Rectangle,
}

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
  data: string;
};

type ColorType = {
  r: number;
  g: number;
  b: number;
  a: number;
};

type TextStyle = {
  fontSize: number;
  fontFamily: string;
  fontWeight: "bold" | "normal";
  fontStyle: "normal" | "italic";
  textDecoration: "underline" | "none";
  color: ColorType;
};

// Object type

type Block = {
  id: string;
  size: Size;
  position: Position;
};

type TextBlockType = Block & {
  type: "text";
  value: string;
  textStyle: TextStyle;
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

export { ArtValue };
