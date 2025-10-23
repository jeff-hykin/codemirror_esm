import { StreamLanguage } from "./language.js"
import {go as _go} from "../vendored/esm.sh/@codemirror/legacy-modes/mode/go.js"
export const go = StreamLanguage.define(_go)