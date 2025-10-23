import { StreamLanguage } from "./language.js"
import {fortran as _fortran} from "../vendored/esm.sh/@codemirror/legacy-modes/mode/fortran.js"
export const fortran = StreamLanguage.define(_fortran)