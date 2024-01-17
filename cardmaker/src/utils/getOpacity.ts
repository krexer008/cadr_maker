import { ColorType } from "../model/types";

function getOpacity(color: ColorType): string {
  return color.a.toString();
}

export default getOpacity;
