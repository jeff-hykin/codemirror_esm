/* esm.sh - @sagold/json-query@6.2.0 */
// node_modules/@sagold/json-query/dist/module/lib/parser/index.js
import EBNF from "../../../ebnf@^1.9.1/dist/Grammars/W3CEBNF.js";

// node_modules/@sagold/json-query/dist/module/lib/parser/jsonQueryGrammar.js
var propertyRegex = "[^?/{}*,()#]+";
var jsonQueryGrammar = `
root ::= ("#" recursion | recursion | (query | pattern) recursion* | "#" SEP? | SEP)
recursion ::= (SEP query | pattern)*

query ::= (ESC escaped ESC | property | all | any | regex) typecheck? lookahead?
property ::= ${propertyRegex}
regex ::= "{" [^}]+ "}"
SEP ::= "/"
all ::= "**"
any ::= "*"

typecheck ::= "?:" ("value" | "boolean" | "string" | "number" | "object" | "array")
lookahead ::= "?" expression ((andExpr | orExpr) expression)*
andExpr ::= S? "&&" S?
orExpr ::= S? "||" S?

expression ::= (exprProperty | ESC escaped ESC) ((isnot | is) (exprProperty | regex | ESC escaped ESC))*
exprProperty ::= [a-zA-Z0-9-_ $]+
escaped ::= [^"]+
is ::= ":"
isnot ::= ":!"
ESC ::= '"'

pattern ::= S? "(" (SEP query | pattern (orPattern? pattern)*)* ")" quantifier? S? lookahead?
quantifier ::= "+" | "*" | [0-9]+
orPattern ::= S? "," S?

S ::= [ ]*
`;

// node_modules/@sagold/json-query/dist/module/lib/parser/index.js
var parser = new EBNF.Parser(jsonQueryGrammar);
var parse = (query2) => parser.getAST(query2);

// node_modules/@sagold/json-query/dist/module/lib/interpreter/keys.js
var VALUE_INDEX = 0;
var PARENT_INDEX = 2;
var POINTER_INDEX = 3;

// node_modules/@sagold/json-query/dist/module/lib/interpreter/nodes.js
var join = (a, b) => `${a}/${b}`;
var toString = Object.prototype.toString;
var rContainer = /Object|Array/;
var isContainer = (v) => rContainer.test(toString.call(v));
var getTypeOf = (v) => toString.call(v).match(/\s([^\]]+)\]/).pop().toLowerCase();
function nodeAsRegex(node) {
  return new RegExp(node.text.replace(/(^{|}$)/g, ""));
}
function forEach(parent, callback) {
  if (Array.isArray(parent)) {
    parent.forEach(callback);
  } else if (Object.prototype.toString.call(parent) === "[object Object]") {
    Object.keys(parent).forEach(function(key) {
      callback(parent[key], key, parent);
    });
  }
}
function getKeys(value) {
  if (Array.isArray(value)) {
    return value.map(function(value2, index) {
      return `${index}`;
    });
  }
  if (Object.prototype.toString.call(value) === "[object Object]") {
    return Object.keys(value);
  }
  return [];
}
var cache = {
  mem: [],
  get(entry, prop) {
    const v = entry[VALUE_INDEX][prop];
    if (cache.mem.includes(v)) {
      return void 0;
    }
    if (isContainer(v)) {
      cache.mem.push(v);
    }
    return [v, prop, entry[VALUE_INDEX], join(entry[POINTER_INDEX], prop)];
  },
  reset() {
    cache.mem.length = 0;
  }
};
var expand = {
  any(node, entry) {
    const value = entry[VALUE_INDEX];
    return getKeys(value).map((prop) => [
      value[prop],
      prop,
      value,
      join(entry[POINTER_INDEX], prop)
    ]);
  },
  all(node, entry) {
    const result = [entry];
    forEach(entry[VALUE_INDEX], (value, prop) => {
      const childEntry = cache.get(entry, prop);
      childEntry && result.push(...expand.all(node, childEntry));
    });
    return result;
  },
  regex(node, entry) {
    const regex = nodeAsRegex(node);
    const value = entry[VALUE_INDEX];
    return getKeys(value).filter((prop) => regex.test(prop)).map((prop) => [
      value[prop],
      prop,
      value,
      join(entry[POINTER_INDEX], prop)
    ]);
  }
};
var select = {
  // alias to property (but escaped)
  escaped: (node, entry) => select.property(node, entry),
  property: (node, entry) => {
    const prop = node.text;
    if (entry[VALUE_INDEX] && entry[VALUE_INDEX][prop] !== void 0) {
      return [
        entry[VALUE_INDEX][prop],
        prop,
        entry[VALUE_INDEX],
        join(entry[POINTER_INDEX], prop)
      ];
    }
  },
  typecheck: (node, entry) => {
    const checkedTyped = node.text.replace(/^\?:/, "");
    if (checkedTyped === "value") {
      return isContainer(entry[VALUE_INDEX]) ? void 0 : entry;
    }
    const type = getTypeOf(entry[VALUE_INDEX]);
    if (type === checkedTyped) {
      return entry;
    }
  },
  lookahead: (node, entry) => {
    let valid = true;
    let or = false;
    node.children.forEach((expr) => {
      if (expr.type === "expression") {
        const isValid = select.expression(expr, entry) !== void 0;
        valid = or === true ? valid || isValid : valid && isValid;
      } else {
        or = expr.type === "orExpr";
      }
    });
    return valid ? entry : void 0;
  },
  expression: (node, entry) => {
    const prop = node.children[0].text;
    const cmp = node.children[1];
    const test = node.children[2];
    const value = entry[VALUE_INDEX];
    if (isContainer(value) === false) {
      return void 0;
    }
    return expressionMatches(value[prop], cmp, test) ? entry : void 0;
  }
};
function expressionMatches(value, cmp, test) {
  if (cmp === void 0) {
    return value !== void 0;
  }
  let valid;
  const valueString = `${value}`;
  if (test.type === "regex") {
    const regex = nodeAsRegex(test);
    valid = regex.test(valueString);
  } else {
    valid = valueString === test.text;
  }
  if (cmp.type === "isnot") {
    valid = valid === false && value !== void 0;
  }
  return valid;
}

// node_modules/@sagold/json-query/dist/module/lib/interpreter/index.js
function collect(func, input, node, pointer) {
  const result = [];
  for (let i = 0, l = input.length; i < l; i += 1) {
    result.push(...func(node, input[i], node, pointer));
  }
  return result;
}
function reduce(func, input, node, pointer) {
  const result = [];
  for (let i = 0, l = input.length; i < l; i += 1) {
    const output = func(node, input[i], pointer);
    if (output) {
      result.push(output);
    }
  }
  return result;
}
function query(data, ast, pointer) {
  let result = data;
  ast.children.forEach((node) => {
    if (expand[node.type]) {
      result = collect(expand[node.type], result, node, pointer);
    } else if (select[node.type]) {
      result = reduce(select[node.type], result, node, pointer);
    } else {
      throw new Error(`Unknown filter ${node.type}`);
    }
  });
  return result;
}
function runPatternOnce(inputSet, ast, pointer) {
  const resultingSet = [];
  let workingSet = inputSet;
  ast.children.forEach((node) => {
    if (node.type === "orPattern") {
      resultingSet.push(...workingSet);
      workingSet = inputSet;
      return;
    }
    workingSet = runNode(workingSet, node, pointer);
  });
  resultingSet.push(...workingSet);
  return resultingSet;
}
function getIterationCount(quantifier) {
  if (quantifier == null) {
    return 1;
  }
  if (quantifier === "*" || quantifier === "+") {
    return Infinity;
  }
  const count = parseInt(quantifier);
  return isNaN(count) ? 1 : count;
}
function pattern(data, ast, pointer) {
  const result = [];
  const quantifier = ast.children.find((node) => node.type === "quantifier");
  const iterationCount = getIterationCount(quantifier && quantifier.text);
  let workingSet = data;
  if (quantifier && quantifier.text === "*") {
    result.push(...workingSet);
  }
  let count = 0;
  while (workingSet.length > 0 && count < iterationCount) {
    workingSet = runPatternOnce(workingSet, ast, pointer);
    result.push(...workingSet);
    count += 1;
  }
  return result;
}
function skip(data, ast, pointer) {
  let result = data;
  ast.children.forEach((n) => result = runNode(result, n, pointer));
  return result;
}
function runNode(data, ast, pointer) {
  let result;
  if (ast.type === "query") {
    result = query(data, ast, pointer);
  } else if (ast.type === "pattern") {
    result = pattern(data, ast, pointer);
  } else {
    result = skip(data, ast, pointer);
  }
  cache.reset();
  cache.mem.push(data);
  return result;
}
function run(data, ast) {
  cache.reset();
  cache.mem.push(data);
  return runNode([[data, null, null, "#"]], ast);
}

// node_modules/@sagold/json-query/dist/module/lib/get.js
var returnTypes = {
  value: (r) => r.map((e) => e[VALUE_INDEX]),
  pointer: (r) => r.map((e) => e[POINTER_INDEX]),
  all: (r) => r,
  map: (r) => {
    const map = {};
    r.forEach((e) => map[e[POINTER_INDEX]] = e[VALUE_INDEX]);
    return map;
  }
};
var ReturnType;
(function(ReturnType2) {
  ReturnType2["POINTER"] = "pointer";
  ReturnType2["VALUE"] = "value";
  ReturnType2["ALL"] = "all";
  ReturnType2["MAP"] = "map";
})(ReturnType || (ReturnType = {}));
get.POINTER = ReturnType.POINTER;
get.VALUE = ReturnType.VALUE;
get.ALL = ReturnType.ALL;
get.MAP = ReturnType.MAP;
function get(data, queryString, returnType = ReturnType.VALUE) {
  if (queryString == null) {
    return [];
  }
  queryString = queryString.replace(/(\/$)/g, "");
  if (queryString === "") {
    queryString = "#";
  }
  const ast = parse(queryString);
  if (ast == null) {
    throw new Error(`empty ast for '${queryString}'`);
  }
  if (ast.rest !== "") {
    throw new Error(`Failed parsing queryString from: '${ast.rest}'`);
  }
  const result = run(data, ast);
  if (typeof returnType === "function") {
    return result.map((r) => returnType(...r));
  } else if (returnTypes[returnType]) {
    return returnTypes[returnType](result);
  }
  return result;
}

// node_modules/@sagold/json-query/dist/module/lib/split.js
var skip2 = ["root", "recursion"];
function buildPath(node, path = []) {
  if (skip2.includes(node.type)) {
    node.children.forEach((n) => buildPath(n, path));
    return path;
  }
  path.push(node.text);
  return path;
}
function split(queryString) {
  if (queryString == null || queryString === "") {
    return [];
  }
  const ast = parse(queryString);
  return buildPath(ast);
}

// node_modules/@sagold/json-query/dist/module/lib/set.js
var cp = (v) => JSON.parse(JSON.stringify(v));
var toString2 = Object.prototype.toString;
var getType = (v) => toString2.call(v).match(/\s([^\]]+)\]/).pop().toLowerCase();
var isProperty = new RegExp(`^("[^"]+"|${propertyRegex})$`);
var ignoreTypes = ["string", "number", "boolean", "null"];
var isArray = /^\[\d*\]$/;
var arrayHasIndex = /^\[(\d+)\]$/;
var isEscaped = /^".+"$/;
var isArrayProp = /(^\[\d*\]$|^\d+$)/;
function convertToIndex(index) {
  return parseInt(index.replace(/^(\[|\]$)/, ""));
}
function removeEscape(property) {
  return isEscaped.test(property) ? property.replace(/(^"|"$)/g, "") : property;
}
function insert(array, index, value) {
  if (array.length <= index) {
    array[index] = value;
  } else {
    array.splice(index, 0, value);
  }
}
function select2(workingSet, query2) {
  const nextSet = [];
  workingSet.forEach((d) => nextSet.push(...get(d[0], query2, ReturnType.ALL)));
  return nextSet;
}
function addToArray(result, index, value, force) {
  const target = result[0];
  if (/^\[\]$/.test(index)) {
    target.push(value);
    const i = target.length - 1;
    return [target[i], i, target, `${result[3]}/${i}}`];
  }
  if (force == null && getType(target[index]) === "object" && getType(value) === "object") {
    Object.assign(target[index], value);
    return [target[index], index, target, `${result[3]}/${index}}`];
  }
  if (force === set.INSERT_ITEMS || force == null && arrayHasIndex.test(index)) {
    const arrayIndex = convertToIndex(index);
    insert(target, arrayIndex, value);
    return [
      target[arrayIndex],
      arrayIndex,
      target,
      `${result[3]}/${arrayIndex}}`
    ];
  }
  if (force === set.REPLACE_ITEMS || force == null) {
    const arrayIndex = convertToIndex(index);
    target[arrayIndex] = value;
    return [
      target[arrayIndex],
      arrayIndex,
      target,
      `${result[3]}/${arrayIndex}}`
    ];
  }
  throw new Error(`Unknown array index '${index}' with force-option '${force}'`);
}
function create(workingSet, query2, keyIsArray, force) {
  query2 = removeEscape(query2);
  return workingSet.filter((o) => {
    if (Array.isArray(o[0]) && isArrayProp.test(query2)) {
      return true;
    }
    return ignoreTypes.includes(getType(o[0][query2])) === false;
  }).map((r) => {
    const container = keyIsArray ? [] : {};
    const o = r[0];
    const containerType = getType(container);
    const itemType = getType(o[query2]);
    if (Array.isArray(o) && itemType !== containerType) {
      return addToArray(r, query2, container, force);
    }
    o[query2] = o[query2] || container;
    return [o[query2], query2, o, `${r[3]}/${query2}`];
  });
}
var InsertMode;
(function(InsertMode2) {
  InsertMode2["REPLACE_ITEMS"] = "replace";
  InsertMode2["INSERT_ITEMS"] = "insert";
})(InsertMode || (InsertMode = {}));
set.REPLACE_ITEMS = InsertMode.REPLACE_ITEMS;
set.INSERT_ITEMS = InsertMode.INSERT_ITEMS;
function set(data, queryString, value, force) {
  if (queryString == null) {
    return cp(data);
  }
  queryString = queryString.replace(/(\/$)/g, "");
  if (queryString === "") {
    return cp(value);
  }
  const result = cp(data);
  let workingSet = [[result, null, null, "#"]];
  const path = split(queryString);
  const property = path.pop();
  const arrayWithoutIndex = isArray.test(property) && arrayHasIndex.test(property) === false;
  if (isProperty.test(property) === false || arrayWithoutIndex) {
    throw new Error(`Unsupported query '${queryString}' ending with non-property`);
  }
  path.forEach((query2, index) => {
    if ("__proto__" === query2 || "prototyped" === query2 || "constructor" === query2) {
      return;
    }
    if (isProperty.test(query2) === false) {
      workingSet = select2(workingSet, query2);
      return;
    }
    const nextKey = index >= path.length - 1 ? property : path[index + 1];
    const insertArray = isArrayProp.test(nextKey);
    workingSet = create(workingSet, query2, insertArray, force);
  });
  workingSet.forEach((r) => {
    let targetValue = value;
    if (getType(value) === "function") {
      targetValue = value(r[3], property, r[0], `${r[3]}/${property}`);
    }
    const d = r[0];
    if (Array.isArray(d)) {
      addToArray(r, property, targetValue, force);
    } else {
      const unescapedProp = removeEscape(property);
      if ("__proto__" === unescapedProp || "prototyped" === unescapedProp || "constructor" === unescapedProp) {
        return;
      }
      d[unescapedProp] = targetValue;
    }
  });
  return result;
}

// node_modules/@sagold/json-query/dist/module/lib/remove.js
import { remove as removePointer, removeUndefinedItems } from "../../json-pointer@^5.1.2.js";
function remove(data, queryString, returnRemoved = false) {
  const removed = [];
  const matches = get(data, queryString, ReturnType.ALL);
  matches.forEach(function(match) {
    removed.push(match[0]);
    removePointer(data, match[POINTER_INDEX], true);
  });
  matches.forEach(function(match) {
    if (Array.isArray(match[PARENT_INDEX])) {
      removeUndefinedItems(match[PARENT_INDEX]);
    }
  });
  return returnRemoved ? removed : data;
}

// node_modules/@sagold/json-query/dist/module/index.js
var index_default = { get, set, split, remove, ReturnType };
export {
  ReturnType,
  index_default as default,
  get,
  remove,
  set,
  split
};
//# sourceMappingURL=json-query.development.mjs.map