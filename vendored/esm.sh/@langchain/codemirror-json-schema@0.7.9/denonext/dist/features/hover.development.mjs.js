/* esm.sh - @langchain/codemirror-json-schema@0.7.9/dist/features/hover */
// node_modules/@langchain/codemirror-json-schema/dist/features/hover.js
import { Draft04, isJsonError } from "../../../../../json-schema-library@^9.3.5.js";
import { jsonPointerForPosition } from "./utils/json-pointers.development.mjs.js";
import { joinWithOr } from "./utils/formatting.development.mjs.js";
import { debug } from "./utils/debug.development.mjs.js";
import { el } from "./utils/dom.development.mjs.js";
import { getJSONSchema } from "./state.development.mjs.js";
import { MODES } from "./constants.development.mjs.js";
import { renderMarkdown } from "./utils/markdown.development.mjs.js";
function jsonSchemaHover(options) {
  const hover = new JSONHover(options);
  return async function jsonDoHover(view, pos, side) {
    return hover.doHover(view, pos, side);
  };
}
function formatType(data) {
  if (data.type) {
    if (data.$ref) {
      return `${data.$ref} (${data.type})`;
    }
    return data.type;
  }
  if (data.$ref) {
    return `${data.$ref}`;
  }
}
function formatComplexType(schema, complexType, draft) {
  return `${complexType}: ${joinWithOr(schema[complexType].map((s) => {
    try {
      const { data } = draft.resolveRef({ data: s, pointer: s.$ref });
      if (data) {
        return formatType(data);
      }
      return formatType(s);
    } catch (err) {
      return s.type;
    }
  }))}`;
}
var JSONHover = class {
  constructor(opts) {
    var _a, _b;
    this.opts = opts;
    this.schema = null;
    this.mode = MODES.JSON;
    this.opts = Object.assign({ parser: JSON.parse }, this.opts);
    this.mode = (_b = (_a = this.opts) === null || _a === void 0 ? void 0 : _a.mode) !== null && _b !== void 0 ? _b : MODES.JSON;
  }
  getDataForCursor(view, pos, side) {
    const schema = getJSONSchema(view.state);
    if (!schema) {
      return null;
    }
    this.schema = new Draft04(schema);
    const pointer = jsonPointerForPosition(view.state, pos, side, this.mode);
    let data = void 0;
    try {
      data = this.opts.parser(view.state.doc.toString());
    } catch (_a) {
    }
    if (!pointer) {
      return null;
    }
    let subSchema = this.schema.getSchema({
      pointer,
      data,
      withSchemaWarning: true
    });
    if (isJsonError(subSchema)) {
      if (subSchema === null || subSchema === void 0 ? void 0 : subSchema.data.schema["$ref"]) {
        subSchema = this.schema.resolveRef(subSchema);
      } else {
        subSchema = subSchema === null || subSchema === void 0 ? void 0 : subSchema.data.schema;
      }
    }
    return { schema: subSchema, pointer };
  }
  formatMessage(texts) {
    const { message, typeInfo } = texts;
    if (message) {
      return el("div", { class: "cm6-json-schema-hover" }, [
        el("div", {
          class: "cm6-json-schema-hover--description",
          inner: renderMarkdown(message, false)
        }),
        el("div", { class: "cm6-json-schema-hover--code-wrapper" }, [
          el("div", {
            class: "cm6-json-schema-hover--code",
            inner: renderMarkdown(typeInfo, false)
          })
        ])
      ]);
    }
    return el("div", { class: "cm6-json-schema-hover" }, [
      el("div", { class: "cm6-json-schema-hover--code-wrapper" }, [
        el("code", {
          class: "cm6-json-schema-hover--code",
          inner: renderMarkdown(typeInfo, false)
        })
      ])
    ]);
  }
  getHoverTexts(data, draft) {
    let typeInfo = "";
    let message = null;
    const { schema } = data;
    if (schema.oneOf) {
      typeInfo = formatComplexType(schema, "oneOf", draft);
    }
    if (schema.anyOf) {
      typeInfo = formatComplexType(schema, "anyOf", draft);
    }
    if (schema.allOf) {
      typeInfo = formatComplexType(schema, "allOf", draft);
    }
    if (schema.type) {
      typeInfo = Array.isArray(schema.type) ? joinWithOr(schema.type) : schema.type;
    }
    if (schema.$ref) {
      typeInfo = ` Reference: ${schema.$ref}`;
    }
    if (schema.enum) {
      typeInfo = `\`enum\`: ${joinWithOr(schema.enum)}`;
    }
    if (schema.format) {
      typeInfo += `\`format\`: ${schema.format}`;
    }
    if (schema.pattern) {
      typeInfo += `\`pattern\`: ${schema.pattern}`;
    }
    if (schema.description) {
      message = schema.description;
    }
    return { message, typeInfo };
  }
  // return hover state for the current json schema property
  async doHover(view, pos, side) {
    var _a, _b, _c, _d;
    const start = pos, end = pos;
    try {
      const cursorData = this.getDataForCursor(view, pos, side);
      debug.log("cursorData", cursorData);
      if (!(cursorData === null || cursorData === void 0 ? void 0 : cursorData.schema))
        return null;
      const getHoverTexts = (_b = (_a = this.opts) === null || _a === void 0 ? void 0 : _a.getHoverTexts) !== null && _b !== void 0 ? _b : this.getHoverTexts;
      const hoverTexts = getHoverTexts(cursorData, this.schema);
      const formatter = (_d = (_c = this.opts) === null || _c === void 0 ? void 0 : _c.formatHover) !== null && _d !== void 0 ? _d : this.formatMessage;
      const formattedDom = formatter(hoverTexts);
      return {
        pos: start,
        end,
        arrow: true,
        // to mimic similar modes for other editors
        // otherwise, it gets into a z-index battle with completion/etc
        above: true,
        create: (view2) => {
          return {
            dom: formattedDom
          };
        }
      };
    } catch (err) {
      debug.log(err);
      return null;
    }
  }
};
export {
  JSONHover,
  jsonSchemaHover
};
//# sourceMappingURL=hover.development.mjs.map