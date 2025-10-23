import { StreamLanguage } from "./language.js"
import {shell as _shell} from "../vendored/esm.sh/@codemirror/legacy-modes/mode/shell.js"
export const shell = StreamLanguage.define(_shell)