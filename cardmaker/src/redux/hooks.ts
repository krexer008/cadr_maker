import { RootState } from "./reducer";
import {
    useDispatch,
    useSelector,
    type TypedUseSelectorHook,
} from "react-redux";
import { bindActionCreators } from "redux";
import * as EditorActionsCreator from "./actionCreators";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const useAppActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(
        {
            ...EditorActionsCreator,
        },
        dispatch
    );
};

export { useAppSelector, useAppActions };
