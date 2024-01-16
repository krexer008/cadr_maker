import { combineReducers } from "redux";
import { editorReducer } from "./editorReducer";

const rootReducer = combineReducers({ editor: editorReducer });

export type RootState = ReturnType<typeof rootReducer>;
export { rootReducer };
