import { ColorType } from "../type/type";

function getRGBA(color: ColorType): string {
    return (
        "rgba(" +
        color.r.toString() +
        color.g.toString() +
        color.b.toString() +
        color.a.toString() +
        ")"
    );
}

export default getRGBA;
