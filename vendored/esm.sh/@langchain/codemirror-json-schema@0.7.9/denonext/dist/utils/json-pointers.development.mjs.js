/* esm.sh - @langchain/codemirror-json-schema@0.7.9/dist/utils/json-pointers */
// node_modules/@langchain/codemirror-json-schema/dist/utils/json-pointers.js
import { syntaxTree } from "../../../../../@codemirror/language@^6.10.2.js";
import { JSON5_TOKENS_MAPPING, MODES, TOKENS, YAML_TOKENS_MAPPING } from "./constants.development.mjs.js";
import { findNodeIndexInArrayNode, getMatchingChildNode, getWord, isValueNode } from "./node.development.mjs.js";
var resolveTokenName = (nodeName, mode) => {
  var _a, _b;
  switch (mode) {
    case MODES.YAML:
      return (_a = YAML_TOKENS_MAPPING[nodeName]) !== null && _a !== void 0 ? _a : nodeName;
    case MODES.JSON5:
      return (_b = JSON5_TOKENS_MAPPING[nodeName]) !== null && _b !== void 0 ? _b : nodeName;
    default:
      return nodeName;
  }
};
function getJsonPointerAt(docText, node, mode) {
  const path = [];
  for (let n = node; n === null || n === void 0 ? void 0 : n.parent; n = n.parent) {
    switch (resolveTokenName(n.parent.name, mode)) {
      case TOKENS.PROPERTY: {
        const name = getMatchingChildNode(n.parent, TOKENS.PROPERTY_NAME, mode);
        if (name) {
          path.unshift(getWord(docText, name).replace(/[/~]/g, (v) => v === "~" ? "~0" : "~1"));
        }
        break;
      }
      case TOKENS.ARRAY: {
        if (isValueNode(n, mode)) {
          const index = findNodeIndexInArrayNode(n.parent, n, mode);
          path.unshift(`${index}`);
        }
        break;
      }
    }
  }
  path.unshift("");
  return path.join("/");
}
var jsonPointerForPosition = (state, pos, side = -1, mode) => {
  return getJsonPointerAt(state.doc, syntaxTree(state).resolve(pos, side), mode);
};
var getJsonPointers = (state, mode) => {
  const tree = syntaxTree(state);
  const pointers = /* @__PURE__ */ new Map();
  tree.iterate({
    enter: (type) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      if ([TOKENS.PROPERTY_NAME, TOKENS.OBJECT].includes(resolveTokenName(type.name, mode))) {
        const pointer = getJsonPointerAt(state.doc, type.node, mode);
        const { from: keyFrom, to: keyTo } = type.node;
        if (!((_b = (_a = type.node) === null || _a === void 0 ? void 0 : _a.nextSibling) === null || _b === void 0 ? void 0 : _b.node)) {
          pointers.set(pointer, { keyFrom, keyTo });
          return true;
        }
        const nextNode = mode === MODES.JSON ? (_d = (_c = type.node) === null || _c === void 0 ? void 0 : _c.nextSibling) === null || _d === void 0 ? void 0 : _d.node : (_h = (_g = (_f = (_e = type.node) === null || _e === void 0 ? void 0 : _e.nextSibling) === null || _f === void 0 ? void 0 : _f.node) === null || _g === void 0 ? void 0 : _g.nextSibling) === null || _h === void 0 ? void 0 : _h.node;
        if (!nextNode) {
          pointers.set(pointer, { keyFrom, keyTo });
          return true;
        }
        const { from: valueFrom, to: valueTo } = nextNode;
        pointers.set(pointer, { keyFrom, keyTo, valueFrom, valueTo });
        return true;
      }
    }
  });
  return pointers;
};
export {
  getJsonPointerAt,
  getJsonPointers,
  jsonPointerForPosition,
  resolveTokenName
};
//# sourceMappingURL=json-pointers.development.mjs.map