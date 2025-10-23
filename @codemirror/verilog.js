import { StreamLanguage } from "./language.js"
import {tlv as _tlv, verilog as _verilog} from "../vendored/esm.sh/@codemirror/legacy-modes/mode/verilog.js"
export const tlv = StreamLanguage.define(_tlv)
export const verilog = StreamLanguage.define(_verilog)