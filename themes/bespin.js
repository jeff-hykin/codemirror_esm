
// https://cdn.jsdelivr.net/npm/@uiw/codemirror-theme-bespin@4.23.6/esm/index.js

export const defaultSettings = {
  background: '#28211c',
  foreground: '#9d9b97',
  caret: '#797977',
  selection: '#4f382b',
  selectionMatch: '#4f382b',
  gutterBackground: '#28211c',
  gutterForeground: '#666666',
  lineHighlight: '#ffffff1a'
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
          tag: [t.atom, t.number, t.link, t.bool],
          color: '#9b859d'
        }, {
          tag: t.comment,
          color: '#937121'
        }, {
          tag: [t.keyword, t.tagName],
          color: '#cf6a4c'
        }, {
          tag: t.string,
          color: '#f9ee98'
        }, {
          tag: t.bracket,
          color: '#9d9b97'
        }, {
          tag: [t.variableName],
          color: '#5ea6ea'
        }, {
          tag: t.definition(t.variableName),
          color: '#cf7d34'
        }, {
          tag: [t.function(t.variableName), t.className],
          color: '#cf7d34'
        }, {
          tag: [t.propertyName, t.attributeName],
          color: '#54be0d'
        }
    ].map((each)=>mutateThemeStyles(each, t)).filter(each=>each)
    return {
        variant: variantOverride,
        settings: Object.assign({}, defaultSettings, settings),
        styles: [...style, ...styles.map(each=>(each instanceof Function)?each(t):each)],
    }
}
export default theme