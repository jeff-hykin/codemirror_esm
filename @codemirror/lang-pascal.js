import { StreamLanguage } from "./language.js"
import {pascal as _pascal} from "../vendored/esm.sh/@codemirror/legacy-modes/mode/pascal.js"
export const pascal = StreamLanguage.define(_pascal)