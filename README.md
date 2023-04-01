# bytemd-plugin-vim

[![npm](https://img.shields.io/npm/v/bytemd-plugin-vim.svg)](https://npm.im/bytemd-plugin-vim)

ByteMD plugin to vim key map

## Usage

```js
import vim from 'bytemd-plugin-vim'
import { Editor } from 'bytemd'
new Editor({
  target: document.body,
  props: {
    plugins: [
      vim(),
      // ... other plugins
    ],
  },
})
```

## License

MIT
