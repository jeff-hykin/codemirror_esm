
// https://cdn.jsdelivr.net/npm/@uiw/codemirror-theme-darcula@4.23.6/esm/index.js

export var defaultSettings = {
  background: '#2B2B2B',
  foreground: '#f8f8f2',
  caret: '#FFFFFF',
  selection: 'rgba(255, 255, 255, 0.1)',
  selectionMatch: 'rgba(255, 255, 255, 0.2)',
  gutterBackground: 'rgba(255, 255, 255, 0.1)',
  gutterForeground: '#999',
  gutterBorder: 'transparent',
  lineHighlight: 'rgba(255, 255, 255, 0.1)'
}
export default ({ variant="dark", settings={}, styles=[], mutateThemeStyles=(style)=>style }={}) => tags => {
    const t = tags
    const style = [
        {
          tag: [t.atom, t.number],
          color: '#bd93f9'
        }, {
          tag: [t.comment],
          color: '#61A151'
        }, {
          tag: [t.string],
          color: '#6A8759'
        }, {
          tag: [t.variableName, t.operator],
          color: '#A9B7C6'
        }, {
          tag: [t.meta, t.className],
          color: '#A9B7C6'
        }, {
          tag: [t.propertyName],
          color: '#FFC66D'
        }, {
          tag: [t.keyword],
          color: '#CC7832'
        }, {
          tag: [t.tagName],
          color: '#ff79c6'
        }, {
          tag: [t.typeName],
          color: '#ffb86c'
        }
    ].map(mutateThemeStyles).filter(each=>each)
    return {
        variant,
        settings: Object.assign({}, defaultSettings, settings),
        styles: [...style, ...styles],
    }
}