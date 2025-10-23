/* esm.sh - codemirror@6.0.2 */
// node_modules/codemirror/dist/index.js
import { lineNumbers, highlightActiveLineGutter, highlightSpecialChars, drawSelection, dropCursor, rectangularSelection, crosshairCursor, highlightActiveLine, keymap } from "../../@codemirror/view@^6.0.0.js";
import { EditorView } from "../../@codemirror/view@^6.0.0.js";
import { EditorState } from "../../@codemirror/state@^6.0.0.js";
import { foldGutter, indentOnInput, syntaxHighlighting, defaultHighlightStyle, bracketMatching, foldKeymap } from "../../@codemirror/language@^6.0.0.js";
import { history, defaultKeymap, historyKeymap } from "../../@codemirror/commands@^6.0.0.js";
import { highlightSelectionMatches, searchKeymap } from "../../@codemirror/search@^6.0.0.js";
import { closeBrackets, autocompletion, closeBracketsKeymap, completionKeymap } from "../../@codemirror/autocomplete@^6.0.0.js";
import { lintKeymap } from "../../@codemirror/lint@^6.0.0.js";
var basicSetup = /* @__PURE__ */ (() => [
  lineNumbers(),
  highlightActiveLineGutter(),
  highlightSpecialChars(),
  history(),
  foldGutter(),
  drawSelection(),
  dropCursor(),
  EditorState.allowMultipleSelections.of(true),
  indentOnInput(),
  syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
  bracketMatching(),
  closeBrackets(),
  autocompletion(),
  rectangularSelection(),
  crosshairCursor(),
  highlightActiveLine(),
  highlightSelectionMatches(),
  keymap.of([
    ...closeBracketsKeymap,
    ...defaultKeymap,
    ...searchKeymap,
    ...historyKeymap,
    ...foldKeymap,
    ...completionKeymap,
    ...lintKeymap
  ])
])();
var minimalSetup = /* @__PURE__ */ (() => [
  highlightSpecialChars(),
  history(),
  drawSelection(),
  syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
  keymap.of([
    ...defaultKeymap,
    ...historyKeymap
  ])
])();
export {
  EditorView,
  basicSetup,
  minimalSetup
};
//# sourceMappingURL=codemirror.development.mjs.map