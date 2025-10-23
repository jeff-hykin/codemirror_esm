import { StreamLanguage } from "./language.js"
import {gherkin as _gherkin} from "../vendored/esm.sh/@codemirror/legacy-modes/mode/gherkin.js"
export const gherkin = StreamLanguage.define(_gherkin)