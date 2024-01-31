import css from "../../../../common/Common.module.css";
import { Template } from "../../../../model/types";
import { useAppActions } from "../../../../redux/hooks";
import TemplateView from "./TemplateView/TemplateView";

type ChangeTemplatesProps = {
    templates: Array<Template>;
};

function ChangeTemplates({ templates }: ChangeTemplatesProps) {
    const { createSaveCanvasAction } = useAppActions();
    const handleChangeTemplate = (selectedIndex: number) => {
        const canvasData = templates[selectedIndex].canvas;
        createSaveCanvasAction(canvasData);
    };
    return (
        <div className={css.toolblock}>
            Templates
            {templates.map((template, index) => {
                return (
                    <TemplateView
                        key={index}
                        canvasData={template.canvas}
                        onSelectTemplate={handleChangeTemplate}
                    />
                );
            })}
        </div>
    );
}
export default ChangeTemplates;
