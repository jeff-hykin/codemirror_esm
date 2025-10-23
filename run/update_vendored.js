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
    'https://esm.sh/@codemirror/lang-javascript?dev',
    'https://esm.sh/@codemirror/lang-java?dev',
    'https://esm.sh/@codemirror/lang-json?dev',
    'https://esm.sh/@codemirror/lang-cpp?dev',
    'https://esm.sh/@codemirror/lang-php?dev',
    'https://esm.sh/@codemirror/lang-python?dev',
    'https://esm.sh/@codemirror/lang-css?dev',
    'https://esm.sh/@codemirror/lang-sass?dev',
    'https://esm.sh/@codemirror/lang-html?dev',
    'https://esm.sh/@codemirror/lang-sql?dev',
    'https://esm.sh/@codemirror/lang-rust?dev',
    'https://esm.sh/@codemirror/lang-xml?dev',
    'https://esm.sh/@codemirror/lang-markdown?dev',
    'https://esm.sh/@codemirror/lang-lezer?dev',
    'https://esm.sh/@codemirror/lang-wast?dev',
    'https://esm.sh/@codemirror/lang-angular?dev',
    'https://esm.sh/@codemirror/lang-vue?dev',
    'https://esm.sh/@codemirror/lang-liquid?dev',
    'https://esm.sh/@codemirror/lang-less?dev',
    'https://esm.sh/@codemirror/lang-yaml?dev',
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
// generate codemirror folder
// 
var items = await FileSystem.listFileItemsIn(`${FileSystem.thisFolder}/../vendored/esm.sh/@codemirror`)
var names = items.filter(each=>!each.name.includes("@")).map(each=>each.name)

Deno.mkdirSync(`./@codemirror/`, { recursive: true })
for (let each of names) {
    await FileSystem.write({path:`${FileSystem.thisFolder}/../@codemirror/${each}.js`, data: `export * from "./vendored/esm.sh/@codemirror/${each}.js"`, overwrite: true})
}

var items = await FileSystem.listFileItemsIn(`${FileSystem.thisFolder}/../vendored/esm.sh/@lezer`)
var names = items.filter(each=>!each.name.includes("@")).map(each=>each.name)

Deno.mkdirSync(`./@lezer/`, { recursive: true })
for (let each of names) {
    await FileSystem.write({path:`${FileSystem.thisFolder}/../@lezer/${each}.js`, data: `export * from "./vendored/esm.sh/@lezer/${each}.js"`, overwrite: true})
}