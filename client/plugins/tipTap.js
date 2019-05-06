import Vue from 'vue'

import { Editor, EditorMenuBar} from "tiptap";
import { Heading, Bold, Italic, Underline } from "tiptap-extensions";

const editor  = new Editor({
    extensions: [
      new Heading({ levels: [1, 2, 3] }),
      new Bold(),
      new Italic(),
      new Underline()
    ],
  })

  export default editor
