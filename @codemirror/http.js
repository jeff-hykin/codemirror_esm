import { StreamLanguage } from "./language.js"
import {http as _http} from "../vendored/esm.sh/@codemirror/legacy-modes/mode/http.js"
export const http = StreamLanguage.define(_http)