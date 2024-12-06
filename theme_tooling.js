/**
 * init a tool that inits themes
 *
 * @example
 * ```js
 * // import code mirror stuff from whereever, ex:
 * // const { EditorView, } = CM["@codemirror/view"]
 * // const { HighlightStyle, TagStyle, syntaxHighlighting } = CM["@codemirror/language"]
 * // const { tags: t } = CM['@lezer/highlight']
 * 
 * import { themeBuilderBuilder } from "./theme_tooling.js"
 * import { abyss } from "./themes/abyss.js"
 * import { eclipse } from "./themes/eclipse.js"
 * const initTheme = themeBuilderBuilder({
 *     tags,
 *     EditorView,
 *     HighlightStyle,
 *     syntaxHighlighting,
 * })
 * const theme1AsCodeMirrorExtension = initTheme(abyss)
 * const theme2AsCodeMirrorExtension = initTheme(eclipse)
 * ```
 *
 * @param arg1 - description
 * @param arg1.parameter - description
 * @returns {Object} output - description
 * @returns output.x - description
 *
 */
export const themeBuilderBuilder = ({tags, EditorView, HighlightStyle, syntaxHighlighting,})=>{
    const createTheme = (theme) => {
        // sometimes theme=(tags)=>{}, sometimes theme=({...setupArgs})=>(tags)=>{}
        if (theme instanceof Function) {
            let themeAfterFunctionCall, err
            try {
                themeAfterFunctionCall = theme(tags)
            } catch (error) {
                err
            }
            if (themeAfterFunctionCall instanceof Function) {
                const setup = {}
                theme = theme(setup)
                theme = theme(tags)
            } else {
                if (err) {
                    throw err
                }
                theme = themeAfterFunctionCall
            }
        }
        // 
        // normal theme builder code
        // 
        const { theme: variant, settings, styles } = theme
        
        const themeAsExtension = EditorView.theme(
            {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                "&": {
                    backgroundColor: settings.background,
                    color: settings.foreground,
                },
                ".cm-content": {
                    caretColor: settings.caret,
                },
                ".cm-cursor, .cm-dropCursor": {
                    borderLeftColor: settings.caret,
                },
                "&.cm-focused .cm-selectionBackgroundm .cm-selectionBackground, .cm-content ::selection": {
                    backgroundColor: settings.selection,
                },
                ".cm-activeLine": {
                    backgroundColor: settings.lineHighlight,
                },
                ".cm-gutters": {
                    backgroundColor: settings.gutterBackground,
                    color: settings.gutterForeground,
                },
                ".cm-activeLineGutter": {
                    backgroundColor: settings.lineHighlight,
                },
            },
            {
                dark: variant === "dark",
            }
        )

        const highlightStyle = HighlightStyle.define(styles)
        const extension = [themeAsExtension, syntaxHighlighting(highlightStyle)]

        return extension
    }
    return createTheme
}