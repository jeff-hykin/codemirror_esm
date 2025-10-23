import { StreamLanguage } from "./language.js"
import {nginx as _nginx} from "../vendored/esm.sh/@codemirror/legacy-modes/mode/nginx.js"
export const nginx = StreamLanguage.define(_nginx)