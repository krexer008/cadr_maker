import { ColorType } from "../model/types";

function getRGB(color: ColorType): string {
  return (
    "rgba(" +
    color.r.toString() +
    "," +
    color.g.toString() +
    "," +
    color.b.toString() +
    ")"
  );
}

export default getRGB;
