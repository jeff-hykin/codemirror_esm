
// https://cdn.jsdelivr.net/npm/@uiw/codemirror-theme-sublime@4.23.6/esm/index.js

export const defaultSettings = {
  background: '#303841',
  foreground: '#FFFFFF',
  caret: '#FBAC52',
  selection: '#4C5964',
  selectionMatch: '#3A546E',
  gutterBackground: '#303841',
  gutterForeground: '#FFFFFF70',
  lineHighlight: '#00000059'
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
          tag: [t.meta, t.comment],
          color: '#A2A9B5'
        }, {
          tag: [t.attributeName, t.keyword],
          color: '#B78FBA'
        }, {
          tag: t.function(t.variableName),
          color: '#5AB0B0'
        }, {
          tag: [t.string, t.regexp, t.attributeValue],
          color: '#99C592'
        }, {
          tag: t.operator,
          color: '#f47954'
        },
        // { tag: t.moduleKeyword, color: 'red' },
        {
          tag: [t.tagName, t.modifier],
          color: '#E35F63'
        }, {
          tag: [t.number, t.definition(t.tagName), t.className, t.definition(t.variableName)],
          color: '#fbac52'
        }, {
          tag: [t.atom, t.bool, t.special(t.variableName)],
          color: '#E35F63'
        }, {
          tag: t.variableName,
          color: '#539ac4'
        }, {
          tag: [t.propertyName, t.typeName],
          color: '#629ccd'
        }, {
          tag: t.propertyName,
          color: '#36b7b5'
        }
    ].map((each)=>mutateThemeStyles(each, t)).filter(each=>each)
    return {
        variant: variantOverride,
        settings: Object.assign({}, defaultSettings, settings),
        styles: [...style, ...styles.map(each=>(each instanceof Function)?each(t):each)],
    }
}
export default theme