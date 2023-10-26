# VSCode Mark Highlighter

An extension for VSCode that highlights the ==marked== text in your code editor.

## Screenshot

![Screenshot](https://raw.githubusercontent.com/dacodekid/vscode-mark-highlighter/master/assets/screenshot.png)

## Extension Settings

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
