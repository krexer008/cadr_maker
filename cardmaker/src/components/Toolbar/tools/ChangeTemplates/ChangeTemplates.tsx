import css from "../../../../common/Common.module.css";
import { Template } from "../../../../model/types";
import { useAppSelector } from "../../../../redux/hooks";
import { selectEditor } from "../../../../redux/selectors";
import TemplateView from "./TemplateView/TemplateView";

type ChangeTemplatesProps = {
    templates: Array<Template>;
};

function ChangeTemplates({ templates }: ChangeTemplatesProps) {
    const editorData = useAppSelector(selectEditor);
    const onClick = (selectedIndex: string) => {
        editorData.canvas = templates[parseInt(selectedIndex)].canvas;
    };
    return (
        <div className={css.toolblock}>
            Templates
            {templates.map((template, index) => {
                return (
                    <TemplateView
                        key={index}
                        canvasData={template.canvas}
                        onClick={onClick}
                    />
                );
            })}
        </div>
    );
}
export default ChangeTemplates;
