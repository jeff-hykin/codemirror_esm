
// https://cdn.jsdelivr.net/npm/@uiw/codemirror-theme-duotone@4.23.6/esm/dark.js

export var defaultSettings = {
  background: '#faf8f5',
  foreground: '#b29762',
  caret: '#93abdc',
  selection: '#e3dcce',
  selectionMatch: '#e3dcce',
  gutterBackground: '#faf8f5',
  gutterForeground: '#cdc4b1',
  gutterBorder: 'transparent',
  lineHighlight: '#ddceb154'
}
export default ({ variant="dark", settings={}, styles=[], mutateThemeStyles=(style)=>style }={}) => tags => {
    const t = tags
    const style = [
        {
          tag: [t.comment, t.bracket],
          color: '#b6ad9a'
        }, {
          tag: [t.atom, t.number, t.keyword, t.link, t.attributeName, t.quote],
          color: '#063289'
        }, {
          tag: [t.emphasis, t.heading, t.tagName, t.propertyName, t.variableName],
          color: '#2d2006'
        }, {
          tag: [t.typeName, t.url, t.string],
          color: '#896724'
        }, {
          tag: [t.operator, t.string],
          color: '#1659df'
        }, {
          tag: [t.propertyName],
          color: '#b29762'
        }, {
          tag: [t.unit, t.punctuation],
          color: '#063289'
        }
    ].map(mutateThemeStyles).filter(each=>each)
    return {
        variant,
        settings: Object.assign({}, defaultSettings, settings),
        styles: [...style, ...styles],
    }
}