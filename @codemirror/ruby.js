import { StreamLanguage } from "./language.js"
import {ruby as _ruby} from "../vendored/esm.sh/@codemirror/legacy-modes/mode/ruby.js"
export const ruby = StreamLanguage.define(_ruby)