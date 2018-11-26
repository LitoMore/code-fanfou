'use strict';

import * as vscode from 'vscode';
import * as Fanfou from 'fanfou-sdk';

export function activate(context: vscode.ExtensionContext): void {
	const disposable = vscode.commands.registerCommand('extension.postFanfou', async () => {
		const status = await vscode.window.showInputBox({
			placeHolder: 'How\'s everything going?',
			prompt: 'Send'
		});

		if (!status) {
			return;
		}

		const {consumerKey, consumerSecret, username, password, protocol, fakeHttps} = vscode.workspace.getConfiguration('fanfou');
		const opt: Fanfou.FanfouOptions = {consumerKey, consumerSecret, username, password, protocol, fakeHttps};

		const ff = new Fanfou(opt);
		await ff.xauth();
		const res = await ff.post('/statuses/update', {status});

		if (res.error) {
			vscode.window.showInformationMessage(res.error);
		} else {
			vscode.window.showInformationMessage('Status sent');
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate(): void {
}
