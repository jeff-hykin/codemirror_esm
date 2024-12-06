
// https://cdn.jsdelivr.net/npm/@uiw/codemirror-theme-bbedit@4.23.6/esm/index.js

export var defaultSettings = {
  background: '#FFFFFF',
  foreground: '#000000',
  caret: '#FBAC52',
  selection: '#FFD420',
  selectionMatch: '#FFD420',
  gutterBackground: '#f5f5f5',
  gutterForeground: '#4D4D4C',
  gutterBorder: 'transparent',
  lineHighlight: '#00000012'
}
export default ({ variant="dark", settings={}, styles=[], mutateThemeStyles=(style)=>style }={}) => tags => {
    const t = tags
    const style = [
        {
          tag: [t.meta, t.comment],
          color: '#804000'
        }, {
          tag: [t.keyword, t.strong],
          color: '#0000FF'
        }, {
          tag: [t.number],
          color: '#FF0080'
        }, {
          tag: [t.string],
          color: '#FF0080'
        }, {
          tag: [t.variableName],
          color: '#006600'
        }, {
          tag: [t.escape],
          color: '#33CC33'
        }, {
          tag: [t.tagName],
          color: '#1C02FF'
        }, {
          tag: [t.heading],
          color: '#0C07FF'
        }, {
          tag: [t.quote],
          color: '#000000'
        }, {
          tag: [t.list],
          color: '#B90690'
        }, {
          tag: [t.documentMeta],
          color: '#888888'
        }, {
          tag: [t.function(t.variableName)],
          color: '#0000A2'
        }, {
          tag: [t.definition(t.typeName), t.typeName],
          color: '#6D79DE'
        }
    ].map(mutateThemeStyles).filter(each=>each)
    return {
        variant,
        settings: Object.assign({}, defaultSettings, settings),
        styles: [...style, ...styles],
    }
}