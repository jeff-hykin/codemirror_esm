import { FileSystem, glob } from "https://deno.land/x/quickr@0.6.72/main/file_system.js"
import { run, hasCommand, throwIfFails, zipInto, mergeInto, returnAsString, Timeout, Env, Cwd, Stdin, Stdout, Stderr, Out, Overwrite, AppendTo, } from "https://deno.land/x/quickr@0.6.72/main/run.js"
import { Console, clearAnsiStylesFrom, black, white, red, green, blue, yellow, cyan, magenta, lightBlack, lightWhite, lightRed, lightGreen, lightBlue, lightYellow, lightMagenta, lightCyan, blackBackground, whiteBackground, redBackground, greenBackground, blueBackground, yellowBackground, magentaBackground, cyanBackground, lightBlackBackground, lightRedBackground, lightGreenBackground, lightYellowBackground, lightBlueBackground, lightMagentaBackground, lightCyanBackground, lightWhiteBackground, bold, reset, dim, italic, underline, inverse, strikethrough, gray, grey, lightGray, lightGrey, grayBackground, greyBackground, lightGrayBackground, lightGreyBackground, } from "https://deno.land/x/quickr@0.6.72/main/console.js"

function reformattedTheme(url, name) {
    return fetch(url)
        .then(r => r.text())
        .then(string => {
            const defaultSettingsString = (string.match(/export var defaultSettings.+(\{(?:a|[^a])*?\n\});/)||{})[1]
            const styleString = (string.match(/export var \w+[a-z]Style.+(\[(?:a|[^a])*?\n\}?\]);/)||{})[1]
            if (!defaultSettingsString || !styleString) {
                console.warn(`Couldn't find defaultSettings and/or styleString for ${name||url}`)
                return
            }
            return `
export var defaultSettings = ${defaultSettingsString}
export default ({ tags, createTheme }) => ({ theme="dark", settings={}, styles=[], styleChanger=(style)=>style }={}) => {
    const t = tags
    export var style = ${styleString}.map(styleChanger).filter(each=>each)
    return createTheme({
        theme: options.theme,
        settings: Object.assign({}, defaultSettings, settings),
        styles: [...style, ...styles],
    })
}`
        })
}


const themeNames = [
    "abcdef",
    "abyss",
    "androidstudio",
    "andromeda",
    "atomone",
    "aura",
    "basic/light",
    "basic/dark",
    "bbedit",
    "bespin",
    "console/dark",
    "console/light",
    "copilot",
    "darcula",
    "dracula",
    "duotone/light",
    "duotone/dark",
    "eclipse",
    "github/light",
    "github/dark",
    "gruvbox/dark",
    "gruvbox/light",
    "kimbie",
    "material/light",
    "material/dark",
    "monokai",
    "monokai-dimmed",
    "noctis-lilac",
    "nord",
    "okaidia",
    "red",
    "quietlight",
    "solarized/light",
    "solarized/dark",
    "sublime",
    "tokyo-night",
    "tokyo-night-storm",
    "tokyo-night-day",
    "tomorrow-night-blue",
    "vscode/dark",
    "vscode/light",
    "white/light",
    "white/dark",
    "xcode/light",
    "xcode/dark",
]

themeNames.map(eachName=>reformattedTheme(`https://cdn.jsdelivr.net/npm/@uiw/codemirror-theme-${eachName}@4.23.6/esm/index.js`).then(each=>each&&FileSystem.write({
    data: each,
    path: `${FileSystem.thisFolder}/../themes/${eachName}.js`,
})))