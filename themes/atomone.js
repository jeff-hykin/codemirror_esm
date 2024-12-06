
// https://cdn.jsdelivr.net/npm/@uiw/codemirror-theme-atomone@4.23.6/esm/index.js

export var defaultSettings = {
  background: '#272C35',
  foreground: '#9d9b97',
  caret: '#797977',
  selection: '#3d4c64',
  selectionMatch: '#3d4c64',
  gutterBackground: '#272C35',
  gutterForeground: '#465063',
  gutterBorder: 'transparent',
  lineHighlight: '#2e3f5940'
}
export default ({ variant="dark", settings={}, styles=[], mutateThemeStyles=(style)=>style }={}) => tags => {
    const t = tags
    const style = [
        {
          tag: [t.function(t.variableName), t.function(t.propertyName), t.url, t.processingInstruction],
          color: 'hsl(207, 82%, 66%)'
        }, {
          tag: [t.tagName, t.heading],
          color: '#e06c75'
        }, {
          tag: t.comment,
          color: '#54636D'
        }, {
          tag: [t.propertyName],
          color: 'hsl(220, 14%, 71%)'
        }, {
          tag: [t.attributeName, t.number],
          color: 'hsl( 29, 54%, 61%)'
        }, {
          tag: t.className,
          color: 'hsl( 39, 67%, 69%)'
        }, {
          tag: t.keyword,
          color: 'hsl(286, 60%, 67%)'
        }, {
          tag: [t.string, t.regexp, t.special(t.propertyName)],
          color: '#98c379'
        }
    ].map(mutateThemeStyles).filter(each=>each)
    return {
        variant,
        settings: Object.assign({}, defaultSettings, settings),
        styles: [...style, ...styles],
    }
}