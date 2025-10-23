/* esm.sh - @sagold/json-pointer@5.1.2 */
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

// node_modules/@sagold/json-pointer/dist/jsonPointer.js
var require_jsonPointer = __commonJS({
  "node_modules/@sagold/json-pointer/dist/jsonPointer.js"(exports, module) {
    !(function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("jsonPointer", [], t) : "object" == typeof exports ? exports.jsonPointer = t() : e.jsonPointer = t();
    })("undefined" != typeof self ? self : exports, (() => (() => {
      "use strict";
      var e = { d: (t2, n2) => {
        for (var r2 in n2) e.o(n2, r2) && !e.o(t2, r2) && Object.defineProperty(t2, r2, { enumerable: true, get: n2[r2] });
      }, o: (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), r: (e2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      } }, t = {};
      function n(e2) {
        return "#" === e2 || "" === e2 || Array.isArray(e2) && 0 === e2.length || false;
      }
      e.r(t), e.d(t, { default: () => S, get: () => c, isRoot: () => n, join: () => _, remove: () => j, removeUndefinedItems: () => v, set: () => y, split: () => s, splitLast: () => x });
      const r = /~1/g, o = /~0/g, i = /\/+/g, l = /(^[#/]*|\/+$)/g;
      function u(e2) {
        return e2.replace(r, "/").replace(o, "~");
      }
      function f(e2) {
        return u(decodeURIComponent(e2));
      }
      function s(e2) {
        if (null == e2 || "string" != typeof e2 || n(e2)) return Array.isArray(e2) ? e2 : [];
        const t2 = e2.indexOf("#") >= 0 ? f : u, r2 = (e2 = (e2 = e2.replace(i, "/")).replace(l, "")).split("/");
        for (let e3 = 0, n2 = r2.length; e3 < n2; e3 += 1) r2[e3] = t2(r2[e3]);
        return r2;
      }
      function c(e2, t2, r2 = void 0) {
        if (null == t2 || null == e2) return r2;
        if (n(t2)) return e2;
        const o2 = p(e2, s(t2));
        return void 0 === o2 ? r2 : o2;
      }
      function p(e2, t2) {
        const n2 = t2.shift();
        if (void 0 !== e2) return void 0 !== n2 ? p(e2[n2], t2) : e2;
      }
      const a = /^\[.*\]$/, d = /^\[(.+)\]$/;
      function g(e2, t2) {
        return "__proto__" === e2 || "constructor" == e2 && t2.length > 0 && "prototype" == t2[0];
      }
      function y(e2, t2, n2) {
        if (null == t2) return e2;
        const r2 = s(t2);
        if (0 === r2.length) return e2;
        null == e2 && (e2 = a.test(r2[0]) ? [] : {});
        let o2, i2, l2 = e2;
        for (; r2.length > 1; ) o2 = r2.shift(), i2 = a.test(r2[0]), g(o2, r2) || (l2 = m(l2, o2, i2));
        return o2 = r2.pop(), h(l2, o2, n2), e2;
      }
      function h(e2, t2, n2) {
        let r2;
        const o2 = t2.match(d);
        "[]" === t2 && Array.isArray(e2) ? e2.push(n2) : o2 ? (r2 = o2.pop(), e2[r2] = n2) : e2[t2] = n2;
      }
      function m(e2, t2, n2) {
        if (null != e2[t2]) return e2[t2];
        const r2 = n2 ? [] : {};
        return h(e2, t2, r2), r2;
      }
      function v(e2) {
        let t2 = 0, n2 = 0;
        for (; t2 + n2 < e2.length; ) void 0 === e2[t2 + n2] && (n2 += 1), e2[t2] = e2[t2 + n2], t2 += 1;
        return e2.length = e2.length - n2, e2;
      }
      function j(e2, t2, n2) {
        const r2 = s(t2), o2 = r2.pop(), i2 = c(e2, r2);
        return i2 && delete i2[o2], Array.isArray(i2) && true !== n2 && v(i2), e2;
      }
      const b = /\/+/g, A = /~/g, P = /\//g;
      function O(e2, t2) {
        if (0 === e2.length) return t2 ? "#" : "";
        for (let n2 = 0, r2 = e2.length; n2 < r2; n2 += 1) e2[n2] = e2[n2].replace(A, "~0").replace(P, "~1"), t2 && (e2[n2] = encodeURIComponent(e2[n2]));
        return ((t2 ? "#/" : "/") + e2.join("/")).replace(b, "/");
      }
      function _(e2, ...t2) {
        const n2 = [];
        if (Array.isArray(e2)) return O(e2, true === arguments[1]);
        const r2 = arguments[arguments.length - 1], o2 = "boolean" == typeof r2 ? r2 : e2 && "#" === e2[0];
        for (let e3 = 0, t3 = arguments.length; e3 < t3; e3 += 1) n2.push.apply(n2, s(arguments[e3]));
        const i2 = [];
        for (let e3 = 0, t3 = n2.length; e3 < t3; e3 += 1) if (".." === n2[e3]) {
          if (0 === i2.length) return o2 ? "#" : "";
          i2.pop();
        } else i2.push(n2[e3]);
        return O(i2, o2);
      }
      function x(e2) {
        const t2 = s(e2);
        if (0 === t2.length) return "string" == typeof e2 && "#" === e2[0] ? ["#", t2[0]] : ["", void 0];
        if (1 === t2.length) return "#" === e2[0] ? ["#", t2[0]] : ["", t2[0]];
        const n2 = t2.pop();
        return [_(t2, "#" === e2[0]), n2];
      }
      const S = { get: c, set: y, remove: j, join: _, split: s, splitLast: x, isRoot: n, removeUndefinedItems: v };
      return t;
    })()));
  }
});

// endpoint.js
var cjsm = __toESM(require_jsonPointer());
var { __esModule, get, isRoot, join, remove, removeUndefinedItems, set, split, splitLast } = cjsm;
var endpoint_default = cjsm.default ?? cjsm;
export {
  __esModule,
  endpoint_default as default,
  get,
  isRoot,
  join,
  remove,
  removeUndefinedItems,
  set,
  split,
  splitLast
};
//# sourceMappingURL=json-pointer.development.mjs.map