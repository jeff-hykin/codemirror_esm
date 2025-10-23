/* esm.sh - @langchain/codemirror-json-schema@0.7.9 */
// node_modules/@langchain/codemirror-json-schema/dist/index.js
import { jsonCompletion as jsonCompletion2, JSONCompletion } from "./dist/features/completion.development.mjs.js";
import { jsonSchemaLinter as jsonSchemaLinter2, JSONValidation, handleRefresh as handleRefresh2 } from "./dist/features/validation.development.mjs.js";
import { jsonSchemaHover as jsonSchemaHover2, JSONHover } from "./dist/features/hover.development.mjs.js";

// node_modules/@langchain/codemirror-json-schema/dist/json/bundled.js
import { json, jsonLanguage, jsonParseLinter } from "../../../@codemirror/lang-json.js";
import { hoverTooltip } from "../../../@codemirror/view@^6.27.0.js";
import { jsonCompletion } from "./dist/features/completion.development.mjs.js";
import { handleRefresh, jsonSchemaLinter } from "./dist/features/validation.development.mjs.js";
import { jsonSchemaHover } from "./dist/features/hover.development.mjs.js";
import { stateExtensions } from "./dist/features/state.development.mjs.js";
import { linter } from "../../../@codemirror/lint@^6.8.0.js";
function jsonSchema(schema) {
  return [
    json(),
    linter(jsonParseLinter()),
    linter(jsonSchemaLinter(), {
      needsRefresh: handleRefresh
    }),
    jsonLanguage.data.of({
      autocomplete: jsonCompletion()
    }),
    hoverTooltip(jsonSchemaHover()),
    stateExtensions(schema)
  ];
}

// node_modules/@langchain/codemirror-json-schema/dist/index.js
export * from "./dist/parsers/json-parser.development.mjs.js";
export * from "./dist/utils/json-pointers.development.mjs.js";
export * from "./dist/features/state.development.mjs.js";
export {
  JSONCompletion,
  JSONHover,
  JSONValidation,
  handleRefresh2 as handleRefresh,
  jsonCompletion2 as jsonCompletion,
  jsonSchema,
  jsonSchemaHover2 as jsonSchemaHover,
  jsonSchemaLinter2 as jsonSchemaLinter
};
//# sourceMappingURL=codemirror-json-schema.development.mjs.map