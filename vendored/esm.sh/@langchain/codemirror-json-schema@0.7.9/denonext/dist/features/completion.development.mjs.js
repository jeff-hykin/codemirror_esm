/* esm.sh - @langchain/codemirror-json-schema@0.7.9/dist/features/completion */
// node_modules/@langchain/codemirror-json-schema/dist/features/completion.js
import { snippetCompletion } from "../../../../../@codemirror/autocomplete.js";
import { syntaxTree } from "../../../../../@codemirror/language@^6.10.2.js";
import { debug } from "./utils/debug.development.mjs.js";
import { findNodeIndexInArrayNode, getChildValueNode, getWord, isPropertyNameNode, isPrimitiveValueNode, stripSurroundingQuotes, getNodeAtPosition, getClosestNode, getMatchingChildrenNodes, getMatchingChildNode, getChildrenNodes, surroundingDoubleQuotesToSingle } from "./utils/node.development.mjs.js";
import { getJSONSchema } from "./state.development.mjs.js";
import { Draft07, isJsonError } from "../../../../../json-schema-library@^9.3.5.js";
import { jsonPointerForPosition, resolveTokenName } from "./utils/json-pointers.development.mjs.js";
import { MODES, TOKENS } from "./constants.development.mjs.js";
import { renderMarkdown } from "./utils/markdown.development.mjs.js";
import { getDefaultParser } from "./parsers/index.development.mjs.js";
var CompletionCollector = class {
  constructor() {
    this.completions = /* @__PURE__ */ new Map();
    this.reservedKeys = /* @__PURE__ */ new Set();
  }
  reserve(key) {
    this.reservedKeys.add(key);
  }
  add(completion) {
    if (this.reservedKeys.has(completion.label)) {
      return;
    }
    this.completions.set(completion.label, completion);
  }
};
var JSONCompletion = class {
  constructor(opts) {
    var _a, _b, _c;
    this.opts = opts;
    this.schema = null;
    this.mode = MODES.JSON;
    this.mode = (_a = opts.mode) !== null && _a !== void 0 ? _a : MODES.JSON;
    this.parser = (_c = (_b = this.opts) === null || _b === void 0 ? void 0 : _b.jsonParser) !== null && _c !== void 0 ? _c : getDefaultParser(this.mode);
  }
  doComplete(ctx) {
    var _a, _b, _c;
    const s = getJSONSchema(ctx.state);
    this.schema = (_a = this.expandSchemaProperty(s, s)) !== null && _a !== void 0 ? _a : s;
    if (!this.schema) {
      return [];
    }
    const result = {
      from: ctx.pos,
      to: ctx.pos,
      options: [],
      filter: false
      // will be handled manually
    };
    const text = ctx.state.doc.sliceString(0);
    let node = getNodeAtPosition(ctx.state, ctx.pos);
    let prefix = ctx.state.sliceDoc(node.from, ctx.pos).replace(/^(["'])/, "");
    debug.log("xxx", "node", node, "prefix", prefix, "ctx", ctx);
    if (!(isPrimitiveValueNode(node, this.mode) || isPropertyNameNode(node, this.mode)) && !ctx.explicit) {
      debug.log("xxx", "no completions for non-word/primitive", node);
      return result;
    }
    const currentWord = getWord(ctx.state.doc, node);
    const rawWord = getWord(ctx.state.doc, node, false);
    if (node && (isPrimitiveValueNode(node, this.mode) || isPropertyNameNode(node, this.mode))) {
      result.from = node.from;
      result.to = node.to;
    } else {
      const word = ctx.matchBefore(/[A-Za-z0-9._]*/);
      const overwriteStart = ctx.pos - currentWord.length;
      debug.log("xxx", "overwriteStart after", overwriteStart, "ctx.pos", ctx.pos, "word", word, "currentWord", currentWord, "=>", text[overwriteStart - 1], "..", text[overwriteStart], "..", text);
      result.from = node.name === TOKENS.INVALID ? (_b = word === null || word === void 0 ? void 0 : word.from) !== null && _b !== void 0 ? _b : ctx.pos : overwriteStart;
      result.to = ctx.pos;
    }
    const collector = new CompletionCollector();
    let addValue = true;
    const closestPropertyNameNode = getClosestNode(node, TOKENS.PROPERTY_NAME, this.mode);
    if (closestPropertyNameNode) {
      debug.log("xxx", "closestPropertyNameNode", closestPropertyNameNode, "node", node);
      node = closestPropertyNameNode;
    }
    if (isPropertyNameNode(node, this.mode)) {
      debug.log("xxx", "isPropertyNameNode", node);
      const parent = node.parent;
      if (parent) {
        const valueNode = getChildValueNode(parent, this.mode);
        addValue = !valueNode || valueNode.name === TOKENS.INVALID && valueNode.from - valueNode.to === 0 || // TODO: Verify this doesn't break anything else
        (valueNode.parent ? getChildrenNodes(valueNode.parent).length <= 1 : false);
        debug.log("xxx", "addValue", addValue, getChildValueNode(parent, this.mode), node);
        node = (_c = getClosestNode(parent, TOKENS.OBJECT, this.mode)) !== null && _c !== void 0 ? _c : null;
      }
    }
    debug.log("xxx", node, currentWord, ctx, "node at pos", getNodeAtPosition(ctx.state, ctx.pos));
    if (node && [TOKENS.OBJECT, TOKENS.JSON_TEXT].includes(resolveTokenName(node.name, this.mode)) && (isPropertyNameNode(getNodeAtPosition(ctx.state, ctx.pos), this.mode) || closestPropertyNameNode)) {
      if (node.from === ctx.pos) {
        debug.log("xxx", "no completions for just before opening brace");
        return result;
      }
      this.getPropertyCompletions(this.schema, ctx, node, collector, addValue, rawWord);
    } else {
      const types = {};
      const res = this.getValueCompletions(this.schema, ctx, types, collector);
      debug.log("xxx", "getValueCompletions res", res);
      if (res) {
      }
    }
    result.options = Array.from(collector.completions.values()).filter((v) => stripSurroundingQuotes(v.label).startsWith(prefix));
    debug.log("xxx", "result", result, "prefix", prefix, "collector.completions", collector.completions, "reservedKeys", collector.reservedKeys);
    return result;
  }
  applySnippetCompletion(completion) {
    return snippetCompletion(typeof completion.apply !== "string" ? completion.label : completion.apply, completion);
  }
  getPropertyCompletions(schema, ctx, node, collector, addValue, rawWord) {
    const properties = getMatchingChildrenNodes(node, TOKENS.PROPERTY, this.mode);
    debug.log("xxx", "getPropertyCompletions", node, ctx, properties);
    properties.forEach((p) => {
      const key = getWord(ctx.state.doc, getMatchingChildNode(p, TOKENS.PROPERTY_NAME, this.mode));
      collector.reserve(stripSurroundingQuotes(key));
    });
    const schemas = this.getSchemas(schema, ctx);
    debug.log("xxx", "propertyCompletion schemas", schemas);
    schemas.forEach((s) => {
      if (typeof s !== "object") {
        return;
      }
      const properties2 = s.properties;
      if (properties2) {
        Object.entries(properties2).forEach(([key, value]) => {
          var _a, _b;
          if (typeof value === "object") {
            const description = (_a = value.description) !== null && _a !== void 0 ? _a : "";
            const type = (_b = value.type) !== null && _b !== void 0 ? _b : "";
            const typeStr = Array.isArray(type) ? type.toString() : type;
            const completion = {
              // label is the unquoted key which will be displayed.
              label: key,
              apply: this.getInsertTextForProperty(key, addValue, rawWord, value),
              type: "property",
              detail: typeStr,
              info: renderMarkdown(description)
            };
            collector.add(this.applySnippetCompletion(completion));
          }
        });
      }
      const propertyNames = s.propertyNames;
      if (typeof propertyNames === "object") {
        if (propertyNames.enum) {
          propertyNames.enum.forEach((v) => {
            const label = v === null || v === void 0 ? void 0 : v.toString();
            if (label) {
              const completion = {
                label,
                apply: this.getInsertTextForProperty(label, addValue, rawWord),
                type: "property"
              };
              collector.add(this.applySnippetCompletion(completion));
            }
          });
        }
        if (propertyNames.const) {
          const label = propertyNames.const.toString();
          const completion = {
            label,
            apply: this.getInsertTextForProperty(label, addValue, rawWord),
            type: "property"
          };
          collector.add(this.applySnippetCompletion(completion));
        }
      }
    });
  }
  // apply is the quoted key which will be applied.
  // Normally the label needs to match the token
  // prefix i.e. if the token begins with `"to`, then the
  // label needs to have the quotes as well for it to match.
  // However we are manually filtering the results so we can
  // just use the unquoted key as the label, which is nicer
  // and gives us more control.
  // If no property value is present, then we add the colon as well.
  // Use snippetCompletion to handle insert value + position cursor e.g. "key": "#{}"
  // doc: https://codemirror.net/docs/ref/#autocomplete.snippetCompletion
  // idea: https://discuss.codemirror.net/t/autocomplete-cursor-position-in-apply-function/4088/3
  getInsertTextForProperty(key, addValue, rawWord, propertySchema) {
    propertySchema = propertySchema ? this.expandSchemaProperty(propertySchema, this.schema) : propertySchema;
    let resultText = this.getInsertTextForPropertyName(key, rawWord);
    if (!addValue) {
      return resultText;
    }
    resultText += ": ";
    let value;
    let nValueProposals = 0;
    if (typeof propertySchema === "object") {
      if (typeof propertySchema.default !== "undefined") {
        if (!value) {
          value = this.getInsertTextForGuessedValue(propertySchema.default, "");
        }
        nValueProposals++;
      } else {
        if (propertySchema.enum) {
          if (!value && propertySchema.enum.length === 1) {
            value = this.getInsertTextForGuessedValue(propertySchema.enum[0], "");
          }
          nValueProposals += propertySchema.enum.length;
        }
        if (typeof propertySchema.const !== "undefined") {
          if (!value) {
            value = this.getInsertTextForGuessedValue(propertySchema.const, "");
          }
          nValueProposals++;
        }
        if (Array.isArray(propertySchema.examples) && propertySchema.examples.length) {
          if (!value) {
            value = this.getInsertTextForGuessedValue(propertySchema.examples[0], "");
          }
          nValueProposals += propertySchema.examples.length;
        }
        if (value === void 0 && nValueProposals === 0) {
          let type = Array.isArray(propertySchema.type) ? propertySchema.type[0] : propertySchema.type;
          if (!type) {
            if (propertySchema.properties) {
              type = "object";
            } else if (propertySchema.items) {
              type = "array";
            }
          }
          switch (type) {
            case "boolean":
              value = "#{}";
              break;
            case "string":
              value = this.getInsertTextForString("");
              break;
            case "object":
              switch (this.mode) {
                case MODES.JSON5:
                  value = "{#{}}";
                  break;
                case MODES.YAML:
                  value = "#{}";
                  break;
                default:
                  value = "{#{}}";
                  break;
              }
              break;
            case "array":
              value = "[#{}]";
              break;
            case "number":
            case "integer":
              value = "#{0}";
              break;
            case "null":
              value = "#{null}";
              break;
            default:
              value = "#{}";
              break;
          }
        }
      }
    }
    if (!value || nValueProposals > 1) {
      debug.log("xxx", "value", value, "nValueProposals", nValueProposals, propertySchema);
      value = "#{}";
    }
    return resultText + value;
  }
  getInsertTextForPropertyName(key, rawWord) {
    switch (this.mode) {
      case MODES.JSON5:
      case MODES.YAML: {
        if (rawWord.startsWith('"')) {
          return `"${key}"`;
        }
        if (rawWord.startsWith("'")) {
          return `'${key}'`;
        }
        return key;
      }
      default:
        return `"${key}"`;
    }
  }
  getInsertTextForString(value, prf = "#") {
    switch (this.mode) {
      case MODES.JSON5:
        return `'${prf}{${value}}'`;
      case MODES.YAML:
        return `${prf}{${value}}`;
      default:
        return `"${prf}{${value}}"`;
    }
  }
  // TODO: Is this actually working?
  getInsertTextForGuessedValue(value, separatorAfter = "") {
    switch (typeof value) {
      case "object":
        if (value === null) {
          return "${null}" + separatorAfter;
        }
        return this.getInsertTextForValue(value, separatorAfter);
      case "string": {
        let snippetValue = JSON.stringify(value);
        snippetValue = snippetValue.substr(1, snippetValue.length - 2);
        snippetValue = this.getInsertTextForPlainText(snippetValue);
        return this.getInsertTextForString(snippetValue, "$") + separatorAfter;
      }
      case "number":
      case "boolean":
        return "${" + JSON.stringify(value) + "}" + separatorAfter;
    }
    return this.getInsertTextForValue(value, separatorAfter);
  }
  getInsertTextForPlainText(text) {
    return text.replace(/[\\$}]/g, "\\$&");
  }
  getInsertTextForValue(value, separatorAfter) {
    const text = JSON.stringify(value, null, "	");
    if (text === "{}") {
      return "{#{}}" + separatorAfter;
    } else if (text === "[]") {
      return "[#{}]" + separatorAfter;
    }
    return this.getInsertTextForPlainText(text + separatorAfter);
  }
  getValueCompletions(schema, ctx, types, collector) {
    let node = syntaxTree(ctx.state).resolveInner(ctx.pos, -1);
    let valueNode = null;
    let parentKey = void 0;
    debug.log("xxx", "getValueCompletions", node, ctx);
    if (node && isPrimitiveValueNode(node, this.mode)) {
      valueNode = node;
      node = node.parent;
    }
    if (!node) {
      this.addSchemaValueCompletions(schema, types, collector);
      return;
    }
    if (resolveTokenName(node.name, this.mode) === TOKENS.PROPERTY) {
      const keyNode = getMatchingChildNode(node, TOKENS.PROPERTY_NAME, this.mode);
      if (keyNode) {
        parentKey = getWord(ctx.state.doc, keyNode);
        node = node.parent;
      }
    }
    debug.log("xxx", "node", node, "parentKey", parentKey);
    if (node && (parentKey !== void 0 || resolveTokenName(node.name, this.mode) === TOKENS.ARRAY)) {
      const schemas = this.getSchemas(schema, ctx);
      for (const s of schemas) {
        if (typeof s !== "object") {
          return;
        }
        if (resolveTokenName(node.name, this.mode) === TOKENS.ARRAY && s.items) {
          let c = collector;
          if (s.uniqueItems) {
            c = Object.assign(Object.assign({}, c), {
              add(completion) {
                if (!c.completions.has(completion.label)) {
                  collector.add(completion);
                }
              },
              reserve(key) {
                collector.reserve(key);
              }
            });
          }
          if (Array.isArray(s.items)) {
            let arrayIndex = 0;
            if (valueNode) {
              const foundIdx = findNodeIndexInArrayNode(node, valueNode, this.mode);
              if (foundIdx >= 0) {
                arrayIndex = foundIdx;
              }
            }
            const itemSchema = s.items[arrayIndex];
            if (itemSchema) {
              this.addSchemaValueCompletions(itemSchema, types, c);
            }
          } else {
            this.addSchemaValueCompletions(s.items, types, c);
          }
        }
        if (parentKey !== void 0) {
          let propertyMatched = false;
          if (s.properties) {
            const propertySchema = s.properties[parentKey];
            if (propertySchema) {
              propertyMatched = true;
              this.addSchemaValueCompletions(propertySchema, types, collector);
            }
          }
          if (s.patternProperties && !propertyMatched) {
            for (const pattern of Object.keys(s.patternProperties)) {
              const regex = this.extendedRegExp(pattern);
              if (regex === null || regex === void 0 ? void 0 : regex.test(parentKey)) {
                propertyMatched = true;
                const propertySchema = s.patternProperties[pattern];
                if (propertySchema) {
                  this.addSchemaValueCompletions(propertySchema, types, collector);
                }
              }
            }
          }
          if (s.additionalProperties && !propertyMatched) {
            const propertySchema = s.additionalProperties;
            this.addSchemaValueCompletions(propertySchema, types, collector);
          }
        }
        if (types["boolean"]) {
          this.addBooleanValueCompletion(true, collector);
          this.addBooleanValueCompletion(false, collector);
        }
        if (types["null"]) {
          this.addNullValueCompletion(collector);
        }
      }
    }
    const valuePrefix = valueNode ? getWord(ctx.state.doc, valueNode, true, false) : "";
    return {
      valuePrefix
    };
  }
  addSchemaValueCompletions(schema, types, collector) {
    if (typeof schema === "object") {
      this.addEnumValueCompletions(schema, collector);
      this.addDefaultValueCompletions(schema, collector);
      this.collectTypes(schema, types);
      if (Array.isArray(schema.allOf)) {
        schema.allOf.forEach((s) => this.addSchemaValueCompletions(s, types, collector));
      }
      if (Array.isArray(schema.anyOf)) {
        schema.anyOf.forEach((s) => this.addSchemaValueCompletions(s, types, collector));
      }
      if (Array.isArray(schema.oneOf)) {
        schema.oneOf.forEach((s) => this.addSchemaValueCompletions(s, types, collector));
      }
    }
  }
  addDefaultValueCompletions(schema, collector, arrayDepth = 0) {
    let hasProposals = false;
    if (typeof schema.default !== "undefined") {
      let type = schema.type;
      let value = schema.default;
      for (let i = arrayDepth; i > 0; i--) {
        value = [value];
        type = "array";
      }
      const completionItem = Object.assign(Object.assign({ type: type === null || type === void 0 ? void 0 : type.toString() }, this.getAppliedValue(value)), { detail: "Default value" });
      collector.add(completionItem);
      hasProposals = true;
    }
    if (Array.isArray(schema.examples)) {
      schema.examples.forEach((example) => {
        let type = schema.type;
        let value = example;
        for (let i = arrayDepth; i > 0; i--) {
          value = [value];
          type = "array";
        }
        collector.add(Object.assign({ type: type === null || type === void 0 ? void 0 : type.toString() }, this.getAppliedValue(value)));
        hasProposals = true;
      });
    }
    if (!hasProposals && typeof schema.items === "object" && !Array.isArray(schema.items) && arrayDepth < 5) {
      this.addDefaultValueCompletions(schema.items, collector, arrayDepth + 1);
    }
  }
  addEnumValueCompletions(schema, collector) {
    var _a, _b;
    if (typeof schema.const !== "undefined") {
      collector.add(Object.assign(Object.assign({ type: (_a = schema.type) === null || _a === void 0 ? void 0 : _a.toString() }, this.getAppliedValue(schema.const)), { info: schema.description }));
    }
    if (Array.isArray(schema.enum)) {
      for (let i = 0, length = schema.enum.length; i < length; i++) {
        const enm = schema.enum[i];
        collector.add(Object.assign(Object.assign({ type: (_b = schema.type) === null || _b === void 0 ? void 0 : _b.toString() }, this.getAppliedValue(enm)), { info: schema.description }));
      }
    }
  }
  addBooleanValueCompletion(value, collector) {
    collector.add({
      type: "boolean",
      label: value ? "true" : "false"
    });
  }
  addNullValueCompletion(collector) {
    collector.add({
      type: "null",
      label: "null"
    });
  }
  collectTypes(schema, types) {
    if (Array.isArray(schema.enum) || typeof schema.const !== "undefined") {
      return;
    }
    const type = schema.type;
    if (Array.isArray(type)) {
      type.forEach((t) => types[t] = true);
    } else if (type) {
      types[type] = true;
    }
  }
  getSchemas(schema, ctx) {
    var _a, _b;
    const draft = new Draft07(this.schema);
    let pointer = jsonPointerForPosition(ctx.state, ctx.pos, -1, this.mode);
    const { data } = this.parser(ctx.state);
    let subSchema = draft.getSchema({
      pointer,
      data: data !== null && data !== void 0 ? data : void 0
    });
    debug.log("xxxx", "draft.getSchema", subSchema, "data", data, "pointer", pointer);
    if (isJsonError(subSchema)) {
      subSchema = (_a = subSchema.data) === null || _a === void 0 ? void 0 : _a.schema;
    }
    if (!subSchema || subSchema.name === "UnknownPropertyError" || subSchema.enum || subSchema.type === "undefined" || subSchema.type === "null") {
      pointer = pointer.replace(/\/[^/]*$/, "/");
      subSchema = draft.getSchema({ pointer });
    }
    debug.log("xxx", "pointer..", JSON.stringify(pointer));
    if (!pointer || pointer === "/") {
      subSchema = (_b = this.expandSchemaProperty(schema, schema)) !== null && _b !== void 0 ? _b : schema;
    }
    debug.log("xxx", "subSchema..", subSchema);
    if (!subSchema) {
      return [];
    }
    if (Array.isArray(subSchema.allOf)) {
      return [
        subSchema,
        ...subSchema.allOf.map((s) => this.expandSchemaProperty(s, schema))
      ];
    }
    if (Array.isArray(subSchema.oneOf)) {
      return [
        subSchema,
        ...subSchema.oneOf.map((s) => this.expandSchemaProperty(s, schema))
      ];
    }
    if (Array.isArray(subSchema.anyOf)) {
      return [
        subSchema,
        ...subSchema.anyOf.map((s) => this.expandSchemaProperty(s, schema))
      ];
    }
    return [subSchema];
  }
  expandSchemaProperty(property, schema) {
    if (typeof property === "object" && property.$ref) {
      const refSchema = this.getReferenceSchema(schema, property.$ref);
      if (typeof refSchema === "object") {
        const dereferenced = Object.assign(Object.assign({}, property), refSchema);
        Reflect.deleteProperty(dereferenced, "$ref");
        return dereferenced;
      }
    }
    return property;
  }
  getReferenceSchema(schema, ref) {
    const refPath = ref.split("/");
    let curReference = schema;
    refPath.forEach((cur) => {
      if (!cur) {
        return;
      }
      if (cur === "#") {
        curReference = schema;
        return;
      }
      if (typeof curReference === "object") {
        curReference = curReference[cur];
      }
    });
    return curReference;
  }
  getAppliedValue(value) {
    const stripped = stripSurroundingQuotes(JSON.stringify(value));
    switch (this.mode) {
      case MODES.JSON5:
        return {
          label: stripped,
          apply: surroundingDoubleQuotesToSingle(JSON.stringify(value))
        };
      case MODES.YAML:
        return {
          label: stripped,
          apply: stripped
        };
      default:
        return {
          label: stripped,
          apply: JSON.stringify(value)
        };
    }
  }
  getValueFromLabel(value) {
    return JSON.parse(value);
  }
  extendedRegExp(pattern) {
    let flags = "";
    if (pattern.startsWith("(?i)")) {
      pattern = pattern.substring(4);
      flags = "i";
    }
    try {
      return new RegExp(pattern, flags + "u");
    } catch (e) {
      try {
        return new RegExp(pattern, flags);
      } catch (e2) {
        return void 0;
      }
    }
  }
};
function jsonCompletion(opts = {}) {
  const completion = new JSONCompletion(opts);
  return function jsonDoCompletion(ctx) {
    return completion.doComplete(ctx);
  };
}
export {
  JSONCompletion,
  jsonCompletion
};
//# sourceMappingURL=completion.development.mjs.map