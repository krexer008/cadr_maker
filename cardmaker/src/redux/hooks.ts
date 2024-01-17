import { RootState } from "./reducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as EditorActionsCreator from "./actionCreators";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const useAppActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    {
      ...EditorActionsCreator,
    },
    dispatch,
  );
};

export { useAppSelector, useAppActions };
