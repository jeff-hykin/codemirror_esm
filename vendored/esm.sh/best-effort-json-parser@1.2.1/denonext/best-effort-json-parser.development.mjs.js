/* esm.sh - best-effort-json-parser@1.2.1 */
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/best-effort-json-parser/dist/parse.js
var require_parse = __commonJS({
  "node_modules/best-effort-json-parser/dist/parse.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parse = exports.enableErrorLogging = exports.disableErrorLogging = exports.setErrorLogger = void 0;
    var logError = console.error;
    function setErrorLogger2(logger) {
      logError = logger;
    }
    exports.setErrorLogger = setErrorLogger2;
    function disableErrorLogging2() {
      logError = () => {
      };
    }
    exports.disableErrorLogging = disableErrorLogging2;
    function enableErrorLogging2() {
      logError = console.error;
    }
    exports.enableErrorLogging = enableErrorLogging2;
    function parse2(s) {
      if (s === void 0) {
        return void 0;
      }
      if (s === null) {
        return null;
      }
      if (s === "") {
        return "";
      }
      s = s.replace(/\\+$/, (match) => match.length % 2 === 0 ? match : match.slice(0, -1));
      try {
        return JSON.parse(s);
      } catch (e) {
        const [data, reminding] = s.trimLeft()[0] === ":" ? parseAny(s, e) : parseAny(s, e, parseStringWithoutQuote);
        parse2.lastParseReminding = reminding;
        if (parse2.onExtraToken && reminding.length > 0) {
          const trimmedReminding = reminding.trimRight();
          parse2.lastParseReminding = trimmedReminding;
          if (trimmedReminding.length > 0) {
            parse2.onExtraToken(s, data, trimmedReminding);
          }
        }
        return data;
      }
    }
    exports.parse = parse2;
    (function(parse3) {
      parse3.onExtraToken = (text, data, reminding) => {
        logError("parsed json with extra tokens:", {
          text,
          data,
          reminding
        });
      };
    })(parse2 = exports.parse || (exports.parse = {}));
    function parseAny(s, e, fallback) {
      const parser = parsers[s[0]] || fallback;
      if (!parser) {
        logError(`no parser registered for ${JSON.stringify(s[0])}:`, { s });
        throw e;
      }
      return parser(s, e);
    }
    function parseStringCasual(s, e, delimiters) {
      if (s[0] === '"') {
        return parseString(s);
      }
      if (s[0] === "'") {
        return parseSingleQuoteString(s);
      }
      return parseStringWithoutQuote(s, e, delimiters);
    }
    var parsers = {};
    function skipSpace(s) {
      return s.trimLeft();
    }
    parsers[" "] = parseSpace;
    parsers["\r"] = parseSpace;
    parsers["\n"] = parseSpace;
    parsers["	"] = parseSpace;
    function parseSpace(s, e) {
      s = skipSpace(s);
      return parseAny(s, e);
    }
    parsers["["] = parseArray;
    function parseArray(s, e) {
      s = s.substr(1);
      const acc = [];
      s = skipSpace(s);
      for (; s.length > 0; ) {
        if (s[0] === "]") {
          s = s.substr(1);
          break;
        }
        const res = parseAny(s, e, (s2, e2) => parseStringWithoutQuote(s2, e2, [",", "]"]));
        acc.push(res[0]);
        s = res[1];
        s = skipSpace(s);
        if (s[0] === ",") {
          s = s.substring(1);
          s = skipSpace(s);
        }
      }
      return [acc, s];
    }
    for (const c of "0123456789.-".slice()) {
      parsers[c] = parseNumber;
    }
    function parseNumber(s) {
      for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (parsers[c] === parseNumber) {
          continue;
        }
        const num = s.substring(0, i);
        s = s.substring(i);
        return [numToStr(num), s];
      }
      return [numToStr(s), ""];
    }
    function numToStr(s) {
      if (s === "-") {
        return -0;
      }
      const num = +s;
      if (Number.isNaN(num)) {
        return s;
      }
      return num;
    }
    parsers['"'] = parseString;
    function parseString(s) {
      for (let i = 1; i < s.length; i++) {
        const c = s[i];
        if (c === "\\") {
          i++;
          continue;
        }
        if (c === '"') {
          const str = fixEscapedCharacters(s.substring(0, i + 1));
          s = s.substring(i + 1);
          return [JSON.parse(str), s];
        }
      }
      return [JSON.parse(fixEscapedCharacters(s) + '"'), ""];
    }
    function fixEscapedCharacters(s) {
      return s.replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r");
    }
    parsers["'"] = parseSingleQuoteString;
    function parseSingleQuoteString(s) {
      for (let i = 1; i < s.length; i++) {
        const c = s[i];
        if (c === "\\") {
          i++;
          continue;
        }
        if (c === "'") {
          const str = fixEscapedCharacters(s.substring(0, i + 1));
          s = s.substring(i + 1);
          return [JSON.parse('"' + str.slice(1, -1) + '"'), s];
        }
      }
      return [JSON.parse('"' + fixEscapedCharacters(s.slice(1)) + '"'), ""];
    }
    function parseStringWithoutQuote(s, e, delimiters = [" "]) {
      const index = Math.min(...delimiters.map((delimiter) => {
        const index2 = s.indexOf(delimiter);
        return index2 === -1 ? s.length : index2;
      }));
      const value = s.substring(0, index).trim();
      const rest = s.substring(index);
      return [value, rest];
    }
    parsers["{"] = parseObject;
    function parseObject(s, e) {
      s = s.substr(1);
      const acc = {};
      s = skipSpace(s);
      for (; s.length > 0; ) {
        if (s[0] === "}") {
          s = s.substr(1);
          break;
        }
        const keyRes = parseStringCasual(s, e, [":", "}"]);
        const key = keyRes[0];
        s = keyRes[1];
        s = skipSpace(s);
        if (s[0] !== ":") {
          acc[key] = void 0;
          break;
        }
        s = s.substr(1);
        s = skipSpace(s);
        if (s.length === 0) {
          acc[key] = void 0;
          break;
        }
        const valueRes = parseAny(s, e);
        acc[key] = valueRes[0];
        s = valueRes[1];
        s = skipSpace(s);
        if (s[0] === ",") {
          s = s.substr(1);
          s = skipSpace(s);
        }
      }
      return [acc, s];
    }
    parsers["t"] = parseTrue;
    function parseTrue(s, e) {
      return parseToken(s, `true`, true, e);
    }
    parsers["f"] = parseFalse;
    function parseFalse(s, e) {
      return parseToken(s, `false`, false, e);
    }
    parsers["n"] = parseNull;
    function parseNull(s, e) {
      return parseToken(s, `null`, null, e);
    }
    function parseToken(s, tokenStr, tokenVal, e) {
      for (let i = tokenStr.length; i >= 1; i--) {
        if (s.startsWith(tokenStr.slice(0, i))) {
          return [tokenVal, s.slice(i)];
        }
      }
      {
        const prefix = JSON.stringify(s.slice(0, tokenStr.length));
        logError(`unknown token starting with ${prefix}:`, { s });
        throw e;
      }
    }
  }
});

// endpoint.js
var cjsm = __toESM(require_parse());
var { __esModule, parse, enableErrorLogging, disableErrorLogging, setErrorLogger } = cjsm;
var endpoint_default = cjsm.default ?? cjsm;
export {
  __esModule,
  endpoint_default as default,
  disableErrorLogging,
  enableErrorLogging,
  parse,
  setErrorLogger
};
//# sourceMappingURL=best-effort-json-parser.development.mjs.map