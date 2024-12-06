
// https://cdn.jsdelivr.net/npm/@uiw/codemirror-theme-androidstudio@4.23.6/esm/index.js

export var defaultSettings = {
  background: '#282b2e',
  foreground: '#a9b7c6',
  caret: '#00FF00',
  selection: '#4e5254',
  selectionMatch: '#4e5254',
  lineHighlight: '#7f85891f'
}
export default ({ variant="dark", settings={}, styles=[], mutateThemeStyles=(style)=>style }={}) => tags => {
    const t = tags
    const style = [
        {
          tag: [t.keyword, t.deleted, t.className],
          color: '#cc7832'
        }, {
          tag: [t.number, t.literal, t.derefOperator],
          color: '#6897bb'
        }, {
          tag: [t.link, t.variableName],
          color: '#629755'
        }, {
          tag: [t.comment, t.quote],
          color: 'grey'
        }, {
          tag: [t.meta, t.documentMeta],
          color: '#bbb529'
        }, {
          tag: [t.string, t.propertyName, t.attributeValue],
          color: '#6a8759'
        }, {
          tag: [t.heading, t.typeName],
          color: '#ffc66d'
        }, {
          tag: [t.attributeName],
          color: '#a9b7c6'
        }, {
          tag: [t.emphasis],
          fontStyle: 'italic'
        }
    ].map(mutateThemeStyles).filter(each=>each)
    return {
        variant,
        settings: Object.assign({}, defaultSettings, settings),
        styles: [...style, ...styles],
    }
}