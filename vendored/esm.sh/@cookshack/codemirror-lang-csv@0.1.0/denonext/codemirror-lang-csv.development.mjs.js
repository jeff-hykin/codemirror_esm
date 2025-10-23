/* esm.sh - @cookshack/codemirror-lang-csv@0.1.0 */
// node_modules/@cookshack/codemirror-lang-csv/dist/index.js
import { LRParser } from "../../../@lezer/lr@^1.0.0.js";
import { LRLanguage, LanguageSupport } from "../../../@codemirror/language@^6.0.0.js";
import { styleTags, tags } from "../../../@lezer/highlight@^1.0.0.js";
var parser = LRParser.deserialize({
  version: 14,
  states: "$[OQOPOOOOOO'#Ci'#CiOOOO'#C_'#C_OcOPO'#ChOOOO'#C^'#C^OnOPO'#CeOQOPOOOQOPO,59SQOOO,59P,59PQOOOOOOOOO-E6c-E6cOOOO'#Ca'#CaOvOPO1G.nP!ROPO'#CeOQOPO7+$YOOOO'#Cb'#CbO!WOPO<<GtOQOPOAN=`OOOO'#Cc'#CcO!cOPOG22zOQOPOLD(fOOOO'#Cd'#CdO!nOPO!$'LQOQOPO!)9AlOOOO!.K7W!.K7W",
  stateData: "#O~O^PO_POS]P`]Pa]P~OSVO`[Xa[X~O`WOaXO~OS^O`[ia[i~O`WO~OSaO`[ya[y~OSdO`[!Za[!Z~OSgO`[!ka[!k~O^S_S~",
  goto: "!d^PP_cPhknqtPPz!RTTOUVROUgR[VR`^RcaRfdQUORYUSSOURhgUQOUgQZVQ_^QbaRed",
  nodeNames: "\u26A0 Program Row Cell1 Separator Cell2 Cell3 Cell4 Cell5",
  maxTerm: 17,
  skippedNodes: [0],
  repeatNodeCount: 1,
  tokenData: "(T~R_OY!QYZ!rZ]!Q]^!w^r!Qrs!}s|!Q|}'y}!]!Q!]!^'y!^;'S!Q;'S;=`!l<%l~!Q~O!Q~~(O~!VV_~OY!QZ]!Q^|!Q}!]!Q!^;'S!Q;'S;=`!l<%lO!Q~!oP;=`<%l!Q~!wO`~~!zPYZ!r~#S__~OY!}YZ$RZ]!}]^$R^r!}rs%os|!}|}$R}!]!}!]!^$R!^#O!}#O#P&]#P;'S!};'S;=`'s<%lO!}~$UVOr$Rrs$ks#O$R#O#P$p#P;'S$R;'S;=`%i<%lO$R~$pO^~~$sRO;'S$R;'S;=`$|;=`O$R~%PWOr$Rrs$ks#O$R#O#P$p#P;'S$R;'S;=`%i;=`<%l$R<%lO$R~%lP;=`<%l$R~%vV^~_~OY!QZ]!Q^|!Q}!]!Q!^;'S!Q;'S;=`!l<%lO!Q~&b[_~OY!}YZ$RZ]!}]^$R^|!}|}$R}!]!}!]!^$R!^;'S!};'S;=`'W;=`<%l$R<%lO!}~'ZWOr$Rrs$ks#O$R#O#P$p#P;'S$R;'S;=`%i;=`<%l!}<%lO$R~'vP;=`<%l!}~(OOS~~(TOa~",
  tokenizers: [0],
  topRules: { "Program": [0, 1] },
  tokenPrec: 87
});
var csvLanguage;
csvLanguage = LRLanguage.define({ parser: parser.configure({ props: [styleTags({
  Separator: tags.separator,
  Cell1: tags.string,
  Cell2: tags.keyword,
  Cell3: tags.number,
  Cell4: tags.definition(tags.variableName),
  Cell5: tags.typeName
})] }) });
function csv() {
  return new LanguageSupport(csvLanguage);
}
export {
  csv,
  csvLanguage
};
//# sourceMappingURL=codemirror-lang-csv.development.mjs.map