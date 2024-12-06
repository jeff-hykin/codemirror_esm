import CM from "./codemirror.js"
import { themeBuilderBuilder } from "./theme_tooling.js"

const { EditorView } = CM["@codemirror/view"]
const { tags } = CM["@lezer/highlight"]
const { HighlightStyle, TagStyle, syntaxHighlighting } = CM["@codemirror/language"]

export const themeToExtension = themeBuilderBuilder({ tags, EditorView, HighlightStyle, syntaxHighlighting })

export default {...CM, "@jeff-hykin/theme-tools": {themeToExtension, createTheme: themeToExtension}}