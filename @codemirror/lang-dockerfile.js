import { StreamLanguage } from "./language.js"
import {dockerFile as _dockerFile} from "../vendored/esm.sh/@codemirror/legacy-modes/mode/dockerfile.js"
export const dockerFile = StreamLanguage.define(_dockerFile)