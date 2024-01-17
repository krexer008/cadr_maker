import { useSelector } from "react-redux";
import { selectEditor } from "../../redux/selectors";
import ChangeText from "./ChangeText/ChangeText";
import css from "./Toolbar.module.css";
import ChangeArtBlock from "./tools/ChangeArtBlock/ChangeArtBlock";
import ChangeCanvas from "./tools/ChangeCanvas/ChangeCanvas";
import ChangeImage from "./tools/ChangeImage/ChangeImage";

function Toolbar() {
  const editorData = useSelector(selectEditor);

  return (
    <div className={css.toolbar}>
      <ChangeCanvas />
      <ChangeText />
      <ChangeImage />
      <ChangeArtBlock />
    </div>
  );
}
export default Toolbar;
