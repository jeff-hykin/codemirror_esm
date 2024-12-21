
// https://cdn.jsdelivr.net/npm/@uiw/codemirror-theme-material@4.23.6/esm/dark.js

export const defaultSettings = {
  background: '#2e3235',
  foreground: '#bdbdbd',
  caret: '#a0a4ae',
  selection: '#d7d4f063',
  selectionMatch: '#d7d4f063',
  gutterBackground: '#2e3235',
  gutterForeground: '#999',
  gutterActiveForeground: '#4f5b66',
  lineHighlight: '#545b6130'
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
          color: '#cf6edf'
        }, {
          tag: [t.name, t.deleted, t.character, t.macroName],
          color: '#56c8d8'
        }, {
          tag: [t.propertyName],
          color: '#facf4e'
        }, {
          tag: [t.variableName],
          color: '#bdbdbd'
        }, {
          tag: [t.function(t.variableName)],
          color: '#56c8d8'
        }, {
          tag: [t.labelName],
          color: '#cf6edf'
        }, {
          tag: [t.color, t.constant(t.name), t.standard(t.name)],
          color: '#facf4e'
        }, {
          tag: [t.definition(t.name), t.separator],
          color: '#fa5788'
        }, {
          tag: [t.brace],
          color: '#cf6edf'
        }, {
          tag: [t.annotation],
          color: '#ff5f52'
        }, {
          tag: [t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace],
          color: '#ffad42'
        }, {
          tag: [t.typeName, t.className],
          color: '#ffad42'
        }, {
          tag: [t.operator, t.operatorKeyword],
          color: '#7186f0'
        }, {
          tag: [t.tagName],
          color: '#99d066'
        }, {
          tag: [t.squareBracket],
          color: '#ff5f52'
        }, {
          tag: [t.angleBracket],
          color: '#606f7a'
        }, {
          tag: [t.attributeName],
          color: '#bdbdbd'
        }, {
          tag: [t.regexp],
          color: '#ff5f52'
        }, {
          tag: [t.quote],
          color: '#6abf69'
        }, {
          tag: [t.string],
          color: '#99d066'
        }, {
          tag: t.link,
          color: '#56c8d8',
          textDecoration: 'underline',
          textUnderlinePosition: 'under'
        }, {
          tag: [t.url, t.escape, t.special(t.string)],
          color: '#facf4e'
        }, {
          tag: [t.meta],
          color: '#707d8b'
        }, {
          tag: [t.comment],
          color: '#707d8b',
          fontStyle: 'italic'
        }, {
          tag: t.monospace,
          color: '#bdbdbd'
        }, {
          tag: t.strong,
          fontWeight: 'bold',
          color: '#ff5f52'
        }, {
          tag: t.emphasis,
          fontStyle: 'italic',
          color: '#99d066'
        }, {
          tag: t.strikethrough,
          textDecoration: 'line-through'
        }, {
          tag: t.heading,
          fontWeight: 'bold',
          color: '#facf4e'
        }, {
          tag: t.heading1,
          fontWeight: 'bold',
          color: '#facf4e'
        }, {
          tag: [t.heading2, t.heading3, t.heading4],
          fontWeight: 'bold',
          color: '#facf4e'
        }, {
          tag: [t.heading5, t.heading6],
          color: '#facf4e'
        }, {
          tag: [t.atom, t.bool, t.special(t.variableName)],
          color: '#56c8d8'
        }, {
          tag: [t.processingInstruction, t.inserted],
          color: '#ff5f52'
        }, {
          tag: [t.contentSeparator],
          color: '#56c8d8'
        }, {
          tag: t.invalid,
          color: '#606f7a',
          borderBottom: "1px dotted #ff5f52"
        }
    ].map((each)=>mutateThemeStyles(each, t)).filter(each=>each)
    return {
        variant: variantOverride,
        settings: Object.assign({}, defaultSettings, settings),
        styles: [...style, ...styles.map(each=>(each instanceof Function)?each(t):each)],
    }
}
export default theme