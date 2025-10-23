/* esm.sh - @codemirror/lang-sass@6.0.2 */
// node_modules/@codemirror/lang-sass/dist/index.js
import { parser } from "../../../@lezer/sass@^1.0.0.js";
import { LRLanguage, foldNodeProp, foldInside, indentNodeProp, continuedIndent, LanguageSupport } from "../../language@^6.0.0.js";
import { defineCSSCompletionSource } from "../../lang-css@^6.2.0.js";
var sassLanguage = /* @__PURE__ */ LRLanguage.define({
  name: "sass",
  parser: /* @__PURE__ */ parser.configure({
    props: [
      /* @__PURE__ */ foldNodeProp.add({
        Block: foldInside,
        Comment(node, state) {
          return { from: node.from + 2, to: state.sliceDoc(node.to - 2, node.to) == "*/" ? node.to - 2 : node.to };
        }
      }),
      /* @__PURE__ */ indentNodeProp.add({
        Declaration: /* @__PURE__ */ continuedIndent()
      })
    ]
  }),
  languageData: {
    commentTokens: { block: { open: "/*", close: "*/" }, line: "//" },
    indentOnInput: /^\s*\}$/,
    wordChars: "$-"
  }
});
var indentedSassLanguage = /* @__PURE__ */ sassLanguage.configure({
  dialect: "indented",
  props: [
    /* @__PURE__ */ indentNodeProp.add({
      "Block RuleSet": (cx) => cx.baseIndent + cx.unit
    }),
    /* @__PURE__ */ foldNodeProp.add({
      Block: (node) => ({ from: node.from, to: node.to })
    })
  ]
});
var sassCompletionSource = /* @__PURE__ */ defineCSSCompletionSource((node) => node.name == "VariableName" || node.name == "SassVariableName");
function sass(config) {
  return new LanguageSupport((config === null || config === void 0 ? void 0 : config.indented) ? indentedSassLanguage : sassLanguage, sassLanguage.data.of({ autocomplete: sassCompletionSource }));
}
export {
  sass,
  sassCompletionSource,
  sassLanguage
};
//# sourceMappingURL=lang-sass.development.mjs.map