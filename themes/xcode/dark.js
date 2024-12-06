
// https://cdn.jsdelivr.net/npm/@uiw/codemirror-theme-xcode@4.23.6/esm/dark.js

export var defaultSettings = {
  background: '#fff',
  foreground: '#3D3D3D',
  selection: '#BBDFFF',
  selectionMatch: '#BBDFFF',
  gutterBackground: '#fff',
  gutterForeground: '#AFAFAF',
  lineHighlight: '#d5e6ff69'
}
export default ({ variant="dark", settings={}, styles=[], mutateThemeStyles=(style)=>style }={}) => tags => {
    const t = tags
    const style = [
        {
          tag: [t.comment, t.quote],
          color: '#707F8D'
        }, {
          tag: [t.typeName, t.typeOperator],
          color: '#aa0d91'
        }, {
          tag: [t.keyword],
          color: '#aa0d91',
          fontWeight: 'bold'
        }, {
          tag: [t.string, t.meta],
          color: '#D23423'
        }, {
          tag: [t.name],
          color: '#032f62'
        }, {
          tag: [t.typeName],
          color: '#522BB2'
        }, {
          tag: [t.variableName],
          color: '#23575C'
        }, {
          tag: [t.definition(t.variableName)],
          color: '#327A9E'
        }, {
          tag: [t.regexp, t.link],
          color: '#0e0eff'
        }
    ].map(mutateThemeStyles).filter(each=>each)
    return {
        variant,
        settings: Object.assign({}, defaultSettings, settings),
        styles: [...style, ...styles],
    }
}