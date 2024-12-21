
// https://cdn.jsdelivr.net/npm/@uiw/codemirror-theme-nord@4.23.6/esm/index.js

export const defaultSettings = {
  background: '#2e3440',
  foreground: '#FFFFFF',
  caret: '#FFFFFF',
  selection: '#00000073',
  selectionMatch: '#00000073',
  gutterBackground: '#2e3440',
  gutterForeground: '#4c566a',
  gutterActiveForeground: '#d8dee9',
  lineHighlight: '#4c566a29'
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
          color: '#5e81ac'
        }, {
          tag: [t.name, t.deleted, t.character, t.propertyName, t.macroName],
          color: '#88c0d0'
        }, {
          tag: [t.variableName],
          color: '#8fbcbb'
        }, {
          tag: [t.function(t.variableName)],
          color: '#8fbcbb'
        }, {
          tag: [t.labelName],
          color: '#81a1c1'
        }, {
          tag: [t.color, t.constant(t.name), t.standard(t.name)],
          color: '#5e81ac'
        }, {
          tag: [t.definition(t.name), t.separator],
          color: '#a3be8c'
        }, {
          tag: [t.brace],
          color: '#8fbcbb'
        }, {
          tag: [t.annotation],
          color: '#d30102'
        }, {
          tag: [t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace],
          color: '#b48ead'
        }, {
          tag: [t.typeName, t.className],
          color: '#ebcb8b'
        }, {
          tag: [t.operator, t.operatorKeyword],
          color: '#a3be8c'
        }, {
          tag: [t.tagName],
          color: '#b48ead'
        }, {
          tag: [t.squareBracket],
          color: '#bf616a'
        }, {
          tag: [t.angleBracket],
          color: '#d08770'
        }, {
          tag: [t.attributeName],
          color: '#ebcb8b'
        }, {
          tag: [t.regexp],
          color: '#5e81ac'
        }, {
          tag: [t.quote],
          color: '#b48ead'
        }, {
          tag: [t.string],
          color: '#a3be8c'
        }, {
          tag: t.link,
          color: '#a3be8c',
          textDecoration: 'underline',
          textUnderlinePosition: 'under'
        }, {
          tag: [t.url, t.escape, t.special(t.string)],
          color: '#8fbcbb'
        }, {
          tag: [t.meta],
          color: '#88c0d0'
        }, {
          tag: [t.monospace],
          color: '#d8dee9',
          fontStyle: 'italic'
        }, {
          tag: [t.comment],
          color: '#4c566a',
          fontStyle: 'italic'
        }, {
          tag: t.strong,
          fontWeight: 'bold',
          color: '#5e81ac'
        }, {
          tag: t.emphasis,
          fontStyle: 'italic',
          color: '#5e81ac'
        }, {
          tag: t.strikethrough,
          textDecoration: 'line-through'
        }, {
          tag: t.heading,
          fontWeight: 'bold',
          color: '#5e81ac'
        }, {
          tag: t.special(t.heading1),
          fontWeight: 'bold',
          color: '#5e81ac'
        }, {
          tag: t.heading1,
          fontWeight: 'bold',
          color: '#5e81ac'
        }, {
          tag: [t.heading2, t.heading3, t.heading4],
          fontWeight: 'bold',
          color: '#5e81ac'
        }, {
          tag: [t.heading5, t.heading6],
          color: '#5e81ac'
        }, {
          tag: [t.atom, t.bool, t.special(t.variableName)],
          color: '#d08770'
        }, {
          tag: [t.processingInstruction, t.inserted],
          color: '#8fbcbb'
        }, {
          tag: [t.contentSeparator],
          color: '#ebcb8b'
        }, {
          tag: t.invalid,
          color: '#434c5e',
          borderBottom: "1px dotted #d30102"
        }
    ].map((each)=>mutateThemeStyles(each, t)).filter(each=>each)
    return {
        variant: variantOverride,
        settings: Object.assign({}, defaultSettings, settings),
        styles: [...style, ...styles.map(each=>(each instanceof Function)?each(t):each)],
    }
}
export default theme