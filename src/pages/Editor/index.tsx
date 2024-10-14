import React, { useState } from 'react';
import "./Editor.scss";

import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import StarterKit from "@tiptap/starter-kit";
import { EditorContent, EditorProvider, useCurrentEditor } from '@tiptap/react';
import MenuBar from '../../components/MenuBar';
import exampleArticle from '../../data/a';
import MultipleChoice from '../../components/Extensions/MultipleChoice/extension';

// const CustomBulletList = BulletList.extend({
//   addKeyboardShortcuts() {
//     return {
//       'Mod-l': () => this.editor.commands.toggleBulletList(),
//     }
//   },
// })

// Extensions for TipTap editor
const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle,
  MultipleChoice,
  StarterKit.configure({
    orderedList: {
      keepMarks: true,
      keepAttributes: false,
    },
    heading: {
      levels: [1, 2, 3],
    },
  }),
];


const EditorWithSaveButton: React.FC = () => {
  const { editor } = useCurrentEditor();

  const handleSubmit = () => {
    if (editor) {
      console.log(editor.getJSON());
    }
  };

  return (
    <>
      <EditorContent editor={editor} />
      <button onClick={handleSubmit}>Save</button>
    </>
  );
};


const Editor: React.FC = () => {
  return (
    <EditorProvider
      slotBefore={<MenuBar />}
      slotAfter={<EditorWithSaveButton />}
      extensions={extensions}
      content={exampleArticle} 
      editable={true}
      injectCSS={false}
    />
  );
};

export default Editor;
