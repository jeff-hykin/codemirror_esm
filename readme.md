## Usage

```js
import atomOne from 'https://esm.sh/gh/jeff-hykin/codemirror_esm@1.0.0.0/themes/atomone.js'
import dracula from 'https://esm.sh/gh/jeff-hykin/codemirror_esm@1.0.0.0/themes/dracula.js'

import { basicSetup } from "https://esm.sh/gh/jeff-hykin/codemirror_esm@1.0.0.0/codemirror.js"
import { EditorView, keymap } from "https://esm.sh/gh/jeff-hykin/codemirror_esm@1.0.0.0/@codemirror/view.js"
import { EditorState, Prec } from "https://esm.sh/gh/jeff-hykin/codemirror_esm@1.0.0.0/@codemirror/state.js"
import { javascript } from "https://esm.sh/gh/jeff-hykin/codemirror_esm@1.0.0.0/@codemirror/lang-javascript.js"
import { HighlightStyle, syntaxHighlighting } from "./vendored/esm.sh/@codemirror/language.js"

import { themeToExtension, createEditor } from "https://esm.sh/gh/jeff-hykin/codemirror_esm@1.0.0.0/helpers.js"

const parent = document.createElement("div")
let editor = new EditorView({
    parent,
    state: EditorState.create({
        doc: `console.log("Hello World!") // inital text of the editor`,
        extensions: [
            basicSetup, // ctrl+z = undo, and other stuff like that
            javascript(), // highlighting hooks
            
            // 
            // theme choice
            // 
            themeToExtension(
                atomOne({
                    // override theme settings
                    settings: {
                        background: "#272C35",
                        foreground: "#9d9b97",
                        caret: "#797977",
                        selection: "#3d4c64",
                        selectionMatch: "#3d4c64",
                        gutterBackground: "#272C35",
                        gutterForeground: "#465063",
                        gutterBorder: "transparent",
                        lineHighlight: "#2e3f5940",
                    },
                    // effectively delete any existing red styles from the theme
                    mutateThemeStyles: (style, tags) => (style.color == "red" ? null : style),
                    // add some new styles
                    styles: (tags) => [
                        {
                            tag: [t.tagName, t.heading],
                            color: "#e06c75",
                        },
                        {
                            tag: [t.function(t.variableName), t.function(t.propertyName), t.url, t.processingInstruction],
                            color: "hsl(207, 82%, 66%)",
                        },
                    ],
                })
            ),
            
            //
            // example: define your own keybinding
            //
            keymap.of([{
                key: "Ctrl-Enter",
                run: () =>{
                    console.log("User pressed Ctrl+Enter!")
                    return true
                }}
            ]),
            
            // 
            // example: overriding a default keybinding (from the basicSetup or another extension)
            // 
            // Prec = "precedence"
            Prec.high(keymap.of([{
                key: "Ctrl-;",
                run: () =>{
                    console.log("User pressed Ctrl+;!")
                    return true
                }}
            ])),
            
            // 
            // example: onChange
            // 
            EditorView.updateListener.of((update)=>{
                const codeString = editor.state.doc.text.join("\n")
                console.log("Something (no matter how small) happened!")
                console.log("I'm called on init, and twice per keypress")
                console.log("DON'T USE THIS UNLESS YOU HAVE TO!")
            })
        ],
    }),
})
```