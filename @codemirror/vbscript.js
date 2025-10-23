import { StreamLanguage } from "./language.js"
import {vbScript as _vbScript, vbScriptASP as _vbScriptASP} from "../vendored/esm.sh/@codemirror/legacy-modes/mode/vbscript.js"
export const vbScript = StreamLanguage.define(_vbScript)
export const vbScriptASP = StreamLanguage.define(_vbScriptASP)