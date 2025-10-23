import { StreamLanguage } from "./language.js"
import { parser } from "../vendored/esm.sh/@fig/lezer-bash.js"
import { LRParser } from "../@lezer/lr.js";
import { LRLanguage, LanguageSupport } from "../@codemirror/language.js"
import { styleTags, tags } from "../@lezer/highlight.js"

const bashLanguage = LRLanguage.define({
    name: "bash",
    parser: parser.configure({
        // props: []
    }),
    languageData: {
        closeBrackets: { brackets: ["(", "[", "{", "'", '"', "`"] },
        commentTokens: { line: "#", },
        wordChars: "$"
    }
})
function bash() {
    return new LanguageSupport(bashLanguage)
}
export {
    bash,
    bashLanguage
}