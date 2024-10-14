import "./Editor.scss";

import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import StarterKit from "@tiptap/starter-kit";
import { EditorProvider } from '@tiptap/react';
import MenuBar from '../../components/MenuBar';
import exampleArticle from '../../data/article';
import MultipleChoice from '../../components/Extensions/MultipleChoice/extension';
import { selectMode } from '../../slices/rolesSlice';
import { useSelector } from 'react-redux';
import { Mode } from '../../types/role';
import Header from '../../components/Header';

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

const Editor: React.FC = () => {
  const mode = useSelector(selectMode);

  return (
    <EditorProvider
      slotAfter={mode === Mode.edit && <MenuBar />}
      slotBefore={<Header />}
      extensions={extensions}
      content={exampleArticle} 
      editable={mode === Mode.edit}
      injectCSS={false}
    />
  );
};

export default Editor;
