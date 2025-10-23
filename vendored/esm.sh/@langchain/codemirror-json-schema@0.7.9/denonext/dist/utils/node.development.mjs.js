/* esm.sh - @langchain/codemirror-json-schema@0.7.9/dist/utils/node */
// node_modules/@langchain/codemirror-json-schema/dist/utils/node.js
import { COMPLEX_TYPES, TOKENS, PRIMITIVE_TYPES, MODES } from "./constants.development.mjs.js";
import { syntaxTree } from "../../../../../@codemirror/language@^6.10.2.js";
import { resolveTokenName } from "./json-pointers.development.mjs.js";
var getNodeAtPosition = (state, pos, side = -1) => {
  return syntaxTree(state).resolveInner(pos, side);
};
var stripSurroundingQuotes = (str) => {
  return str.replace(/^"(.*)"$/, "$1").replace(/^'(.*)'$/, "$1");
};
var surroundingDoubleQuotesToSingle = (str) => {
  return str.replace(/^"(.*)"$/, "'$1'");
};
var getWord = (doc, node, stripQuotes = true, onlyEvenQuotes = true) => {
  const word = node ? doc.sliceString(node.from, node.to) : "";
  if (!stripQuotes) {
    return word;
  }
  if (onlyEvenQuotes) {
    return stripSurroundingQuotes(word);
  }
  return word.replace(/(^["'])|(["']$)/g, "");
};
var isInvalidValueNode = (node, mode) => {
  var _a, _b, _c, _d;
  return resolveTokenName(node.name, mode) === TOKENS.INVALID && (resolveTokenName((_b = (_a = node.prevSibling) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : "", mode) === TOKENS.PROPERTY_NAME || resolveTokenName((_d = (_c = node.prevSibling) === null || _c === void 0 ? void 0 : _c.name) !== null && _d !== void 0 ? _d : "", mode) === TOKENS.PROPERTY_COLON);
};
var isPrimitiveValueNode = (node, mode) => {
  return PRIMITIVE_TYPES.includes(resolveTokenName(node.name, mode)) || isInvalidValueNode(node, mode);
};
var isValueNode = (node, mode) => {
  return [...PRIMITIVE_TYPES, ...COMPLEX_TYPES].includes(resolveTokenName(node.name, mode)) || isInvalidValueNode(node, mode);
};
var isPropertyNameNode = (node, mode) => {
  var _a, _b, _c, _d, _e, _f;
  return resolveTokenName(node.name, mode) === TOKENS.PROPERTY_NAME || resolveTokenName(node.name, mode) === TOKENS.INVALID && (resolveTokenName((_b = (_a = node.prevSibling) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : "", mode) === TOKENS.PROPERTY || resolveTokenName((_d = (_c = node.prevSibling) === null || _c === void 0 ? void 0 : _c.name) !== null && _d !== void 0 ? _d : "", mode) === "{") || // TODO: Can we make this work without checking for the mode?
  mode === MODES.YAML && resolveTokenName((_f = (_e = node.parent) === null || _e === void 0 ? void 0 : _e.name) !== null && _f !== void 0 ? _f : "", mode) === TOKENS.OBJECT;
};
var getChildrenNodes = (node) => {
  const children = [];
  let child = node.firstChild;
  while (child) {
    if (child) {
      children.push(child);
    }
    child = child === null || child === void 0 ? void 0 : child.nextSibling;
  }
  return children;
};
var getMatchingChildrenNodes = (node, nodeName, mode) => {
  return getChildrenNodes(node).filter((n) => resolveTokenName(n.name, mode) === nodeName);
};
var getMatchingChildNode = (node, nodeName, mode) => {
  var _a;
  return (_a = getChildrenNodes(node).find((n) => resolveTokenName(n.name, mode) === nodeName)) !== null && _a !== void 0 ? _a : null;
};
var getChildValueNode = (node, mode) => {
  return getChildrenNodes(node).find((n) => isPrimitiveValueNode(n, mode));
};
var getArrayNodeChildren = (node, mode) => {
  return getChildrenNodes(node).filter((n) => PRIMITIVE_TYPES.includes(resolveTokenName(n.name, mode)) || COMPLEX_TYPES.includes(resolveTokenName(n.name, mode)));
};
var findNodeIndexInArrayNode = (arrayNode, valueNode, mode) => {
  return getArrayNodeChildren(arrayNode, mode).findIndex((nd) => nd.from === valueNode.from && nd.to === valueNode.to);
};
var getClosestNode = (node, nodeName, mode, depth = Infinity) => {
  let n = node;
  while (n && depth > 0) {
    if (resolveTokenName(n.name, mode) === nodeName) {
      return n;
    }
    n = n.parent;
    depth--;
  }
  return null;
};
export {
  findNodeIndexInArrayNode,
  getChildValueNode,
  getChildrenNodes,
  getClosestNode,
  getMatchingChildNode,
  getMatchingChildrenNodes,
  getNodeAtPosition,
  getWord,
  isInvalidValueNode,
  isPrimitiveValueNode,
  isPropertyNameNode,
  isValueNode,
  stripSurroundingQuotes,
  surroundingDoubleQuotesToSingle
};
//# sourceMappingURL=node.development.mjs.map