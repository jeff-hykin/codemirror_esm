import CM from './main.js'
import atomOne from './themes/atomone.js'
import { passAlongProps } from "https://esm.sh/gh/jeff-hykin/elemental@0.6.5/main/deno.js"
import { LanguageSupport } from "./codemirror.js"
import { isPureObject } from 'https://esm.sh/gh/jeff-hykin/good-js@1.18.2.0/source/flattened/is_pure_object.js'

export const { basicSetup } = CM["codemirror"]
export const { EditorView, keymap } = CM["@codemirror/view"]
export const { EditorState, Prec } = CM["@codemirror/state"]
// const { javascript } = CM["@codemirror/lang-javascript"]
// const { tags: t } = CM['@lezer/highlight']
export const { themeToExtension } = CM["@jeff-hykin/theme-tools"]

export const languages = Object.fromEntries(
    Object.keys(CM).filter(each=>each.startsWith("@codemirror/lang-")).map(each=>{
        const langName = each.replace(/^@codemirror\/lang-/,"")
        return [langName, CM[each][langName]]
    })
)

/**
 * createEditor returns an HTML element (div) with
 *
 * @example
 * ```js
 * import { createEditor, languages } from 'https://esm.sh/gh/jeff-hykin/codemirror_esm@0.0.3.0/helpers.js'
 * 
 * // simple usage
 * const editor1 = createEditor()
 * document.body.appendChild(editor1)
 * 
 * // advanced usage
 * const editor2 = createEditor({
 *     style: "width:100%;height:100%",
 *     language: languages.javascript,
 *     value: `console.log("Hello World!")`,
 *     onInput: ({element, editor}, update)=>{
 *         console.log("User added text!")
 *         // set the editor's value
 *         element.value = "Sorry I, if you edit anything you're going to only see this message"
 *     },
 *     keymaps: {
 *         "Ctrl-Enter": ({element, editor}, ...other)=>{
 *             console.log("User pressed Ctrl+Enter!")
 *             let editorValue = element.value
 *         },
 *     },
 * })
 * ```
 */
export function createEditor({ language, value, theme, editorState, keymaps, onInput, onChange, ...props } = {}) {
    const parent = document.createElement("div")
    let extensions = [
        basicSetup,
    ]

    // 
    // theme
    // 
    if (!theme) {
        theme = themeToExtension(
            atomOne()
        )
    } else {
        try {
            theme = themeToExtension(
                theme
            )
        } catch (error) {
            
        }
    }
    extensions.push(theme)
    
    // 
    // language
    // 
    if (typeof language == 'function') {
        extensions.push(language())
    }
    
    // 
    // keymaps
    // 
    if (isPureObject(keymaps)) {
        for (const [key, value] of Object.entries(keymaps)) {
            (typeof value == 'function') && extensions.push(
                Prec.high(keymap.of([{
                    key,
                    run: (...args) =>{
                        // avoid "unhandled promise rejection" errors
                        try {
                            let result = value({element: parent, editor}, ...args)
                            if (result instanceof Promise) {
                                result.catch((error)=>{
                                    console.error(error?.stack||error)
                                })
                            }
                        } catch (error) {
                            console.error(error?.stack||error)
                            return false
                        }
                        return true
                    }}
                ])),
            )
        }
    }
    // 
    // onInput
    // 
    if (typeof onInput == 'function') {
        extensions.push(
            EditorView.updateListener.of((update)=>{
                if (update.docChanged && update.transactions.some(tr => tr.annotation(Transaction.userEvent))) {
                    try {
                        let result = onInput({element: parent, editor}, update)
                        if (result instanceof Promise) {
                            result.catch((error)=>{
                                console.error(error?.stack||error)
                            })
                        }
                    } catch (error) {
                        console.error(error?.stack||error)
                    }
                }
            })
        )
    }
    // 
    // onChange
    // 
    if (typeof onChange == 'function') {
        extensions.push(
            EditorView.updateListener.of((update)=>{
                if (update.docChanged) {
                    // avoid "unhandled promise rejection" errors
                    try {
                        let result = onChange({element: parent, editor}, update)
                        if (result instanceof Promise) {
                            result.catch((error)=>{
                                console.error(error?.stack||error)
                            })
                        }
                    } catch (error) {
                        console.error(error?.stack||error)
                    }
                }
            })
        )
    }
    
    // 
    // end of extensions
    // 
    extensions.push(...editorState?.extensions||[])
    
    let editor
    // .value
    Object.defineProperty(parent, "value", {
        get: () => editor.state.doc.text.join("\n"),
        set: (value) => {
            editor.dispatch({
                changes: {
                    from: 0,
                    to: editor.state.doc.length,
                    insert: value,
                }
            })
        }
    })
    Object.defineProperty(parent, "editor", {
        get: () => editor,
    })
    
    passAlongProps(parent, props)
    editor = new EditorView({
        parent,
        state: EditorState.create({
            ...editorState,
            doc: value||editorState?.doc||"",
            extensions,
        }),
    })
    return parent
}