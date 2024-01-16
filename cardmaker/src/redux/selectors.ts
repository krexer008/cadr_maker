import { Editor } from "../model/types"
import { RootState } from "./reducer"

export const selectEditor = (state:RootState) => state.editor as Editor;
