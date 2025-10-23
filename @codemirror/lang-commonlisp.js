import { StreamLanguage } from "./language.js"
import {commonLisp as _commonLisp} from "../vendored/esm.sh/@codemirror/legacy-modes/mode/commonlisp.js"
export const commonLisp = StreamLanguage.define(_commonLisp)