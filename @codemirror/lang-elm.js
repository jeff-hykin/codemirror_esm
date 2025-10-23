import { StreamLanguage } from "./language.js"
import {elm as _elm} from "../vendored/esm.sh/@codemirror/legacy-modes/mode/elm.js"
export const elm = StreamLanguage.define(_elm)