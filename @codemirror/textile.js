import { StreamLanguage } from "./language.js"
import {textile as _textile} from "../vendored/esm.sh/@codemirror/legacy-modes/mode/textile.js"
export const textile = StreamLanguage.define(_textile)