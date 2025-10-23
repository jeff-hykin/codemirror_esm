// import CM from './main.js'
import atomOne from './themes/atomone.js'
import { passAlongProps } from "https://esm.sh/gh/jeff-hykin/elemental@0.6.5/main/deno.js"
import { isPureObject } from 'https://esm.sh/gh/jeff-hykin/good-js@1.18.2.0/source/flattened/is_pure_object.js'

import { basicSetup } from "./codemirror.js"
import { EditorView, keymap } from "./@codemirror/view.js"
import { EditorState, EditorSelection, Prec } from "./@codemirror/state.js"
// import { javascript } from "./@codemirror/lang-javascript.js"
// import { yaml } from "./@codemirror/lang-yaml.js"

import { themeBuilderBuilder } from "./theme_tooling.js"
import { tags } from "./@lezer/highlight.js"
import { HighlightStyle, syntaxHighlighting } from "./@codemirror/language.js"

export const themeToExtension = themeBuilderBuilder({ tags, EditorView, HighlightStyle, syntaxHighlighting })

// at the moment: javascript, java, json, cpp, php, python, css, sass, html, sql, rust, xml, markdown, lezer, wast, angular, vue, liquid, less
// export const languages = {
//     javascript,
//     yaml,
// }

const editorCssTag = `codmirror-${Math.random().toString(36).slice(2)}`
if (document.head) {
    document.head.appendChild(Object.assign(document.createElement("style"), {
        innerHTML: `
            .${editorCssTag} br {
                display: inline-block;
                content: "";
                border-bottom: 0px solid transparent;
            }
        `,
    }))
}
/**
 * createEditor returns an HTML element (div) with
 *
 * @example
 * ```js
 * import { createEditor, EditorSelection } from 'https://esm.sh/gh/jeff-hykin/codemirror_esm@1.0.0.0/helpers.js'
 * import { javascript } from 'https://esm.sh/gh/jeff-hykin/codemirror_esm@1.0.0.0/@codemirror/lang-javascript.js'
 * 
 * // simple usage
 * const editor1 = createEditor()
 * document.body.appendChild(editor1)
 * 
 * // advanced usage
 * const editor2 = createEditor({
 *     style: "width:100%;height:100%",
 *     language: javascript,
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
 * 
 *             // move cursor to end of document
 *             const end = editor.state.doc.length;
 *             editor.dispatch({
 *                 selection: EditorSelection.cursor(end)
 *             })
 *         },
 *     },
 * })
 * ```
 */
export function createEditor({ language, value, theme, editorState, keymaps, onInput, onChange, disableHelpers=false, ...props } = {}) {
    const parent = document.createElement("div")
    parent.classList.add(editorCssTag)
    if (!disableHelpers) {
        value = value||' '
        parent.style.position = "relative"
        parent.addEventListener("click", (event)=>{
            const elm = parent.querySelector(".cm-content")
            if (elm) {
                const bottomEdge = elm.clientTop + elm.clientHeight
                elm.click()
                elm.focus()
                if (event.clientY > bottomEdge) {
                    // move cursor to end of document if clicking below the last line
                    const end = editor.state.doc.length;
                    editor.dispatch({
                        selection: EditorSelection.cursor(end)
                    })
                }
            }
        })
    }
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
    
    if (!disableHelpers) {
        if (parent.children.length > 0) {
            parent.children[0].style.minHeight = "100%"
        }
    }
    return parent
}