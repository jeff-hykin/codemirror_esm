import { StreamLanguage } from "./language.js"
import {puppet as _puppet} from "../vendored/esm.sh/@codemirror/legacy-modes/mode/puppet.js"
export const puppet = StreamLanguage.define(_puppet)