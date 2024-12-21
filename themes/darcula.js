
// https://cdn.jsdelivr.net/npm/@uiw/codemirror-theme-darcula@4.23.6/esm/index.js

export const defaultSettings = {
  background: '#2B2B2B',
  foreground: '#f8f8f2',
  caret: '#FFFFFF',
  selection: 'rgba(255, 255, 255, 0.1)',
  selectionMatch: 'rgba(255, 255, 255, 0.2)',
  gutterBackground: 'rgba(255, 255, 255, 0.1)',
  gutterForeground: '#999',
  gutterBorder: 'transparent',
  lineHighlight: 'rgba(255, 255, 255, 0.1)'
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
          tag: [t.atom, t.number],
          color: '#bd93f9'
        }, {
          tag: [t.comment],
          color: '#61A151'
        }, {
          tag: [t.string],
          color: '#6A8759'
        }, {
          tag: [t.variableName, t.operator],
          color: '#A9B7C6'
        }, {
          tag: [t.meta, t.className],
          color: '#A9B7C6'
        }, {
          tag: [t.propertyName],
          color: '#FFC66D'
        }, {
          tag: [t.keyword],
          color: '#CC7832'
        }, {
          tag: [t.tagName],
          color: '#ff79c6'
        }, {
          tag: [t.typeName],
          color: '#ffb86c'
        }
    ].map((each)=>mutateThemeStyles(each, t)).filter(each=>each)
    return {
        variant: variantOverride,
        settings: Object.assign({}, defaultSettings, settings),
        styles: [...style, ...styles.map(each=>(each instanceof Function)?each(t):each)],
    }
}
export default theme