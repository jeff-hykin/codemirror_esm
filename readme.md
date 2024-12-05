## Usage

```js
import CM from './main.js'

const { basicSetup } = CM["codemirror"]
const { EditorView, keymap } = CM["@codemirror/view"]
const { EditorState, Prec } = CM["@codemirror/state"]
const { javascript } = CM["@codemirror/lang-javascript"]

const parent = document.createElement("div")
let editor = new EditorView({
    parent,
    state: EditorState.create({
        doc: `console.log("Hello World!") // inital text of the editor`,
        extensions: [
            basicSetup, // ctrl+z = undo, and other stuff like that
            javascript(), // hilighting
            
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


## Whats Available?

```js
CM["@codemirror/state"]
CM["@codemirror/view"]
CM["@codemirror/merge"]
CM["@codemirror/language"]
CM["@codemirror/commands"]
CM["@codemirror/search"]
CM["@codemirror/autocomplete"]
CM["@codemirror/lint"]
CM["@codemirror/collab"]
CM["@codemirror/theme-one-dark"]
CM["@codemirror/lang-javascript"]
CM["@codemirror/lang-java"]
CM["@codemirror/lang-json"]
CM["@codemirror/lang-cpp"]
CM["@codemirror/lang-php"]
CM["@codemirror/lang-python"]
CM["@codemirror/lang-css"]
CM["@codemirror/lang-sass"]
CM["@codemirror/lang-html"]
CM["@codemirror/lang-sql"]
CM["@codemirror/lang-rust"]
CM["@codemirror/lang-xml"]
CM["@codemirror/lang-markdown"]
CM["@codemirror/lang-lezer"]
CM["@codemirror/lang-wast"]
CM["@codemirror/lang-angular"]
CM["@codemirror/lang-vue"]
CM["@codemirror/lang-liquid"]
CM["@codemirror/lang-less"]
```