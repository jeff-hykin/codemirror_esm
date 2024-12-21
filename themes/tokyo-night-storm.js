
// https://cdn.jsdelivr.net/npm/@uiw/codemirror-theme-tokyo-night-storm@4.23.6/esm/index.js

export const defaultSettings = {
  background: '#24283b',
  foreground: '#7982a9',
  caret: '#c0caf5',
  selection: '#6f7bb630',
  selectionMatch: '#343b5f',
  gutterBackground: '#24283b',
  gutterForeground: '#7982a9',
  gutterBorder: 'transparent',
  lineHighlight: '#292e427a'
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
          color: '#bb9af7'
        }, {
          tag: [t.name, t.deleted, t.character, t.macroName],
          color: '#c0caf5'
        }, {
          tag: [t.propertyName],
          color: '#7aa2f7'
        }, {
          tag: [t.processingInstruction, t.string, t.inserted, t.special(t.string)],
          color: '#9ece6a'
        }, {
          tag: [t.function(t.variableName), t.labelName],
          color: '#7aa2f7'
        }, {
          tag: [t.color, t.constant(t.name), t.standard(t.name)],
          color: '#bb9af7'
        }, {
          tag: [t.definition(t.name), t.separator],
          color: '#c0caf5'
        }, {
          tag: [t.className],
          color: '#c0caf5'
        }, {
          tag: [t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace],
          color: '#ff9e64'
        }, {
          tag: [t.typeName],
          color: '#2ac3de',
          fontStyle: '#2ac3de'
        }, {
          tag: [t.operator, t.operatorKeyword],
          color: '#bb9af7'
        }, {
          tag: [t.url, t.escape, t.regexp, t.link],
          color: '#b4f9f8'
        }, {
          tag: [t.meta, t.comment],
          color: '#565f89'
        }, {
          tag: t.strong,
          fontWeight: 'bold'
        }, {
          tag: t.emphasis,
          fontStyle: 'italic'
        }, {
          tag: t.link,
          textDecoration: 'underline'
        }, {
          tag: t.heading,
          fontWeight: 'bold',
          color: '#89ddff'
        }, {
          tag: [t.atom, t.bool, t.special(t.variableName)],
          color: '#c0caf5'
        }, {
          tag: t.invalid,
          color: '#ff5370'
        }, {
          tag: t.strikethrough,
          textDecoration: 'line-through'
        }
    ].map((each)=>mutateThemeStyles(each, t)).filter(each=>each)
    return {
        variant: variantOverride,
        settings: Object.assign({}, defaultSettings, settings),
        styles: [...style, ...styles.map(each=>(each instanceof Function)?each(t):each)],
    }
}
export default theme