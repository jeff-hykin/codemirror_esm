import { StreamLanguage } from "./language.js"
import {cmake as _cmake} from "../vendored/esm.sh/@codemirror/legacy-modes/mode/cmake.js"
export const cmake = StreamLanguage.define(_cmake)