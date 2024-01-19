import { useSelector } from "react-redux";
import { selectEditor } from "../../redux/selectors";
import ChangeText from "./ChangeText/ChangeText";
import css from "./Toolbar.module.css";
import ChangeArtBlock from "./tools/ChangeArtBlock/ChangeArtBlock";
import ChangeCanvas from "./tools/ChangeCanvas/ChangeCanvas";
import ChangeImage from "./tools/ChangeImage/ChangeImage";
import ChanngeTemplates from "./tools/ChanngeTemplates/ChanngeTemplates";

function Toolbar() {
  const editorData = useSelector(selectEditor);
  const { id, active, activeBlock, blocks } = editorData.canvas;

  return (
    <div className={css.toolbar}>
      {active ? (
        <ChangeCanvas />
      ) :
        ((!activeBlock || activeBlock.length == 0)
          ? <ChanngeTemplates />
          : (const result = blocks.find(block => block.id === activeBlock)?.type
      result&& (result === "image") ? <ChangeText />
          : result && (result === "text") ? <ChangeImage />
            : result && (result === "art") ? <ChangeArtBlock /> : "")
      
      );}
    </div>
  );
}
export default Toolbar;
