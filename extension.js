const vscode = require('vscode');

function wrapOrUnwrapWithEqualSigns() {
  let editor = vscode.window.activeTextEditor;
  if (!editor) {
    return; // No open text editor
  }

  let selection = editor.selection;
  let text = editor.document.getText(selection);

  // Logic to wrap or unwrap
  if (text.startsWith('==') && text.endsWith('==')) {
    text = text.substring(2, text.length - 2);
  } else {
    text = `==${text}==`;
  }

  editor.edit((editBuilder) => {
    editBuilder.replace(selection, text);
  });
}

function activate(context) {
  let disposable = vscode.commands.registerCommand('mark.highlighter.wrapUnwrap', wrapOrUnwrapWithEqualSigns);
  context.subscriptions.push(disposable);
}

exports.activate = activate;
