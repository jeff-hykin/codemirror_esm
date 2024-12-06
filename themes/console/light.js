
// https://cdn.jsdelivr.net/npm/@uiw/codemirror-theme-console@4.23.6/esm/light.js

export var defaultSettings = {
  background: '#fff',
  foreground: '#000',
  caret: '#000',
  selection: '#c2d2ff',
  selectionMatch: '#b1c1ef',
  gutterBackground: '#fff',
  gutterForeground: '#ada9a9',
  gutterActiveForeground: '#000',
  lineHighlight: '#c7c5c575'
}
export default ({ variant="dark", settings={}, styles=[], mutateThemeStyles=(style)=>style }={}) => tags => {
    const t = tags
    const style = [
        
    ].map(mutateThemeStyles).filter(each=>each)
    return {
        variant,
        settings: Object.assign({}, defaultSettings, settings),
        styles: [...style, ...styles],
    }
}