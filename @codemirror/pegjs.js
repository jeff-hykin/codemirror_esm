import { StreamLanguage } from "./language.js"
import {pegjs as _pegjs} from "../vendored/esm.sh/@codemirror/legacy-modes/mode/pegjs.js"
export const pegjs = StreamLanguage.define(_pegjs)