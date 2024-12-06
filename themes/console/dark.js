
// https://cdn.jsdelivr.net/npm/@uiw/codemirror-theme-console@4.23.6/esm/dark.js

export var defaultSettings = {
  background: '#000',
  foreground: '#fff',
  caret: '#fff',
  selection: '#5c6c9b',
  selectionMatch: '#2a3967',
  gutterBackground: '#000',
  gutterForeground: '#ada9a9',
  gutterActiveForeground: '#fff',
  lineHighlight: '#82828275'
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