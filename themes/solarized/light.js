
// https://cdn.jsdelivr.net/npm/@uiw/codemirror-theme-solarized@4.23.6/esm/light.js

export const defaultSettings = {
  background: c.background,
  foreground: c.foreground,
  caret: c.cursor,
  selection: c.selection,
  selectionMatch: c.selectionMatch,
  gutterBackground: c.background,
  gutterForeground: c.foreground,
  gutterBorder: 'transparent',
  lineHighlight: c.activeLine
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
          tag: t.keyword,
          color: c.keyword
        }, {
          tag: [t.name, t.deleted, t.character, t.macroName],
          color: c.variable
        }, {
          tag: [t.propertyName],
          color: c.function
        }, {
          tag: [t.processingInstruction, t.string, t.inserted, t.special(t.string)],
          color: c.string
        }, {
          tag: [t.function(t.variableName), t.labelName],
          color: c.function
        }, {
          tag: [t.color, t.constant(t.name), t.standard(t.name)],
          color: c.constant
        }, {
          tag: [t.definition(t.name), t.separator],
          color: c.variable
        }, {
          tag: [t.className],
          color: c.class
        }, {
          tag: [t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace],
          color: c.number
        }, {
          tag: [t.typeName],
          color: c.type,
          fontStyle: c.type
        }, {
          tag: [t.operator, t.operatorKeyword],
          color: c.keyword
        }, {
          tag: [t.url, t.escape, t.regexp, t.link],
          color: c.regexp
        }, {
          tag: [t.meta, t.comment],
          color: c.comment
        }, {
          tag: t.tagName,
          color: c.tag
        }, {
          tag: t.strong,
          fontWeight: 'bold'
        }, {
          tag: t.emphasis,
          fontStyle: 'italic'
        }, {
          tag: t.link,
          textDecoration: 'underline'
        }, {
          tag: t.heading,
          fontWeight: 'bold',
          color: c.heading
        }, {
          tag: [t.atom, t.bool, t.special(t.variableName)],
          color: c.variable
        }, {
          tag: t.invalid,
          color: c.invalid
        }, {
          tag: t.strikethrough,
          textDecoration: 'line-through'
        }
    ].map((each)=>mutateThemeStyles(each, t)).filter(each=>each)
    return {
        variant: variantOverride,
        settings: Object.assign({}, defaultSettings, settings),
        styles: [...style, ...styles.map(each=>(each instanceof Function)?each(t):each)],
    }
}
export default theme