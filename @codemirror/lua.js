import { StreamLanguage } from "./language.js"
import {lua as _lua} from "../vendored/esm.sh/@codemirror/legacy-modes/mode/lua.js"
export const lua = StreamLanguage.define(_lua)