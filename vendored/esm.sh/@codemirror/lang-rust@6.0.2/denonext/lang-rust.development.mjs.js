/* esm.sh - @codemirror/lang-rust@6.0.2 */
// node_modules/@codemirror/lang-rust/dist/index.js
import { parser } from "../../../@lezer/rust@^1.0.0.js";
import { LRLanguage, indentNodeProp, continuedIndent, foldNodeProp, foldInside, LanguageSupport } from "../../language@^6.0.0.js";
var rustLanguage = /* @__PURE__ */ LRLanguage.define({
  name: "rust",
  parser: /* @__PURE__ */ parser.configure({
    props: [
      /* @__PURE__ */ indentNodeProp.add({
        IfExpression: /* @__PURE__ */ continuedIndent({ except: /^\s*({|else\b)/ }),
        "String BlockComment": () => null,
        "AttributeItem": (cx) => cx.continue(),
        "Statement MatchArm": /* @__PURE__ */ continuedIndent()
      }),
      /* @__PURE__ */ foldNodeProp.add((type) => {
        if (/(Block|edTokens|List)$/.test(type.name))
          return foldInside;
        if (type.name == "BlockComment")
          return (tree) => ({ from: tree.from + 2, to: tree.to - 2 });
        return void 0;
      })
    ]
  }),
  languageData: {
    commentTokens: { line: "//", block: { open: "/*", close: "*/" } },
    indentOnInput: /^\s*(?:\{|\})$/,
    closeBrackets: { stringPrefixes: ["b", "r", "br"] }
  }
});
function rust() {
  return new LanguageSupport(rustLanguage);
}
export {
  rust,
  rustLanguage
};
//# sourceMappingURL=lang-rust.development.mjs.map