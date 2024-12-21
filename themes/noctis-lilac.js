
// https://cdn.jsdelivr.net/npm/@uiw/codemirror-theme-noctis-lilac@4.23.6/esm/index.js

export const defaultSettings = {
  background: '#f2f1f8',
  foreground: '#0c006b',
  caret: '#5c49e9',
  selection: '#d5d1f2',
  selectionMatch: '#d5d1f2',
  gutterBackground: '#f2f1f8',
  gutterForeground: '#0c006b70',
  lineHighlight: '#16067911'
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
          tag: t.comment,
          color: '#9995b7'
        }, {
          tag: t.keyword,
          color: '#ff5792',
          fontWeight: 'bold'
        }, {
          tag: [t.definitionKeyword, t.modifier],
          color: '#ff5792'
        }, {
          tag: [t.className, t.tagName, t.definition(t.typeName)],
          color: '#0094f0'
        }, {
          tag: [t.number, t.bool, t.null, t.special(t.brace)],
          color: '#5842ff'
        }, {
          tag: [t.definition(t.propertyName), t.function(t.variableName)],
          color: '#0095a8'
        }, {
          tag: t.typeName,
          color: '#b3694d'
        }, {
          tag: [t.propertyName, t.variableName],
          color: '#fa8900'
        }, {
          tag: t.operator,
          color: '#ff5792'
        }, {
          tag: t.self,
          color: '#e64100'
        }, {
          tag: [t.string, t.regexp],
          color: '#00b368'
        }, {
          tag: [t.paren, t.bracket],
          color: '#0431fa'
        }, {
          tag: t.labelName,
          color: '#00bdd6'
        }, {
          tag: t.attributeName,
          color: '#e64100'
        }, {
          tag: t.angleBracket,
          color: '#9995b7'
        }
    ].map((each)=>mutateThemeStyles(each, t)).filter(each=>each)
    return {
        variant: variantOverride,
        settings: Object.assign({}, defaultSettings, settings),
        styles: [...style, ...styles.map(each=>(each instanceof Function)?each(t):each)],
    }
}
export default theme