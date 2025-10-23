/* esm.sh - @codemirror/lang-yaml@6.1.2 */
// node_modules/@codemirror/lang-yaml/dist/index.js
import { parser as parser$1 } from "../../../@lezer/yaml@^1.0.0.js";
import { LRLanguage, indentNodeProp, delimitedIndent, foldNodeProp, foldInside, LanguageSupport } from "../../language@^6.0.0.js";
import { parseMixed } from "../../../@lezer/common@^1.2.0.js";
import { styleTags, tags } from "../../../@lezer/highlight@^1.2.0.js";
import { LRParser } from "../../../@lezer/lr@^1.0.0.js";
var parser = /* @__PURE__ */ LRParser.deserialize({
  version: 14,
  states: "!vOQOPOOO]OPO'#C_OhOPO'#C^OOOO'#Cc'#CcOpOPO'#CaQOOOOOO{OPOOOOOO'#Cb'#CbO!WOPO'#C`O!`OPO,58xOOOO-E6a-E6aOOOO-E6`-E6`OOOO'#C_'#C_OOOO1G.d1G.d",
  stateData: "!h~OXPOYROWTP~OWVXXRXYRX~OYVOXSP~OXROYROWTX~OXROYROWTP~OYVOXSX~OX[O~OXY~",
  goto: "vWPPX[beioRUOQQOR]XRXQTTOUQWQRZWSSOURYS",
  nodeNames: "\u26A0 Document Frontmatter DashLine FrontmatterContent Body",
  maxTerm: 10,
  skippedNodes: [0],
  repeatNodeCount: 2,
  tokenData: "$z~RXOYnYZ!^Z]n]^!^^}n}!O!i!O;'Sn;'S;=`!c<%lOn~qXOYnYZ!^Z]n]^!^^;'Sn;'S;=`!c<%l~n~On~~!^~!cOY~~!fP;=`<%ln~!lZOYnYZ!^Z]n]^!^^}n}!O#_!O;'Sn;'S;=`!c<%l~n~On~~!^~#bZOYnYZ!^Z]n]^!^^}n}!O$T!O;'Sn;'S;=`!c<%l~n~On~~!^~$WXOYnYZ$sZ]n]^$s^;'Sn;'S;=`!c<%l~n~On~~$s~$zOX~Y~",
  tokenizers: [0],
  topRules: { "Document": [0, 1] },
  tokenPrec: 67
});
var yamlLanguage = /* @__PURE__ */ LRLanguage.define({
  name: "yaml",
  parser: /* @__PURE__ */ parser$1.configure({
    props: [
      /* @__PURE__ */ indentNodeProp.add({
        Stream: (cx) => {
          for (let before = cx.node.resolve(cx.pos, -1); before && before.to >= cx.pos; before = before.parent) {
            if (before.name == "BlockLiteralContent" && before.from < before.to)
              return cx.baseIndentFor(before);
            if (before.name == "BlockLiteral")
              return cx.baseIndentFor(before) + cx.unit;
            if (before.name == "BlockSequence" || before.name == "BlockMapping")
              return cx.column(before.from, 1);
            if (before.name == "QuotedLiteral")
              return null;
            if (before.name == "Literal") {
              let col = cx.column(before.from, 1);
              if (col == cx.lineIndent(before.from, 1))
                return col;
              if (before.to > cx.pos)
                return null;
            }
          }
          return null;
        },
        FlowMapping: /* @__PURE__ */ delimitedIndent({ closing: "}" }),
        FlowSequence: /* @__PURE__ */ delimitedIndent({ closing: "]" })
      }),
      /* @__PURE__ */ foldNodeProp.add({
        "FlowMapping FlowSequence": foldInside,
        "Item Pair BlockLiteral": (node, state) => ({ from: state.doc.lineAt(node.from).to, to: node.to })
      })
    ]
  }),
  languageData: {
    commentTokens: { line: "#" },
    indentOnInput: /^\s*[\]\}]$/
  }
});
function yaml() {
  return new LanguageSupport(yamlLanguage);
}
var frontmatterLanguage = /* @__PURE__ */ LRLanguage.define({
  name: "yaml-frontmatter",
  parser: /* @__PURE__ */ parser.configure({
    props: [/* @__PURE__ */ styleTags({ DashLine: tags.meta })]
  })
});
function yamlFrontmatter(config) {
  let { language, support } = config.content instanceof LanguageSupport ? config.content : { language: config.content, support: [] };
  return new LanguageSupport(frontmatterLanguage.configure({
    wrap: parseMixed((node) => {
      return node.name == "FrontmatterContent" ? { parser: yamlLanguage.parser } : node.name == "Body" ? { parser: language.parser } : null;
    })
  }), support);
}
export {
  yaml,
  yamlFrontmatter,
  yamlLanguage
};
//# sourceMappingURL=lang-yaml.development.mjs.map