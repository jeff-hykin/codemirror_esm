import { StreamLanguage } from "./language.js"
import {julia as _julia} from "../vendored/esm.sh/@codemirror/legacy-modes/mode/julia.js"
export const julia = StreamLanguage.define(_julia)