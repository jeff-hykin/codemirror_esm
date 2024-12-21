
// https://cdn.jsdelivr.net/npm/@uiw/codemirror-theme-github@4.23.6/esm/light.js

export const defaultSettings = {
  background: '#fff',
  foreground: '#24292e',
  selection: '#BBDFFF',
  selectionMatch: '#BBDFFF',
  gutterBackground: '#fff',
  gutterForeground: '#6e7781'
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
export const theme = ({ settings={}, styles=[], mutateThemeStyles=(style, tags)=>style, variantOverride="light", }={}) => tags => {
    const t = tags
    if (styles instanceof Function) {
        styles = styles(t)
    }
    const style = [
        {
          tag: [t.standard(t.tagName), t.tagName],
          color: '#116329'
        }, {
          tag: [t.comment, t.bracket],
          color: '#6a737d'
        }, {
          tag: [t.className, t.propertyName],
          color: '#6f42c1'
        }, {
          tag: [t.variableName, t.attributeName, t.number, t.operator],
          color: '#005cc5'
        }, {
          tag: [t.keyword, t.typeName, t.typeOperator, t.typeName],
          color: '#d73a49'
        }, {
          tag: [t.string, t.meta, t.regexp],
          color: '#032f62'
        }, {
          tag: [t.name, t.quote],
          color: '#22863a'
        }, {
          tag: [t.heading, t.strong],
          color: '#24292e',
          fontWeight: 'bold'
        }, {
          tag: [t.emphasis],
          color: '#24292e',
          fontStyle: 'italic'
        }, {
          tag: [t.deleted],
          color: '#b31d28',
          backgroundColor: 'ffeef0'
        }, {
          tag: [t.atom, t.bool, t.special(t.variableName)],
          color: '#e36209'
        }, {
          tag: [t.url, t.escape, t.regexp, t.link],
          color: '#032f62'
        }, {
          tag: t.link,
          textDecoration: 'underline'
        }, {
          tag: t.strikethrough,
          textDecoration: 'line-through'
        }, {
          tag: t.invalid,
          color: '#cb2431'
        }
    ].map((each)=>mutateThemeStyles(each, t)).filter(each=>each)
    return {
        variant: variantOverride,
        settings: Object.assign({}, defaultSettings, settings),
        styles: [...style, ...styles.map(each=>(each instanceof Function)?each(t):each)],
    }
}
export default theme