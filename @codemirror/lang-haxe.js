import { StreamLanguage } from "./language.js"
import {haxe as _haxe, hxml as _hxml} from "../vendored/esm.sh/@codemirror/legacy-modes/mode/haxe.js"
export const haxe = StreamLanguage.define(_haxe)
export const hxml = StreamLanguage.define(_hxml)