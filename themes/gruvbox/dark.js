
// https://cdn.jsdelivr.net/npm/@uiw/codemirror-theme-gruvbox-dark@4.23.6/esm/dark.js

export const defaultSettings = {
  background: '#282828',
  foreground: '#ebdbb2',
  caret: '#ebdbb2',
  selection: '#b99d555c',
  selectionMatch: '#b99d555c',
  lineHighlight: '#baa1602b',
  gutterBackground: '#282828',
  gutterForeground: '#7c6f64'
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
          tag: t.keyword,
          color: '#fb4934'
        }, {
          tag: [t.name, t.deleted, t.character, t.propertyName, t.macroName],
          color: '#8ec07c'
        }, {
          tag: [t.variableName],
          color: '#83a598'
        }, {
          tag: [t.function(t.variableName)],
          color: '#b8bb26',
          fontStyle: 'bold'
        }, {
          tag: [t.labelName],
          color: '#ebdbb2'
        }, {
          tag: [t.color, t.constant(t.name), t.standard(t.name)],
          color: '#d3869b'
        }, {
          tag: [t.definition(t.name), t.separator],
          color: '#ebdbb2'
        }, {
          tag: [t.brace],
          color: '#ebdbb2'
        }, {
          tag: [t.annotation],
          color: '#fb4934d'
        }, {
          tag: [t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace],
          color: '#d3869b'
        }, {
          tag: [t.typeName, t.className],
          color: '#fabd2f'
        }, {
          tag: [t.operator, t.operatorKeyword],
          color: '#fb4934'
        }, {
          tag: [t.tagName],
          color: '#8ec07c',
          fontStyle: 'bold'
        }, {
          tag: [t.squareBracket],
          color: '#fe8019'
        }, {
          tag: [t.angleBracket],
          color: '#83a598'
        }, {
          tag: [t.attributeName],
          color: '#8ec07c'
        }, {
          tag: [t.regexp],
          color: '#8ec07c'
        }, {
          tag: [t.quote],
          color: '#928374'
        }, {
          tag: [t.string],
          color: '#ebdbb2'
        }, {
          tag: t.link,
          color: '#a89984',
          textDecoration: 'underline',
          textUnderlinePosition: 'under'
        }, {
          tag: [t.url, t.escape, t.special(t.string)],
          color: '#d3869b'
        }, {
          tag: [t.meta],
          color: '#fabd2f'
        }, {
          tag: [t.comment],
          color: '#928374',
          fontStyle: 'italic'
        }, {
          tag: t.strong,
          fontWeight: 'bold',
          color: '#fe8019'
        }, {
          tag: t.emphasis,
          fontStyle: 'italic',
          color: '#b8bb26'
        }, {
          tag: t.strikethrough,
          textDecoration: 'line-through'
        }, {
          tag: t.heading,
          fontWeight: 'bold',
          color: '#b8bb26'
        }, {
          tag: [t.heading1, t.heading2],
          fontWeight: 'bold',
          color: '#b8bb26'
        }, {
          tag: [t.heading3, t.heading4],
          fontWeight: 'bold',
          color: '#fabd2f'
        }, {
          tag: [t.heading5, t.heading6],
          color: '#fabd2f'
        }, {
          tag: [t.atom, t.bool, t.special(t.variableName)],
          color: '#d3869b'
        }, {
          tag: [t.processingInstruction, t.inserted],
          color: '#83a598'
        }, {
          tag: [t.contentSeparator],
          color: '#fb4934'
        }, {
          tag: t.invalid,
          color: '#fe8019',
          borderBottom: "1px dotted #fb4934d"
        }
    ].map((each)=>mutateThemeStyles(each, t)).filter(each=>each)
    return {
        variant: variantOverride,
        settings: Object.assign({}, defaultSettings, settings),
        styles: [...style, ...styles.map(each=>(each instanceof Function)?each(t):each)],
    }
}
export default theme