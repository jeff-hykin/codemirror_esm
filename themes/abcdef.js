
// https://cdn.jsdelivr.net/npm/@uiw/codemirror-theme-abcdef@4.23.6/esm/index.js

export var defaultSettings = {
  background: '#0f0f0f',
  foreground: '#defdef',
  caret: '#00FF00',
  selection: '#515151',
  selectionMatch: '#515151',
  gutterBackground: '#555',
  gutterForeground: '#FFFFFF',
  lineHighlight: '#0a6bcb3d'
}
export default ({ variant="dark", settings={}, styles=[], mutateThemeStyles=(style)=>style }={}) => tags => {
    const t = tags
    const style = [
        {
          tag: t.keyword,
          color: 'darkgoldenrod',
          fontWeight: 'bold'
        }, {
          tag: t.atom,
          color: '#77F'
        }, {
          tag: t.comment,
          color: '#7a7b7c',
          fontStyle: 'italic'
        }, {
          tag: t.number,
          color: 'violet'
        }, {
          tag: t.definition(t.variableName),
          color: '#fffabc'
        }, {
          tag: t.variableName,
          color: '#abcdef'
        }, {
          tag: t.function(t.variableName),
          color: '#fffabc'
        }, {
          tag: t.typeName,
          color: '#FFDD44'
        }, {
          tag: t.tagName,
          color: '#def'
        }, {
          tag: t.string,
          color: '#2b4'
        }, {
          tag: t.meta,
          color: '#C9F'
        },
        // { tag: t.qualifier, color: '#FFF700' },
        // { tag: t.builtin, color: '#30aabc' },
        {
          tag: t.bracket,
          color: '#8a8a8a'
        }, {
          tag: t.attributeName,
          color: '#DDFF00'
        }, {
          tag: t.heading,
          color: 'aquamarine',
          fontWeight: 'bold'
        }, {
          tag: t.link,
          color: 'blueviolet',
          fontWeight: 'bold'
        }
    ].map(mutateThemeStyles).filter(each=>each)
    return {
        variant,
        settings: Object.assign({}, defaultSettings, settings),
        styles: [...style, ...styles],
    }
}