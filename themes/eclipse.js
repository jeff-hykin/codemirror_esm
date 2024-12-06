
// https://cdn.jsdelivr.net/npm/@uiw/codemirror-theme-eclipse@4.23.6/esm/index.js

export var defaultSettings = {
  background: '#fff',
  foreground: '#000',
  caret: '#FFFFFF',
  selection: '#d7d4f0',
  selectionMatch: '#d7d4f0',
  gutterBackground: '#f7f7f7',
  gutterForeground: '#999',
  lineHighlight: '#006fff1c',
  gutterBorder: 'transparent'
}
export default ({ variant="dark", settings={}, styles=[], mutateThemeStyles=(style)=>style }={}) => tags => {
    const t = tags
    const style = [
        {
          tag: [t.comment],
          color: '#3F7F5F'
        }, {
          tag: [t.documentMeta],
          color: '#FF1717'
        }, {
          tag: t.keyword,
          color: '#7F0055',
          fontWeight: 'bold'
        }, {
          tag: t.atom,
          color: '#00f'
        }, {
          tag: t.number,
          color: '#164'
        }, {
          tag: t.propertyName,
          color: '#164'
        }, {
          tag: [t.variableName, t.definition(t.variableName)],
          color: '#0000C0'
        }, {
          tag: t.function(t.variableName),
          color: '#0000C0'
        }, {
          tag: t.string,
          color: '#2A00FF'
        }, {
          tag: t.operator,
          color: 'black'
        }, {
          tag: t.tagName,
          color: '#170'
        }, {
          tag: t.attributeName,
          color: '#00c'
        }, {
          tag: t.link,
          color: '#219'
        }
    ].map(mutateThemeStyles).filter(each=>each)
    return {
        variant,
        settings: Object.assign({}, defaultSettings, settings),
        styles: [...style, ...styles],
    }
}