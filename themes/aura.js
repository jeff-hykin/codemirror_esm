
// https://cdn.jsdelivr.net/npm/@uiw/codemirror-theme-aura@4.23.6/esm/index.js

export const defaultSettings = {
  background: '#21202e',
  foreground: '#edecee',
  caret: '#a277ff',
  selection: '#5a51898f',
  selectionMatch: '#5a51898f',
  gutterBackground: '#21202e',
  gutterForeground: '#edecee',
  gutterBorder: 'transparent',
  lineHighlight: '#a394f033'
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
          color: '#a277ff'
        }, {
          tag: [t.name, t.deleted, t.character, t.macroName],
          color: '#edecee'
        }, {
          tag: [t.propertyName],
          color: '#ffca85'
        }, {
          tag: [t.processingInstruction, t.string, t.inserted, t.special(t.string)],
          color: '#61ffca'
        }, {
          tag: [t.function(t.variableName), t.labelName],
          color: '#ffca85'
        }, {
          tag: [t.color, t.constant(t.name), t.standard(t.name)],
          color: '#61ffca'
        }, {
          tag: [t.definition(t.name), t.separator],
          color: '#edecee'
        }, {
          tag: [t.className],
          color: '#82e2ff'
        }, {
          tag: [t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace],
          color: '#61ffca'
        }, {
          tag: [t.typeName],
          color: '#82e2ff'
        }, {
          tag: [t.operator, t.operatorKeyword],
          color: '#a277ff'
        }, {
          tag: [t.url, t.escape, t.regexp, t.link],
          color: '#61ffca'
        }, {
          tag: [t.meta, t.comment],
          color: '#6d6d6d'
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
          color: '#a277ff'
        }, {
          tag: [t.atom, t.bool, t.special(t.variableName)],
          color: '#edecee'
        }, {
          tag: t.invalid,
          color: '#ff6767'
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