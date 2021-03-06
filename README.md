# code-fanfou

A VS Code extension for Fanfou

## Install

In VS Code, press <kbd>F1</kbd> and narrow down the list of commands by typing extension. Pick Extensions: Install Extension.

Simply search for the `code-fanfou` extension from the list and install it.

---

<a href="https://www.patreon.com/LitoMore">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

## Usage

Setup Fanfou account to `settings.json`:

```javascript
{
  "fanfou.username": "foo",
  "fanfou.password": "bar"
}
```

Use <kbd>F1</kbd> or <kbd>Shift + Command + P</kbd> to call out the command input, then input `fanfou` to trigger Fanfou posting input.

## More Options

By default, `code-fanfou` already have the consumer key and secret, you don't need to configure it.

Also you could add your Fanfou app consumer to overwrite.

```javascript
{
  "fanfou.consumerKey": "",
  "fanfou.consumerSecret": "",
  "fanfou.username": "",
  "fanfou.password": "",
  "fanfou.protocol": "https:"
}
```

For the options documentation, please refer the [fanfou-sdk](https://github.com/LitoMore/fanfou-sdk-node).

## Related

- [fanfou-sdk](https://github.com/LitoMore/fanfou-sdk-node) - Fanfou SDK for Node.js

## License

MIT © [LitoMore](https://github.com/LitoMore)
