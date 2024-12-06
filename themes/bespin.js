
// https://cdn.jsdelivr.net/npm/@uiw/codemirror-theme-bespin@4.23.6/esm/index.js

export var defaultSettings = {
  background: '#28211c',
  foreground: '#9d9b97',
  caret: '#797977',
  selection: '#4f382b',
  selectionMatch: '#4f382b',
  gutterBackground: '#28211c',
  gutterForeground: '#666666',
  lineHighlight: '#ffffff1a'
}
export default ({ variant="dark", settings={}, styles=[], mutateThemeStyles=(style)=>style }={}) => tags => {
    const t = tags
    const style = [
        {
          tag: [t.atom, t.number, t.link, t.bool],
          color: '#9b859d'
        }, {
          tag: t.comment,
          color: '#937121'
        }, {
          tag: [t.keyword, t.tagName],
          color: '#cf6a4c'
        }, {
          tag: t.string,
          color: '#f9ee98'
        }, {
          tag: t.bracket,
          color: '#9d9b97'
        }, {
          tag: [t.variableName],
          color: '#5ea6ea'
        }, {
          tag: t.definition(t.variableName),
          color: '#cf7d34'
        }, {
          tag: [t.function(t.variableName), t.className],
          color: '#cf7d34'
        }, {
          tag: [t.propertyName, t.attributeName],
          color: '#54be0d'
        }
    ].map(mutateThemeStyles).filter(each=>each)
    return {
        variant,
        settings: Object.assign({}, defaultSettings, settings),
        styles: [...style, ...styles],
    }
}