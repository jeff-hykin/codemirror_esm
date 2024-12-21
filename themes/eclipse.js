
// https://cdn.jsdelivr.net/npm/@uiw/codemirror-theme-eclipse@4.23.6/esm/index.js

export const defaultSettings = {
  background: '#fff',
  foreground: '#000',
  caret: '#FFFFFF',
  selection: '#d7d4f0',
  selectionMatch: '#d7d4f0',
  gutterBackground: '#f7f7f7',
  gutterForeground: '#999',
  lineHighlight: '#006fff1c',
  gutterBorder: 'transparent'
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
          tag: [t.comment],
          color: '#3F7F5F'
        }, {
          tag: [t.documentMeta],
          color: '#FF1717'
        }, {
          tag: t.keyword,
          color: '#7F0055',
          fontWeight: 'bold'
        }, {
          tag: t.atom,
          color: '#00f'
        }, {
          tag: t.number,
          color: '#164'
        }, {
          tag: t.propertyName,
          color: '#164'
        }, {
          tag: [t.variableName, t.definition(t.variableName)],
          color: '#0000C0'
        }, {
          tag: t.function(t.variableName),
          color: '#0000C0'
        }, {
          tag: t.string,
          color: '#2A00FF'
        }, {
          tag: t.operator,
          color: 'black'
        }, {
          tag: t.tagName,
          color: '#170'
        }, {
          tag: t.attributeName,
          color: '#00c'
        }, {
          tag: t.link,
          color: '#219'
        }
    ].map((each)=>mutateThemeStyles(each, t)).filter(each=>each)
    return {
        variant: variantOverride,
        settings: Object.assign({}, defaultSettings, settings),
        styles: [...style, ...styles.map(each=>(each instanceof Function)?each(t):each)],
    }
}
export default theme