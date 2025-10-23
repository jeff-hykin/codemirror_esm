#!/usr/bin/env -S deno run --allow-all
import { isValidIdentifier } from 'https://esm.sh/gh/jeff-hykin/good-js@1.18.2.0/source/flattened/is_valid_identifier.js'
import CM from '../main.js'

Deno.mkdirSync(`./codemirror/`, { recursive: true })
for (const [key, value] of Object.entries(CM)) {
    if (key.startsWith("@codemirror/")) {
        const dirName = key.replace(/^@codemirror\//,"")
        let chunks = [
            `import CM from '../main.js'`,
            `const value = CM[${JSON.stringify(key)}]`,
            `export default value`,
        ]
        for (const [key2, value2] of Object.entries(value)) {
            if (isValidIdentifier(key2)) {
                chunks.push(`export const ${key2} = value.${key2}`)
            }
        }
        Deno.writeTextFileSync(`./codemirror/${dirName}.js`, chunks.join("\n"))
    }
}