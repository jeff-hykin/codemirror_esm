
// https://cdn.jsdelivr.net/npm/@uiw/codemirror-theme-okaidia@4.23.6/esm/index.js

export const defaultSettings = {
  background: '#272822',
  foreground: '#FFFFFF',
  caret: '#FFFFFF',
  selection: '#49483E',
  selectionMatch: '#49483E',
  gutterBackground: '#272822',
  gutterForeground: '#FFFFFF70',
  lineHighlight: '#0000003b'
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
          tag: [t.comment, t.documentMeta],
          color: '#8292a2'
        }, {
          tag: [t.number, t.bool, t.null, t.atom],
          color: '#ae81ff'
        }, {
          tag: [t.attributeValue, t.className, t.name],
          color: '#e6db74'
        }, {
          tag: [t.propertyName, t.attributeName],
          color: '#a6e22e'
        }, {
          tag: [t.variableName],
          color: '#9effff'
        }, {
          tag: [t.squareBracket],
          color: '#bababa'
        }, {
          tag: [t.string, t.special(t.brace)],
          color: '#e6db74'
        }, {
          tag: [t.regexp, t.className, t.typeName, t.definition(t.typeName)],
          color: '#66d9ef'
        }, {
          tag: [t.definition(t.variableName), t.definition(t.propertyName), t.function(t.variableName)],
          color: '#fd971f'
        },
        // { tag: t.keyword, color: '#f92672' },
        {
          tag: [t.keyword, t.definitionKeyword, t.modifier, t.tagName, t.angleBracket],
          color: '#f92672'
        }
    ].map((each)=>mutateThemeStyles(each, t)).filter(each=>each)
    return {
        variant: variantOverride,
        settings: Object.assign({}, defaultSettings, settings),
        styles: [...style, ...styles.map(each=>(each instanceof Function)?each(t):each)],
    }
}
export default theme