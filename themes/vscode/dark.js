
// https://cdn.jsdelivr.net/npm/@uiw/codemirror-theme-vscode@4.23.6/esm/dark.js

export const defaultSettings = {
  background: '#1e1e1e',
  foreground: '#9cdcfe',
  caret: '#c6c6c6',
  selection: '#6199ff2f',
  selectionMatch: '#72a1ff59',
  lineHighlight: '#ffffff0f',
  gutterBackground: '#1e1e1e',
  gutterForeground: '#838383',
  gutterActiveForeground: '#fff',
  fontFamily: 'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace'
}
/**
 * Instantiate a CodeMirror theme
 * 
 * @example
 * ```js
 * const themeConfig = theme({
 *   settings: {
 *     background: '#272C35',
 *     foreground: '#9d9b97',
 *     caret: '#797977',
 *     selection: '#3d4c64',
 *     selectionMatch: '#3d4c64',
 *     gutterBackground: '#272C35',
 *     gutterForeground: '#465063',
 *     gutterBorder: 'transparent',
 *     lineHighlight: '#2e3f5940'
 *   },
 *   // effectively delete the existing red styles
 *   mutateThemeStyles: (style, tags) => (style.color == 'red')?null:style,
 *   // add some new styles
 *   styles: (tags) => [
 *     {
 *       tag: [t.tagName, t.heading],
 *       color: '#e06c75',
 *     }, {
 *       tag: [t.function(t.variableName), t.function(t.propertyName), t.url, t.processingInstruction],
 *       color: 'hsl(207, 82%, 66%)',
 *     },
 *   ],
 * });
 * ```
 * @param {Object} [config={}] Configuration object
 * @param {Object} [config.settings={}] Override or add to the default theme settings
 * @param {Function|Array} [config.styles=[]] A function that takes `tags` as an argument and returns an array of styles. Can also be an array of functions, each of which takes a `tags` argument and returns a style (for composability).
 * @param {Function} [config.mutateThemeStyles=(style, tags)=>style] A function that can modify the theme styles, returning `null` will remove the style.
 * @param {string} [config.variantOverride="dark"] Note: only some themes support variants. For most this will simply change what variant the editor considers the theme to be.
 * 
 * @returns {Function} a function that takes `tags` as an argument, so that it can be used with any version of @lezer/highlight
 */
export const theme = ({ settings={}, styles=[], mutateThemeStyles=(style, tags)=>style, variantOverride="dark", }={}) => tags => {
    const t = tags
    if (styles instanceof Function) {
        styles = styles(t)
    }
    const style = [
        {
          tag: [t.keyword, t.operatorKeyword, t.modifier, t.color, t.constant(t.name), t.standard(t.name), t.standard(t.tagName), t.special(t.brace), t.atom, t.bool, t.special(t.variableName)],
          color: '#569cd6'
        }, {
          tag: [t.controlKeyword, t.moduleKeyword],
          color: '#c586c0'
        }, {
          tag: [t.name, t.deleted, t.character, t.macroName, t.propertyName, t.variableName, t.labelName, t.definition(t.name)],
          color: '#9cdcfe'
        }, {
          tag: t.heading,
          fontWeight: 'bold',
          color: '#9cdcfe'
        }, {
          tag: [t.typeName, t.className, t.tagName, t.number, t.changed, t.annotation, t.self, t.namespace],
          color: '#4ec9b0'
        }, {
          tag: [t.function(t.variableName), t.function(t.propertyName)],
          color: '#dcdcaa'
        }, {
          tag: [t.number],
          color: '#b5cea8'
        }, {
          tag: [t.operator, t.punctuation, t.separator, t.url, t.escape, t.regexp],
          color: '#d4d4d4'
        }, {
          tag: [t.regexp],
          color: '#d16969'
        }, {
          tag: [t.special(t.string), t.processingInstruction, t.string, t.inserted],
          color: '#ce9178'
        }, {
          tag: [t.angleBracket],
          color: '#808080'
        }, {
          tag: t.strong,
          fontWeight: 'bold'
        }, {
          tag: t.emphasis,
          fontStyle: 'italic'
        }, {
          tag: t.strikethrough,
          textDecoration: 'line-through'
        }, {
          tag: [t.meta, t.comment],
          color: '#6a9955'
        }, {
          tag: t.link,
          color: '#6a9955',
          textDecoration: 'underline'
        }, {
          tag: t.invalid,
          color: '#ff0000'
        }
    ].map((each)=>mutateThemeStyles(each, t)).filter(each=>each)
    return {
        variant: variantOverride,
        settings: Object.assign({}, defaultSettings, settings),
        styles: [...style, ...styles.map(each=>(each instanceof Function)?each(t):each)],
    }
}
export default theme