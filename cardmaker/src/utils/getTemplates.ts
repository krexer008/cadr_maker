import { Template } from "../model/types";

function getTemplates(templates: any): Array<Template> {
    const arr = templates.template.map((value: Template) => ({
        id: value.canvas.id,
        canvas: value.canvas,
    }));

    return arr;
}

export { getTemplates };
