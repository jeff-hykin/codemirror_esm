import { StreamLanguage } from "./language.js"
import {mathematica as _mathematica} from "../vendored/esm.sh/@codemirror/legacy-modes/mode/mathematica.js"
export const mathematica = StreamLanguage.define(_mathematica)