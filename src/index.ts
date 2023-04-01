import type { BytemdPlugin, BytemdEditorContext } from 'bytemd'
import useVim from 'codemirror-ssr/keymap/vim'

export default function vim(): BytemdPlugin {
  return {
    editorEffect (ctx: BytemdEditorContext) {
      useVim(ctx.codemirror)
      ctx.editor.setOption('keyMap', 'vim')
    },
  }
}
