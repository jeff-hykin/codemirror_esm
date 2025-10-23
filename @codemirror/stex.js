import { StreamLanguage } from "./language.js"
import {stex as _stex, stexMath as _stexMath} from "../vendored/esm.sh/@codemirror/legacy-modes/mode/stex.js"
export const stex = StreamLanguage.define(_stex)
export const stexMath = StreamLanguage.define(_stexMath)