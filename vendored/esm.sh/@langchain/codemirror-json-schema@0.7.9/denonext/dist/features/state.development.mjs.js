/* esm.sh - @langchain/codemirror-json-schema@0.7.9/dist/features/state */
// node_modules/@langchain/codemirror-json-schema/dist/features/state.js
import { StateEffect, StateField } from "../../../../../@codemirror/state@^6.4.1.js";
var schemaEffect = StateEffect.define();
var schemaStateField = StateField.define({
  create() {
  },
  update(schema, tr) {
    for (const e of tr.effects) {
      if (e.is(schemaEffect)) {
        return e.value;
      }
    }
    return schema;
  }
});
var updateSchema = (view, schema) => {
  view.dispatch({
    effects: schemaEffect.of(schema)
  });
};
var getJSONSchema = (state) => {
  return state.field(schemaStateField);
};
var stateExtensions = (schema) => [
  schemaStateField.init(() => schema)
];
export {
  getJSONSchema,
  schemaStateField,
  stateExtensions,
  updateSchema
};
//# sourceMappingURL=state.development.mjs.map