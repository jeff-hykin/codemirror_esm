/* esm.sh - @langchain/codemirror-json-schema@0.7.9/dist/parsers/json-parser */
// node_modules/@langchain/codemirror-json-schema/dist/parsers/json-parser.js
import { json } from "../../../../../@codemirror/lang-json.js";
import { EditorState } from "../../../../../@codemirror/state@^6.4.1.js";
import { parse } from "../../../../../best-effort-json-parser@^1.1.2.js";
import { MODES } from "./constants.development.mjs.js";
import { getJsonPointers } from "./utils/json-pointers.development.mjs.js";
function parseJSONDocumentState(state) {
  let data = null;
  try {
    data = JSON.parse(state.doc.toString());
  } catch (_a) {
    try {
      data = parse(state.doc.toString());
    } catch (_b) {
    }
  }
  const pointers = getJsonPointers(state, MODES.JSON);
  return { data, pointers };
}
function parseJSONDocument(jsonString) {
  const state = EditorState.create({ doc: jsonString, extensions: [json()] });
  return parseJSONDocumentState(state);
}
export {
  parseJSONDocument,
  parseJSONDocumentState
};
//# sourceMappingURL=json-parser.development.mjs.map