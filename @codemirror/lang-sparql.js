import { StreamLanguage } from "./language.js"
import {sparql as _sparql} from "../vendored/esm.sh/@codemirror/legacy-modes/mode/sparql.js"
export const sparql = StreamLanguage.define(_sparql)