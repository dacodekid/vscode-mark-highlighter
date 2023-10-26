# VSCode Mark Highlighter

An extension for VSCode that highlights the ==marked== text in your code editor.

## Screenshot

![Screenshot](https://raw.githubusercontent.com/dacodekid/vscode-mark-highlighter/master/assets/screenshot.png)

## Extension Settings

### Keybinding

Default keybinding is `ctrl+alt+cmd+=`. You can change it by adding this to your `keybindings.json` file:

```json
{
  "command": "mark.highlighter.wrapUnwrap",
  "key": "YOUR OWN KEYBINDING",
  "when": "editorTextFocus && !editorReadonly && editorLangId =~ /^markdown$|^rmd$|^quarto$/"
}
```

### Theme Color

Add this to your settings.json file:

```json
"editor.tokenColorCustomizations": {
    "textMateRules": [
      {
        "scope": "markup.raw.marked.vscode.mark.highlighter",
        "settings": {
          "foreground": "#ff5500",
          "fontStyle": "italic"
        }
      }
    ]
  }
```
