// Basic types

type Position = {
  xPosition: number
  yPosition: number
}

type Size = {
  height: number
  width: number
}

type ImageType = {
  type: 'link' | 'base64'
  data: string
}

type ColorType = {
  color: string
}

// Object type

type Block = {
  id: string
  size: Size
  position: Position
}

type TextBlock = Block & {
  type: 'text'
  value: string
  fontSize: number
  fontFamily: string
  color: ColorType
  italic: boolean
  bold: boolean
}

type ImageBlock = Block & {
  type: 'image'
  filtr: ColorType
  background: ImageType
}

type ArtBlock = Block & {
  type: 'art'
  data: string
  background: ColorType | ImageType
  borderStyle: 'solid' | 'dotted' | 'dashed' | 'double'
  borederSize: number
  borderColor: ColorType | ''
}

type CanvasType = {
  name: string
  objects: Array<TextBlock | ImageBlock | ArtBlock>
  size: Size
  filtr: ColorType
  background: ColorType | ImageType
}

type Hystory = {
  //
}

type Template = {
  id: string
  canvas: CanvasType
}

type EditorType = {
  canvas: CanvasType
  selectObject: Array<string>
  hystory: Array<Hystory>
  template: Array<Template>
}

export type {
  Position,
  Size,
  ImageType,
  ColorType,
  Block,
  TextBlock,
  ImageBlock,
  ArtBlock,
  CanvasType,
  EditorType,
  Template,
  Hystory,
}
