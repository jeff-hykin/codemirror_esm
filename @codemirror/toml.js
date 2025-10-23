import { StreamLanguage } from "./language.js"
import {toml as _toml} from "../vendored/esm.sh/@codemirror/legacy-modes/mode/toml.js"
export const toml = StreamLanguage.define(_toml)