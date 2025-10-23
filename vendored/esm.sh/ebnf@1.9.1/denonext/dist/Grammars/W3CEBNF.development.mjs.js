/* esm.sh - ebnf@1.9.1/dist/Grammars/W3CEBNF */
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

// node_modules/ebnf/dist/TokenError.js
var require_TokenError = __commonJS({
  "node_modules/ebnf/dist/TokenError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TokenError = void 0;
    var TokenError = class extends Error {
      constructor(message, token) {
        super(message);
        this.message = message;
        this.token = token;
        if (token && token.errors)
          token.errors.push(this);
        else
          throw this;
      }
      inspect() {
        return "SyntaxError: " + this.message;
      }
    };
    exports.TokenError = TokenError;
  }
});

// node_modules/ebnf/dist/Parser.js
var require_Parser = __commonJS({
  "node_modules/ebnf/dist/Parser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Parser = exports.findRuleByName = exports.parseRuleName = exports.escapeRegExp = exports.readToken = void 0;
    var UPPER_SNAKE_RE = /^[A-Z0-9_]+$/;
    var decorationRE = /(\?|\+|\*)$/;
    var preDecorationRE = /^(@|&|!)/;
    var WS_RULE = "WS";
    var TokenError_1 = require_TokenError();
    function readToken(txt, expr) {
      let result = expr.exec(txt);
      if (result && result.index == 0) {
        if (result[0].length == 0 && expr.source.length > 0)
          return null;
        return {
          type: null,
          text: result[0],
          rest: txt.substr(result[0].length),
          start: 0,
          end: result[0].length - 1,
          fullText: result[0],
          errors: [],
          children: [],
          parent: null
        };
      }
      return null;
    }
    exports.readToken = readToken;
    function escapeRegExp(str) {
      return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    }
    exports.escapeRegExp = escapeRegExp;
    function fixRest(token) {
      token.rest = "";
      token.children && token.children.forEach((c) => fixRest(c));
    }
    function fixPositions(token, start) {
      token.start += start;
      token.end += start;
      token.children && token.children.forEach((c) => fixPositions(c, token.start));
    }
    function agregateErrors(errors, token) {
      if (token.errors && token.errors.length)
        token.errors.forEach((err) => errors.push(err));
      token.children && token.children.forEach((tok) => agregateErrors(errors, tok));
    }
    function parseRuleName(name) {
      let postDecoration = decorationRE.exec(name);
      let preDecoration = preDecorationRE.exec(name);
      let postDecorationText = postDecoration && postDecoration[0] || "";
      let preDecorationText = preDecoration && preDecoration[0] || "";
      let out = {
        raw: name,
        name: name.replace(decorationRE, "").replace(preDecorationRE, ""),
        isOptional: postDecorationText == "?" || postDecorationText == "*",
        allowRepetition: postDecorationText == "+" || postDecorationText == "*",
        atLeastOne: postDecorationText == "+",
        lookupPositive: preDecorationText == "&",
        lookupNegative: preDecorationText == "!",
        pinned: preDecorationText == "@",
        lookup: false,
        isLiteral: false
      };
      out.isLiteral = out.name[0] == "'" || out.name[0] == '"';
      out.lookup = out.lookupNegative || out.lookupPositive;
      return out;
    }
    exports.parseRuleName = parseRuleName;
    function findRuleByName(name, parser) {
      let parsed = parseRuleName(name);
      return parser.cachedRules[parsed.name] || null;
    }
    exports.findRuleByName = findRuleByName;
    function stripRules(token, re) {
      if (token.children) {
        let localRules = token.children.filter((x) => x.type && re.test(x.type));
        for (let i = 0; i < localRules.length; i++) {
          let indexOnChildren = token.children.indexOf(localRules[i]);
          if (indexOnChildren != -1) {
            token.children.splice(indexOnChildren, 1);
          }
        }
        token.children.forEach((c) => stripRules(c, re));
      }
    }
    var ignoreMissingRules = ["EOF"];
    var Parser = class {
      constructor(grammarRules, options) {
        this.grammarRules = grammarRules;
        this.options = options;
        this.cachedRules = {};
        this.debug = options ? options.debug === true : false;
        let errors = [];
        let neededRules = [];
        grammarRules.forEach((rule) => {
          let parsedName = parseRuleName(rule.name);
          if (parsedName.name in this.cachedRules) {
            errors.push("Duplicated rule " + parsedName.name);
            return;
          } else {
            this.cachedRules[parsedName.name] = rule;
          }
          if (!rule.bnf || !rule.bnf.length) {
            let error = "Missing rule content, rule: " + rule.name;
            if (errors.indexOf(error) == -1)
              errors.push(error);
          } else {
            rule.bnf.forEach((options2) => {
              if (typeof options2[0] === "string") {
                let parsed = parseRuleName(options2[0]);
                if (parsed.name == rule.name) {
                  let error = "Left recursion is not allowed, rule: " + rule.name;
                  if (errors.indexOf(error) == -1)
                    errors.push(error);
                }
              }
              options2.forEach((option) => {
                if (typeof option == "string") {
                  let name = parseRuleName(option);
                  if (!name.isLiteral && neededRules.indexOf(name.name) == -1 && ignoreMissingRules.indexOf(name.name) == -1)
                    neededRules.push(name.name);
                }
              });
            });
          }
          if (WS_RULE == rule.name)
            rule.implicitWs = false;
          if (rule.implicitWs) {
            if (neededRules.indexOf(WS_RULE) == -1)
              neededRules.push(WS_RULE);
          }
          if (rule.recover) {
            if (neededRules.indexOf(rule.recover) == -1)
              neededRules.push(rule.recover);
          }
        });
        neededRules.forEach((ruleName) => {
          if (!(ruleName in this.cachedRules)) {
            errors.push("Missing rule " + ruleName);
          }
        });
        if (errors.length)
          throw new Error(errors.join("\n"));
      }
      getAST(txt, target) {
        if (!target) {
          target = this.grammarRules.filter((x) => !x.fragment && x.name.indexOf("%") != 0)[0].name;
        }
        let result = this.parse(txt, target);
        if (result) {
          agregateErrors(result.errors, result);
          fixPositions(result, 0);
          stripRules(result, /^%/);
          if (!this.options || !this.options.keepUpperRules)
            stripRules(result, UPPER_SNAKE_RE);
          let rest = result.rest;
          if (rest) {
            new TokenError_1.TokenError("Unexpected end of input: \n" + rest, result);
          }
          fixRest(result);
          result.rest = rest;
        }
        return result;
      }
      emitSource() {
        return "CANNOT EMIT SOURCE FROM BASE Parser";
      }
      parse(txt, target, recursion = 0) {
        let out = null;
        let type = parseRuleName(target);
        let expr;
        let printable = this.debug && /*!isLiteral &*/
        !UPPER_SNAKE_RE.test(type.name);
        printable && console.log(new Array(recursion).join("\u2502  ") + "Trying to get " + target + " from " + JSON.stringify(txt.split("\n")[0]));
        let realType = type.name;
        let targetLex = findRuleByName(type.name, this);
        if (type.name == "EOF") {
          if (txt.length) {
            return null;
          } else if (txt.length == 0) {
            return {
              type: "EOF",
              text: "",
              rest: "",
              start: 0,
              end: 0,
              fullText: "",
              errors: [],
              children: [],
              parent: null
            };
          }
        }
        try {
          if (!targetLex && type.isLiteral) {
            let src = type.name.trim();
            if (src.startsWith('"')) {
              src = JSON.parse(src);
            } else if (src.startsWith("'")) {
              src = src.replace(/^'(.+)'$/, "$1").replace(/\\'/g, "'");
            }
            if (src === "") {
              return {
                type: "%%EMPTY%%",
                text: "",
                rest: txt,
                start: 0,
                end: 0,
                fullText: "",
                errors: [],
                children: [],
                parent: null
              };
            }
            expr = new RegExp(escapeRegExp(src));
            realType = null;
          }
        } catch (e) {
          if (e instanceof ReferenceError) {
            console.error(e);
          }
          return null;
        }
        if (expr) {
          let result = readToken(txt, expr);
          if (result) {
            result.type = realType;
            return result;
          }
        } else {
          let options = targetLex.bnf;
          if (options instanceof Array) {
            options.forEach((phases) => {
              if (out)
                return;
              let pinned = null;
              let tmp = {
                type: type.name,
                text: "",
                children: [],
                end: 0,
                errors: [],
                fullText: "",
                parent: null,
                start: 0,
                rest: txt
              };
              if (targetLex.fragment)
                tmp.fragment = true;
              let tmpTxt = txt;
              let position = 0;
              let allOptional = phases.length > 0;
              let foundSomething = false;
              for (let i = 0; i < phases.length; i++) {
                if (typeof phases[i] == "string") {
                  let localTarget = parseRuleName(phases[i]);
                  allOptional = allOptional && localTarget.isOptional;
                  let got;
                  let foundAtLeastOne = false;
                  do {
                    got = null;
                    if (targetLex.implicitWs) {
                      got = this.parse(tmpTxt, localTarget.name, recursion + 1);
                      if (!got) {
                        let WS;
                        do {
                          WS = this.parse(tmpTxt, WS_RULE, recursion + 1);
                          if (WS) {
                            tmp.text = tmp.text + WS.text;
                            tmp.end = tmp.text.length;
                            WS.parent = tmp;
                            tmp.children.push(WS);
                            tmpTxt = tmpTxt.substr(WS.text.length);
                            position += WS.text.length;
                          } else {
                            break;
                          }
                        } while (WS && WS.text.length);
                      }
                    }
                    got = got || this.parse(tmpTxt, localTarget.name, recursion + 1);
                    if (localTarget.lookupNegative) {
                      if (got)
                        return;
                      break;
                    }
                    if (localTarget.lookupPositive) {
                      if (!got)
                        return;
                    }
                    if (!got) {
                      if (localTarget.isOptional)
                        break;
                      if (localTarget.atLeastOne && foundAtLeastOne)
                        break;
                    }
                    if (got && targetLex.pinned == i + 1) {
                      pinned = got;
                      printable && console.log(new Array(recursion + 1).join("\u2502  ") + "\u2514\u2500 " + got.type + " PINNED");
                    }
                    if (!got)
                      got = this.parseRecovery(targetLex, tmpTxt, recursion + 1);
                    if (!got) {
                      if (pinned) {
                        out = tmp;
                        got = {
                          type: "SyntaxError",
                          text: tmpTxt,
                          children: [],
                          end: tmpTxt.length,
                          errors: [],
                          fullText: "",
                          parent: null,
                          start: 0,
                          rest: ""
                        };
                        if (tmpTxt.length) {
                          new TokenError_1.TokenError(`Unexpected end of input. Expecting ${localTarget.name} Got: ${tmpTxt}`, got);
                        } else {
                          new TokenError_1.TokenError(`Unexpected end of input. Missing ${localTarget.name}`, got);
                        }
                        printable && console.log(new Array(recursion + 1).join("\u2502  ") + "\u2514\u2500 " + got.type + " " + JSON.stringify(got.text));
                      } else {
                        return;
                      }
                    }
                    foundAtLeastOne = true;
                    foundSomething = true;
                    if (got.type == "%%EMPTY%%") {
                      break;
                    }
                    got.start += position;
                    got.end += position;
                    if (!localTarget.lookupPositive && got.type) {
                      if (got.fragment) {
                        got.children && got.children.forEach((x) => {
                          x.start += position;
                          x.end += position;
                          x.parent = tmp;
                          tmp.children.push(x);
                        });
                      } else {
                        got.parent = tmp;
                        tmp.children.push(got);
                      }
                    }
                    if (localTarget.lookup)
                      got.lookup = true;
                    printable && console.log(new Array(recursion + 1).join("\u2502  ") + "\u2514\u2500 " + got.type + " " + JSON.stringify(got.text));
                    if (!localTarget.lookup && !got.lookup) {
                      tmp.text = tmp.text + got.text;
                      tmp.end = tmp.text.length;
                      tmpTxt = tmpTxt.substr(got.text.length);
                      position += got.text.length;
                    }
                    tmp.rest = tmpTxt;
                  } while (got && localTarget.allowRepetition && tmpTxt.length && !got.lookup);
                } else {
                  let got = readToken(tmpTxt, phases[i]);
                  if (!got) {
                    return;
                  }
                  printable && console.log(new Array(recursion + 1).join("\u2502  ") + "\u2514> " + JSON.stringify(got.text) + phases[i].source);
                  foundSomething = true;
                  got.start += position;
                  got.end += position;
                  tmp.text = tmp.text + got.text;
                  tmp.end = tmp.text.length;
                  tmpTxt = tmpTxt.substr(got.text.length);
                  position += got.text.length;
                  tmp.rest = tmpTxt;
                }
              }
              if (foundSomething) {
                out = tmp;
                printable && console.log(new Array(recursion).join("\u2502  ") + "\u251C<\u2500\u2534< PUSHING " + out.type + " " + JSON.stringify(out.text));
              }
            });
          }
          if (out && targetLex.simplifyWhenOneChildren && out.children.length == 1) {
            out = out.children[0];
          }
        }
        if (!out) {
          printable && console.log(target + " NOT RESOLVED FROM " + txt);
        }
        return out;
      }
      parseRecovery(recoverableToken, tmpTxt, recursion) {
        if (recoverableToken.recover && tmpTxt.length) {
          let printable = this.debug;
          printable && console.log(new Array(recursion + 1).join("\u2502  ") + "Trying to recover until token " + recoverableToken.recover + " from " + JSON.stringify(tmpTxt.split("\n")[0] + tmpTxt.split("\n")[1]));
          let tmp = {
            type: "SyntaxError",
            text: "",
            children: [],
            end: 0,
            errors: [],
            fullText: "",
            parent: null,
            start: 0,
            rest: ""
          };
          let got;
          do {
            got = this.parse(tmpTxt, recoverableToken.recover, recursion + 1);
            if (got) {
              new TokenError_1.TokenError('Unexpected input: "' + tmp.text + `" Expecting: ${recoverableToken.name}`, tmp);
              break;
            } else {
              tmp.text = tmp.text + tmpTxt[0];
              tmp.end = tmp.text.length;
              tmpTxt = tmpTxt.substr(1);
            }
          } while (!got && tmpTxt.length > 0);
          if (tmp.text.length > 0 && got) {
            printable && console.log(new Array(recursion + 1).join("\u2502  ") + "Recovered text: " + JSON.stringify(tmp.text));
            return tmp;
          }
        }
        return null;
      }
    };
    exports.Parser = Parser;
    exports.default = Parser;
  }
});

// node_modules/ebnf/dist/Grammars/W3CEBNF.js
var require_W3CEBNF = __commonJS({
  "node_modules/ebnf/dist/Grammars/W3CEBNF.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Parser_1 = require_Parser();
    var BNF;
    (function(BNF2) {
      BNF2.RULES = [
        {
          name: "Grammar",
          bnf: [["RULE_S*", "%Atomic*", "EOF"]]
        },
        {
          name: "%Atomic",
          bnf: [["Production", "RULE_S*"]],
          fragment: true
        },
        {
          name: "Production",
          bnf: [["NCName", "RULE_S*", '"::="', "RULE_WHITESPACE*", "Choice", "RULE_WHITESPACE*", "RULE_EOL+", "RULE_S*"]]
        },
        {
          name: "NCName",
          bnf: [[/[a-zA-Z][a-zA-Z_0-9]*/]]
        },
        {
          name: "Choice",
          bnf: [["SequenceOrDifference", "%_Choice_1*"]],
          fragment: true
        },
        {
          name: "%_Choice_1",
          bnf: [["RULE_WHITESPACE*", '"|"', "RULE_WHITESPACE*", "SequenceOrDifference"]],
          fragment: true
        },
        {
          name: "SequenceOrDifference",
          bnf: [["Item", "RULE_WHITESPACE*", "%_Item_1?"]]
        },
        {
          name: "%_Item_1",
          bnf: [["Minus", "Item"], ["Item*"]],
          fragment: true
        },
        {
          name: "Minus",
          bnf: [['"-"']]
        },
        {
          name: "Item",
          bnf: [["RULE_WHITESPACE*", "%Primary", "PrimaryDecoration?"]],
          fragment: true
        },
        {
          name: "PrimaryDecoration",
          bnf: [['"?"'], ['"*"'], ['"+"']]
        },
        {
          name: "DecorationName",
          bnf: [['"ebnf://"', /[^\x5D#]+/]]
        },
        {
          name: "%Primary",
          bnf: [["NCName"], ["StringLiteral"], ["CharCode"], ["CharClass"], ["SubItem"]],
          fragment: true
        },
        {
          name: "SubItem",
          bnf: [['"("', "RULE_WHITESPACE*", "Choice", "RULE_WHITESPACE*", '")"']]
        },
        {
          name: "StringLiteral",
          bnf: [[`'"'`, /[^"]*/, `'"'`], [`"'"`, /[^']*/, `"'"`]],
          pinned: 1
        },
        {
          name: "CharCode",
          bnf: [['"#x"', /[0-9a-zA-Z]+/]]
        },
        {
          name: "CharClass",
          bnf: [["'['", "'^'?", "%RULE_CharClass_1+", '"]"']]
        },
        {
          name: "%RULE_CharClass_1",
          bnf: [["CharCodeRange"], ["CharRange"], ["CharCode"], ["RULE_Char"]],
          fragment: true
        },
        {
          name: "RULE_Char",
          bnf: [[/\x09/], [/\x0A/], [/\x0D/], [/[\x20-\x5c]/], [/[\x5e-\uD7FF]/], [/[\uE000-\uFFFD]/]]
        },
        {
          name: "CharRange",
          bnf: [["RULE_Char", '"-"', "RULE_Char"]]
        },
        {
          name: "CharCodeRange",
          bnf: [["CharCode", '"-"', "CharCode"]]
        },
        {
          name: "RULE_WHITESPACE",
          bnf: [["%RULE_WHITESPACE_CHAR*"], ["Comment", "RULE_WHITESPACE*"]]
        },
        {
          name: "RULE_S",
          bnf: [["RULE_WHITESPACE", "RULE_S*"], ["RULE_EOL", "RULE_S*"]]
        },
        {
          name: "%RULE_WHITESPACE_CHAR",
          bnf: [[/\x09/], [/\x20/]],
          fragment: true
        },
        {
          name: "Comment",
          bnf: [['"/*"', "%RULE_Comment_Body*", '"*/"']]
        },
        {
          name: "%RULE_Comment_Body",
          bnf: [['!"*/"', /[^*]/]],
          fragment: true
        },
        {
          name: "RULE_EOL",
          bnf: [[/\x0D/, /\x0A/], [/\x0A/], [/\x0D/]]
        },
        {
          name: "Link",
          bnf: [["'['", "Url", "']'"]]
        },
        {
          name: "Url",
          bnf: [[/[^\x5D:/?#]/, '"://"', /[^\x5D#]+/, "%Url1?"]]
        },
        {
          name: "%Url1",
          bnf: [['"#"', "NCName"]],
          fragment: true
        }
      ];
      BNF2.defaultParser = new Parser_1.Parser(BNF2.RULES, { debug: false });
      const preDecorationRE = /^(!|&)/;
      const decorationRE = /(\?|\+|\*)$/;
      const subExpressionRE = /^%/;
      function getBNFRule(name, parser) {
        if (typeof name == "string") {
          if (preDecorationRE.test(name))
            return "";
          let subexpression = subExpressionRE.test(name);
          if (subexpression) {
            let decoration = decorationRE.exec(name);
            let decorationText = decoration ? decoration[0] + " " : "";
            let lonely = isLonelyRule(name, parser);
            if (lonely)
              return getBNFBody(name, parser) + decorationText;
            return "(" + getBNFBody(name, parser) + ")" + decorationText;
          }
          return name;
        } else {
          return name.source.replace(/\\(?:x|u)([a-zA-Z0-9]+)/g, "#x$1").replace(/\[\\(?:x|u)([a-zA-Z0-9]+)-\\(?:x|u)([a-zA-Z0-9]+)\]/g, "[#x$1-#x$2]");
        }
      }
      function isLonelyRule(name, parser) {
        let rule = Parser_1.findRuleByName(name, parser);
        return rule && rule.bnf.length == 1 && rule.bnf[0].length == 1 && (rule.bnf[0][0] instanceof RegExp || rule.bnf[0][0][0] == '"' || rule.bnf[0][0][0] == "'");
      }
      function getBNFChoice(rules, parser) {
        return rules.map((x) => getBNFRule(x, parser)).join(" ");
      }
      function getBNFBody(name, parser) {
        let rule = Parser_1.findRuleByName(name, parser);
        if (rule)
          return rule.bnf.map((x) => getBNFChoice(x, parser)).join(" | ");
        return "RULE_NOT_FOUND {" + name + "}";
      }
      function emit(parser) {
        let acumulator = [];
        parser.grammarRules.forEach((l) => {
          if (!/^%/.test(l.name)) {
            let recover = l.recover ? " /* { recoverUntil=" + l.recover + " } */" : "";
            acumulator.push(l.name + " ::= " + getBNFBody(l.name, parser) + recover);
          }
        });
        return acumulator.join("\n");
      }
      BNF2.emit = emit;
      let subitems = 0;
      function restar(total, resta) {
        console.log("reberia restar " + resta + " a " + total);
        throw new Error("Difference not supported yet");
      }
      function convertRegex(txt) {
        return new RegExp(txt.replace(/#x([a-zA-Z0-9]{4})/g, "\\u$1").replace(/#x([a-zA-Z0-9]{3})/g, "\\u0$1").replace(/#x([a-zA-Z0-9]{2})/g, "\\x$1").replace(/#x([a-zA-Z0-9]{1})/g, "\\x0$1"));
      }
      function getSubItems(tmpRules, seq, parentName) {
        let anterior = null;
        let bnfSeq = [];
        seq.children.forEach((x, i) => {
          if (x.type == "Minus") {
            restar(anterior, x);
          } else {
          }
          let decoration = seq.children[i + 1];
          decoration = decoration && decoration.type == "PrimaryDecoration" && decoration.text || "";
          let preDecoration = "";
          switch (x.type) {
            case "SubItem":
              let name = "%" + (parentName + subitems++);
              createRule(tmpRules, x, name);
              bnfSeq.push(preDecoration + name + decoration);
              break;
            case "NCName":
            case "StringLiteral":
              bnfSeq.push(preDecoration + x.text + decoration);
              break;
            case "CharCode":
            case "CharClass":
              if (decoration || preDecoration) {
                let newRule = {
                  name: "%" + (parentName + subitems++),
                  bnf: [[convertRegex(x.text)]]
                };
                tmpRules.push(newRule);
                bnfSeq.push(preDecoration + newRule.name + decoration);
              } else {
                bnfSeq.push(convertRegex(x.text));
              }
              break;
            case "PrimaryDecoration":
              break;
            default:
              throw new Error(" HOW SHOULD I PARSE THIS? " + x.type + " -> " + JSON.stringify(x.text));
          }
          anterior = x;
        });
        return bnfSeq;
      }
      function createRule(tmpRules, token, name) {
        let bnf = token.children.filter((x) => x.type == "SequenceOrDifference").map((s) => getSubItems(tmpRules, s, name));
        let rule = {
          name,
          bnf
        };
        let recover = null;
        bnf.forEach((x) => {
          recover = recover || x["recover"];
          delete x["recover"];
        });
        if (name.indexOf("%") == 0)
          rule.fragment = true;
        if (recover)
          rule.recover = recover;
        tmpRules.push(rule);
      }
      function getRules(source, parser = BNF2.defaultParser) {
        let ast = parser.getAST(source);
        if (!ast)
          throw new Error("Could not parse " + source);
        if (ast.errors && ast.errors.length) {
          throw ast.errors[0];
        }
        let tmpRules = [];
        ast.children.filter((x) => x.type == "Production").map((x) => {
          let name = x.children.filter((x2) => x2.type == "NCName")[0].text;
          createRule(tmpRules, x, name);
        });
        return tmpRules;
      }
      BNF2.getRules = getRules;
      function Transform(source, subParser = BNF2.defaultParser) {
        return getRules(source.join(""), subParser);
      }
      BNF2.Transform = Transform;
      class Parser extends Parser_1.Parser {
        constructor(source, options) {
          const subParser = options && options.debugRulesParser === true ? new Parser_1.Parser(BNF2.RULES, { debug: true }) : BNF2.defaultParser;
          super(getRules(source, subParser), options);
        }
        emitSource() {
          return emit(this);
        }
      }
      BNF2.Parser = Parser;
    })(BNF || (BNF = {}));
    exports.default = BNF;
  }
});

// endpoint.js
var cjsm = __toESM(require_W3CEBNF());
var { __esModule } = cjsm;
var endpoint_default = cjsm.default ?? cjsm;
export {
  __esModule,
  endpoint_default as default
};
//# sourceMappingURL=W3CEBNF.development.mjs.map