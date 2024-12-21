
// https://cdn.jsdelivr.net/npm/@uiw/codemirror-theme-duotone@4.23.6/esm/light.js

export const defaultSettings = {
  background: '#faf8f5',
  foreground: '#b29762',
  caret: '#93abdc',
  selection: '#e3dcce',
  selectionMatch: '#e3dcce',
  gutterBackground: '#faf8f5',
  gutterForeground: '#cdc4b1',
  gutterBorder: 'transparent',
  lineHighlight: '#ddceb154'
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
          tag: [t.comment, t.bracket],
          color: '#b6ad9a'
        }, {
          tag: [t.atom, t.number, t.keyword, t.link, t.attributeName, t.quote],
          color: '#063289'
        }, {
          tag: [t.emphasis, t.heading, t.tagName, t.propertyName, t.variableName],
          color: '#2d2006'
        }, {
          tag: [t.typeName, t.url, t.string],
          color: '#896724'
        }, {
          tag: [t.operator, t.string],
          color: '#1659df'
        }, {
          tag: [t.propertyName],
          color: '#b29762'
        }, {
          tag: [t.unit, t.punctuation],
          color: '#063289'
        }
    ].map((each)=>mutateThemeStyles(each, t)).filter(each=>each)
    return {
        variant: variantOverride,
        settings: Object.assign({}, defaultSettings, settings),
        styles: [...style, ...styles.map(each=>(each instanceof Function)?each(t):each)],
    }
}
export default theme