/* esm.sh - @codemirror/lang-lezer@6.0.2 */
// node_modules/@codemirror/lang-lezer/dist/index.js
import { parser } from "../../../@lezer/lezer@^1.0.0.js";
import { LRLanguage, foldNodeProp, foldInside, LanguageSupport } from "../../language@^6.0.0.js";
var lezerLanguage = /* @__PURE__ */ LRLanguage.define({
  name: "lezer",
  parser: /* @__PURE__ */ parser.configure({
    props: [
      /* @__PURE__ */ foldNodeProp.add({
        "Body TokensBody SkipBody PrecedenceBody": foldInside
      })
    ]
  }),
  languageData: {
    commentTokens: { block: { open: "/*", close: "*/" }, line: "//" },
    indentOnInput: /^\s*\}$/
  }
});
function lezer() {
  return new LanguageSupport(lezerLanguage);
}
export {
  lezer,
  lezerLanguage
};
//# sourceMappingURL=lang-lezer.development.mjs.map