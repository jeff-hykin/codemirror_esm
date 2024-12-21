
// https://cdn.jsdelivr.net/npm/@uiw/codemirror-theme-abcdef@4.23.6/esm/index.js

export const defaultSettings = {
  background: '#0f0f0f',
  foreground: '#defdef',
  caret: '#00FF00',
  selection: '#515151',
  selectionMatch: '#515151',
  gutterBackground: '#555',
  gutterForeground: '#FFFFFF',
  lineHighlight: '#0a6bcb3d'
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
          color: 'darkgoldenrod',
          fontWeight: 'bold'
        }, {
          tag: t.atom,
          color: '#77F'
        }, {
          tag: t.comment,
          color: '#7a7b7c',
          fontStyle: 'italic'
        }, {
          tag: t.number,
          color: 'violet'
        }, {
          tag: t.definition(t.variableName),
          color: '#fffabc'
        }, {
          tag: t.variableName,
          color: '#abcdef'
        }, {
          tag: t.function(t.variableName),
          color: '#fffabc'
        }, {
          tag: t.typeName,
          color: '#FFDD44'
        }, {
          tag: t.tagName,
          color: '#def'
        }, {
          tag: t.string,
          color: '#2b4'
        }, {
          tag: t.meta,
          color: '#C9F'
        },
        // { tag: t.qualifier, color: '#FFF700' },
        // { tag: t.builtin, color: '#30aabc' },
        {
          tag: t.bracket,
          color: '#8a8a8a'
        }, {
          tag: t.attributeName,
          color: '#DDFF00'
        }, {
          tag: t.heading,
          color: 'aquamarine',
          fontWeight: 'bold'
        }, {
          tag: t.link,
          color: 'blueviolet',
          fontWeight: 'bold'
        }
    ].map((each)=>mutateThemeStyles(each, t)).filter(each=>each)
    return {
        variant: variantOverride,
        settings: Object.assign({}, defaultSettings, settings),
        styles: [...style, ...styles.map(each=>(each instanceof Function)?each(t):each)],
    }
}
export default theme