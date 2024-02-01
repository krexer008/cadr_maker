import { Template } from "../model/types";

function getTemplates(templates: any): Array<Template> {
    const arr = templates.template.map((value: Template) => ({
        id: value.id,
        canvas: {
            id: value.canvas.id,
            type: "canvas",
            size: value.canvas.size,
            filter: value.canvas.filter,
            bgImage: value.canvas.bgImage,
            blocks: value.canvas.blocks,
            active: "",
            bgColor: value.canvas.bgColor,
        },
    }));

    return arr;
}

export { getTemplates };
