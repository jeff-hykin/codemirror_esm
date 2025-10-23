/* esm.sh - @langchain/codemirror-json-schema@0.7.9/dist/features/validation */
// node_modules/@langchain/codemirror-json-schema/dist/features/validation.js
import { Draft04 } from "../../../../../json-schema-library@^9.3.5.js";
import { getJSONSchema, schemaStateField } from "./state.development.mjs.js";
import { joinWithOr } from "./utils/formatting.development.mjs.js";
import { el } from "./utils/dom.development.mjs.js";
import { renderMarkdown } from "./utils/markdown.development.mjs.js";
import { MODES } from "./constants.development.mjs.js";
import { debug } from "./utils/debug.development.mjs.js";
import { getDefaultParser } from "./parsers/index.development.mjs.js";
var getErrorPath = (error) => {
  var _a, _b, _c;
  if (((_a = error === null || error === void 0 ? void 0 : error.data) === null || _a === void 0 ? void 0 : _a.pointer) && ((_b = error === null || error === void 0 ? void 0 : error.data) === null || _b === void 0 ? void 0 : _b.pointer) !== "#") {
    return error.data.pointer.slice(1);
  }
  if ((_c = error === null || error === void 0 ? void 0 : error.data) === null || _c === void 0 ? void 0 : _c.property) {
    return `/${error.data.property}`;
  }
  return "";
};
var handleRefresh = (vu) => {
  return vu.startState.field(schemaStateField) !== vu.state.field(schemaStateField);
};
function jsonSchemaLinter(options) {
  const validation = new JSONValidation(options);
  return (view) => {
    return validation.doValidation(view);
  };
}
var positionalErrors = [
  "NoAdditionalPropertiesError",
  "RequiredPropertyError",
  "InvalidPropertyNameError",
  "ForbiddenPropertyError",
  "UndefinedValueError"
];
var JSONValidation = class {
  constructor(options) {
    var _a, _b, _c, _d;
    this.options = options;
    this.schema = null;
    this.mode = MODES.JSON;
    this.rewriteError = (error) => {
      var _a2, _b2, _c2, _d2, _e;
      const errorData = error === null || error === void 0 ? void 0 : error.data;
      const errors = errorData === null || errorData === void 0 ? void 0 : errorData.errors;
      if (error.code === "one-of-error" && (errors === null || errors === void 0 ? void 0 : errors.length)) {
        return `Expected one of ${joinWithOr(errors, (data) => data.data.expected)}`;
      }
      if (error.code === "type-error") {
        return `Expected \`${((_a2 = error === null || error === void 0 ? void 0 : error.data) === null || _a2 === void 0 ? void 0 : _a2.expected) && Array.isArray((_b2 = error === null || error === void 0 ? void 0 : error.data) === null || _b2 === void 0 ? void 0 : _b2.expected) ? joinWithOr((_c2 = error === null || error === void 0 ? void 0 : error.data) === null || _c2 === void 0 ? void 0 : _c2.expected) : (_d2 = error === null || error === void 0 ? void 0 : error.data) === null || _d2 === void 0 ? void 0 : _d2.expected}\` but received \`${(_e = error === null || error === void 0 ? void 0 : error.data) === null || _e === void 0 ? void 0 : _e.received}\``;
      }
      const message = error.message.replaceAll("in `#` ", "").replaceAll("at `#`", "").replaceAll("/", ".").replaceAll("#.", "");
      return message;
    };
    this.mode = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.mode) !== null && _b !== void 0 ? _b : MODES.JSON;
    this.parser = (_d = (_c = this.options) === null || _c === void 0 ? void 0 : _c.jsonParser) !== null && _d !== void 0 ? _d : getDefaultParser(this.mode);
  }
  get schemaTitle() {
    var _a, _b, _c;
    return (_c = (_b = (_a = this.schema) === null || _a === void 0 ? void 0 : _a.getSchema()) === null || _b === void 0 ? void 0 : _b.title) !== null && _c !== void 0 ? _c : "json-schema";
  }
  // validate using view as the linter extension signature requires
  doValidation(view) {
    const schema = getJSONSchema(view.state);
    if (!schema) {
      return [];
    }
    this.schema = new Draft04(schema);
    if (!this.schema)
      return [];
    const text = view.state.doc.toString();
    if (!(text === null || text === void 0 ? void 0 : text.length))
      return [];
    const json = this.parser(view.state);
    let errors = [];
    try {
      errors = this.schema.validate(json.data);
    } catch (_a) {
    }
    debug.log("xxx", "validation errors", errors, json.data);
    if (!errors.length)
      return [];
    return errors.reduce((acc, error) => {
      const pushRoot = () => {
        const errorString = this.rewriteError(error);
        acc.push({
          from: 0,
          to: 0,
          message: errorString,
          severity: "error",
          source: this.schemaTitle,
          renderMessage: () => {
            const dom = el("div", {});
            dom.innerHTML = renderMarkdown(errorString);
            return dom;
          }
        });
      };
      const errorPath = getErrorPath(error);
      const pointer = json.pointers.get(errorPath);
      if (error.name === "MaxPropertiesError" || error.name === "MinPropertiesError") {
        pushRoot();
      } else if (pointer) {
        const isKeyError = positionalErrors.includes(error.name);
        const errorString = this.rewriteError(error);
        const from = isKeyError ? pointer.keyFrom : pointer.valueFrom;
        const to = isKeyError ? pointer.keyTo : pointer.valueTo;
        if (to !== void 0 && from !== void 0) {
          acc.push({
            from,
            to,
            message: errorString,
            renderMessage: () => {
              const dom = el("div", {});
              dom.innerHTML = renderMarkdown(errorString);
              return dom;
            },
            severity: "error",
            source: this.schemaTitle
          });
        }
      } else {
        pushRoot();
      }
      return acc;
    }, []);
  }
};
export {
  JSONValidation,
  handleRefresh,
  jsonSchemaLinter
};
//# sourceMappingURL=validation.development.mjs.map