
// https://cdn.jsdelivr.net/npm/@uiw/codemirror-theme-basic@4.23.6/esm/dark.js

export const defaultSettings = {
  background: '#2E3235',
  foreground: '#DDDDDD',
  caret: '#DDDDDD',
  selection: '#202325',
  selectionMatch: '#202325',
  gutterBackground: '#292d30',
  gutterForeground: '#808080',
  gutterBorder: '1px solid #ffffff10',
  lineHighlight: '#B9D2FF30'
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
          color: '#fda331'
        }, {
          tag: [t.name, t.deleted, t.character, t.propertyName, t.macroName],
          color: '#b5bd68'
        }, {
          tag: [t.variableName],
          color: '#6fb3d2'
        }, {
          tag: [t.function(t.variableName)],
          color: '#fda331'
        }, {
          tag: [t.labelName],
          color: '#fc6d24'
        }, {
          tag: [t.color, t.constant(t.name), t.standard(t.name)],
          color: '#fda331'
        }, {
          tag: [t.definition(t.name), t.separator],
          color: '#cc99cc'
        }, {
          tag: [t.brace],
          color: '#cc99cc'
        }, {
          tag: [t.annotation],
          color: '#fc6d24'
        }, {
          tag: [t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace],
          color: '#fda331'
        }, {
          tag: [t.typeName, t.className],
          color: '#6fb3d2'
        }, {
          tag: [t.operator, t.operatorKeyword],
          color: '#cc99cc'
        }, {
          tag: [t.tagName],
          color: '#fda331'
        }, {
          tag: [t.squareBracket],
          color: '#cc99cc'
        }, {
          tag: [t.angleBracket],
          color: '#cc99cc'
        }, {
          tag: [t.attributeName],
          color: '#6fb3d2'
        }, {
          tag: [t.regexp],
          color: '#fda331'
        }, {
          tag: [t.quote],
          color: '#DDDDDD'
        }, {
          tag: [t.string],
          color: '#b5bd68'
        }, {
          tag: t.link,
          color: '#6987AF',
          textDecoration: 'underline',
          textUnderlinePosition: 'under'
        }, {
          tag: [t.url, t.escape, t.special(t.string)],
          color: '#8abeb7'
        }, {
          tag: [t.meta],
          color: '#A54543'
        }, {
          tag: [t.comment],
          color: '#808080',
          fontStyle: 'italic'
        }, {
          tag: t.monospace,
          color: '#DDDDDD'
        }, {
          tag: t.strong,
          fontWeight: 'bold',
          color: '#fda331'
        }, {
          tag: t.emphasis,
          fontStyle: 'italic',
          color: '#6fb3d2'
        }, {
          tag: t.strikethrough,
          textDecoration: 'line-through'
        }, {
          tag: t.heading,
          fontWeight: 'bold',
          color: '#DDDDDD'
        }, {
          tag: t.special(t.heading1),
          fontWeight: 'bold',
          color: '#DDDDDD'
        }, {
          tag: t.heading1,
          fontWeight: 'bold',
          color: '#DDDDDD'
        }, {
          tag: [t.heading2, t.heading3, t.heading4],
          fontWeight: 'bold',
          color: '#DDDDDD'
        }, {
          tag: [t.heading5, t.heading6],
          color: '#DDDDDD'
        }, {
          tag: [t.atom, t.bool, t.special(t.variableName)],
          color: '#8abeb7'
        }, {
          tag: [t.processingInstruction, t.inserted],
          color: '#8abeb7'
        }, {
          tag: [t.contentSeparator],
          color: '#6fb3d2'
        }, {
          tag: t.invalid,
          color: '#B9D2FF',
          borderBottom: "1px dotted " + '#fc6d24'
        }
    ].map((each)=>mutateThemeStyles(each, t)).filter(each=>each)
    return {
        variant: variantOverride,
        settings: Object.assign({}, defaultSettings, settings),
        styles: [...style, ...styles.map(each=>(each instanceof Function)?each(t):each)],
    }
}
export default theme