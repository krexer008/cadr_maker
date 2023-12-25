import { ColorType } from "../type/type";

function getOpacity(color: ColorType): string {
    return color.a.toString();
}

export default getOpacity;