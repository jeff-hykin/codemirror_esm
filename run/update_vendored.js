#!/usr/bin/env -S deno run --allow-all
import { recursivelyVendor } from "../utils/vendor.js"
import { FileSystem, glob } from "https://deno.land/x/quickr@0.8.6/main/file_system.js"

for (const each of [
    'https://esm.sh/@lezer/lr?dev',
    'https://esm.sh/@lezer/common?dev',
    'https://esm.sh/@lezer/highlight?dev',

    'https://esm.sh/codemirror?dev',
    'https://esm.sh/@codemirror/state?dev',
    'https://esm.sh/@codemirror/view?dev',
    'https://esm.sh/@codemirror/language?dev',
    'https://esm.sh/@codemirror/commands?dev',
    'https://esm.sh/@codemirror/search?dev',
    'https://esm.sh/@codemirror/autocomplete?dev',
    'https://esm.sh/@codemirror/lint?dev',
    'https://esm.sh/@codemirror/collab?dev',
    
    // official languages
    'https://esm.sh/@codemirror/lang-angular?dev',
    'https://esm.sh/@codemirror/lang-cpp?dev',
    'https://esm.sh/@codemirror/lang-css?dev',
    'https://esm.sh/@codemirror/lang-go?dev',
    'https://esm.sh/@codemirror/lang-html?dev',
    'https://esm.sh/@codemirror/lang-java?dev',
    'https://esm.sh/@codemirror/lang-javascript?dev',
    'https://esm.sh/@codemirror/lang-jinja?dev',
    'https://esm.sh/@codemirror/lang-json?dev',
    'https://esm.sh/@codemirror/lang-less?dev',
    'https://esm.sh/@codemirror/lang-lezer?dev',
    'https://esm.sh/@codemirror/lang-liquid?dev',
    'https://esm.sh/@codemirror/lang-markdown?dev',
    'https://esm.sh/@codemirror/lang-php?dev',
    'https://esm.sh/@codemirror/lang-python?dev',
    'https://esm.sh/@codemirror/lang-rust?dev',
    'https://esm.sh/@codemirror/lang-sass?dev',
    'https://esm.sh/@codemirror/lang-sql?dev',
    'https://esm.sh/@codemirror/lang-vue?dev',
    'https://esm.sh/@codemirror/lang-wast?dev',
    'https://esm.sh/@codemirror/lang-xml?dev',
    'https://esm.sh/@codemirror/lang-yaml?dev',
    // fallbacks
        'https://esm.sh/@codemirror/legacy-modes/mode/stex',
        'https://esm.sh/@codemirror/legacy-modes/mode/lua',
        'https://esm.sh/@codemirror/legacy-modes/mode/ruby',
        'https://esm.sh/@codemirror/legacy-modes/mode/cmake',
        'https://esm.sh/@codemirror/legacy-modes/mode/cobol',
        'https://esm.sh/@codemirror/legacy-modes/mode/coffeescript',
        'https://esm.sh/@codemirror/legacy-modes/mode/commonlisp',
        'https://esm.sh/@codemirror/legacy-modes/mode/crystal',
        'https://esm.sh/@codemirror/legacy-modes/mode/dockerfile',
        'https://esm.sh/@codemirror/legacy-modes/mode/elm',
        'https://esm.sh/@codemirror/legacy-modes/mode/erlang',
        'https://esm.sh/@codemirror/legacy-modes/mode/fortran',
        'https://esm.sh/@codemirror/legacy-modes/mode/gherkin',
        'https://esm.sh/@codemirror/legacy-modes/mode/go',
        'https://esm.sh/@codemirror/legacy-modes/mode/haskell',
        'https://esm.sh/@codemirror/legacy-modes/mode/haxe',
        'https://esm.sh/@codemirror/legacy-modes/mode/http',
        'https://esm.sh/@codemirror/legacy-modes/mode/julia',
        'https://esm.sh/@codemirror/legacy-modes/mode/mathematica',
        'https://esm.sh/@codemirror/legacy-modes/mode/nginx',
        'https://esm.sh/@codemirror/legacy-modes/mode/pascal',
        'https://esm.sh/@codemirror/legacy-modes/mode/pegjs',
        'https://esm.sh/@codemirror/legacy-modes/mode/perl',
        'https://esm.sh/@codemirror/legacy-modes/mode/pig',
        'https://esm.sh/@codemirror/legacy-modes/mode/powershell',
        'https://esm.sh/@codemirror/legacy-modes/mode/protobuf',
        'https://esm.sh/@codemirror/legacy-modes/mode/puppet',
        'https://esm.sh/@codemirror/legacy-modes/mode/r',
        'https://esm.sh/@codemirror/legacy-modes/mode/scheme',
        'https://esm.sh/@codemirror/legacy-modes/mode/shell',
        'https://esm.sh/@codemirror/legacy-modes/mode/smalltalk',
        'https://esm.sh/@codemirror/legacy-modes/mode/sparql',
        'https://esm.sh/@codemirror/legacy-modes/mode/swift',
        'https://esm.sh/@codemirror/legacy-modes/mode/textile',
        'https://esm.sh/@codemirror/legacy-modes/mode/toml',
        'https://esm.sh/@codemirror/legacy-modes/mode/vb',
        'https://esm.sh/@codemirror/legacy-modes/mode/vbscript',
        'https://esm.sh/@codemirror/legacy-modes/mode/verilog',
    // extras
        'https://esm.sh/@replit/codemirror-lang-svelte?dev',
        'https://esm.sh/@replit/codemirror-lang-nix?dev',
        'https://esm.sh/@replit/codemirror-lang-csharp?dev',
        'https://esm.sh/@langchain/codemirror-json-schema?dev',
        // 'https://esm.sh/@exercism/codemirror-lang-gleam?dev',
        // 'https://esm.sh/@iizukak/codemirror-lang-wgsl?dev',
        'https://esm.sh/@cookshack/codemirror-lang-csv?dev',
        // 'https://esm.sh/runno-codemirror-lang-ruby?dev',
        // 'https://esm.sh/codemirror-lang-typst?dev',
        // 'https://esm.sh/codemirror-lang-makefile?dev',
        // 'https://esm.sh/codemirror-lang-csv ?dev',
        // 'https://esm.sh/codemirror-lang-jq?dev',
        // 'https://esm.sh/codemirror-lang-perl?dev',
        // 'https://esm.sh/codemirror-lang-zig?dev',
        // 'https://esm.sh/codemirror-lang-prolog?dev',
        // 'https://esm.sh/codemirror-lang-latex?dev',
        // 'https://esm.sh/codemirror-lang-elixir?dev',
        // 'https://esm.sh/codemirror-lang-mermaid?dev',
        // 'https://esm.sh/codemirror-lang-spreadsheet?dev',
        // 'https://esm.sh/codemirror-lang-r?dev',

    'https://esm.sh/@codemirror/theme-one?dev',
    'https://esm.sh/@codemirror/merge?dev',
]) {
    await recursivelyVendor(
        await fetch(each).then(r=>r.text()),
        each,
        FileSystem.pwd + "/vendored/",
        {topLevel:true},
    )
}

await FileSystem.write({path:`${FileSystem.thisFolder}/../vendored/node.js/process.js`, data: `export default { argv: ["","",], }`, overwrite: true})


// 
// generate helper folders
// 
for (const eachGroup of ["@codemirror/legacy-modes/mode"]) {
    var items = await FileSystem.listFileItemsIn(`${FileSystem.thisFolder}/../vendored/esm.sh/${eachGroup}`)
    var names = items.filter(each=>!each.name.includes("@")).map(each=>each.name)
    for (let each of names) {
        try {
            const exportedThings = await import(`${FileSystem.thisFolder}/../vendored/esm.sh/${eachGroup}/${each}.js`)
            const keys = Object.keys(exportedThings).filter(each=>each != "default")
            await FileSystem.write({path:`${FileSystem.thisFolder}/../@codemirror/${each}.js`, data: `
                import { StreamLanguage } from "./language.js"
                import {${keys.map(eachKey=>`${eachKey} as _${eachKey}`).join(", ")}} from "./${each}.js"
                ${keys.map(each=>`export const ${each} = StreamLanguage.define(_${each})`).join("\n")}
            `.trim().replace(/\n\s+/g,"\n"), overwrite: true})
        } catch (error) {
            console.warn(error)
        }
    }
}
for (const eachGroup of ["@codemirror","@lezer","@replit","@langchain","@cookshack"]) {
    var items = await FileSystem.listFileItemsIn(`${FileSystem.thisFolder}/../vendored/esm.sh/${eachGroup}`)
    var names = items.filter(each=>!each.name.includes("@")).map(each=>each.name)
    Deno.mkdirSync(`./${eachGroup}/`, { recursive: true })
    for (let each of names) {
        if (eachGroup != "@codemirror" && each.includes("-lang-")) {
            await FileSystem.write({path:`${FileSystem.thisFolder}/../@codemirror/${each.replace(/(.+)-lang-(.+)/g,"lang-$2")}.js`, data: `export * from "../vendored/esm.sh/${eachGroup}/${each}.js"`, overwrite: true})
        }
        await FileSystem.write({path:`${FileSystem.thisFolder}/../${eachGroup}/${each}.js`, data: `export * from "../vendored/esm.sh/${eachGroup}/${each}.js"`, overwrite: true})
    }
}