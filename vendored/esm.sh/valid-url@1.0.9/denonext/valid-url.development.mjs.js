/* esm.sh - valid-url@1.0.9 */
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

// node_modules/valid-url/index.js
var require_valid_url = __commonJS({
  "node_modules/valid-url/index.js"(exports, module) {
    (function(module2) {
      "use strict";
      module2.exports.is_uri = is_iri;
      module2.exports.is_http_uri = is_http_iri;
      module2.exports.is_https_uri = is_https_iri;
      module2.exports.is_web_uri = is_web_iri;
      module2.exports.isUri = is_iri;
      module2.exports.isHttpUri = is_http_iri;
      module2.exports.isHttpsUri = is_https_iri;
      module2.exports.isWebUri = is_web_iri;
      var splitUri = function(uri) {
        var splitted = uri.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/);
        return splitted;
      };
      function is_iri(value) {
        if (!value) {
          return;
        }
        if (/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(value)) return;
        if (/%[^0-9a-f]/i.test(value)) return;
        if (/%[0-9a-f](:?[^0-9a-f]|$)/i.test(value)) return;
        var splitted = [];
        var scheme = "";
        var authority = "";
        var path = "";
        var query = "";
        var fragment = "";
        var out = "";
        splitted = splitUri(value);
        scheme = splitted[1];
        authority = splitted[2];
        path = splitted[3];
        query = splitted[4];
        fragment = splitted[5];
        if (!(scheme && scheme.length && path.length >= 0)) return;
        if (authority && authority.length) {
          if (!(path.length === 0 || /^\//.test(path))) return;
        } else {
          if (/^\/\//.test(path)) return;
        }
        if (!/^[a-z][a-z0-9\+\-\.]*$/.test(scheme.toLowerCase())) return;
        out += scheme + ":";
        if (authority && authority.length) {
          out += "//" + authority;
        }
        out += path;
        if (query && query.length) {
          out += "?" + query;
        }
        if (fragment && fragment.length) {
          out += "#" + fragment;
        }
        return out;
      }
      function is_http_iri(value, allowHttps) {
        if (!is_iri(value)) {
          return;
        }
        var splitted = [];
        var scheme = "";
        var authority = "";
        var path = "";
        var port = "";
        var query = "";
        var fragment = "";
        var out = "";
        splitted = splitUri(value);
        scheme = splitted[1];
        authority = splitted[2];
        path = splitted[3];
        query = splitted[4];
        fragment = splitted[5];
        if (!scheme) return;
        if (allowHttps) {
          if (scheme.toLowerCase() != "https") return;
        } else {
          if (scheme.toLowerCase() != "http") return;
        }
        if (!authority) {
          return;
        }
        if (/:(\d+)$/.test(authority)) {
          port = authority.match(/:(\d+)$/)[0];
          authority = authority.replace(/:\d+$/, "");
        }
        out += scheme + ":";
        out += "//" + authority;
        if (port) {
          out += port;
        }
        out += path;
        if (query && query.length) {
          out += "?" + query;
        }
        if (fragment && fragment.length) {
          out += "#" + fragment;
        }
        return out;
      }
      function is_https_iri(value) {
        return is_http_iri(value, true);
      }
      function is_web_iri(value) {
        return is_http_iri(value) || is_https_iri(value);
      }
    })(module);
  }
});

// endpoint.js
var cjsm = __toESM(require_valid_url());
var { is_uri, is_http_uri, is_https_uri, is_web_uri, isUri, isHttpUri, isHttpsUri, isWebUri } = cjsm;
var endpoint_default = cjsm.default ?? cjsm;
export {
  endpoint_default as default,
  isHttpUri,
  isHttpsUri,
  isUri,
  isWebUri,
  is_http_uri,
  is_https_uri,
  is_uri,
  is_web_uri
};
//# sourceMappingURL=valid-url.development.mjs.map