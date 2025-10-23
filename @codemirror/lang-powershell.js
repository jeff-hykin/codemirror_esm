import { StreamLanguage } from "./language.js"
import {powerShell as _powerShell} from "../vendored/esm.sh/@codemirror/legacy-modes/mode/powershell.js"
export const powerShell = StreamLanguage.define(_powerShell)