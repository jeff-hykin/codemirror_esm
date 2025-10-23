import { StreamLanguage } from "./language.js"
import {haskell as _haskell} from "../vendored/esm.sh/@codemirror/legacy-modes/mode/haskell.js"
export const haskell = StreamLanguage.define(_haskell)