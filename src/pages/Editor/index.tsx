import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import StarterKit from "@tiptap/starter-kit";
import { EditorProvider } from '@tiptap/react';
import Toolbar from '../../components/Toolbar';
import MultipleChoice from '../../components/Extensions/MultipleChoice/extension';
import { selectMode } from '../../slices/rolesSlice';
import { Mode } from '../../types/role';
import Header from '../../components/Header';
import { Article } from "../../types/article";
import { useAppDispatch, useAppSelector } from "../../store";
import "./Editor.scss";
import { useEffect } from "react";
import { setCurrentArticle } from "../../slices/articleSlice";

type EditorProps = {
  article: Article | null;
  articleId: string;
};

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

const Editor: React.FC<EditorProps> = ({article, articleId}) => {
  const mode = useAppSelector(selectMode);
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(setCurrentArticle(null));
    };
  }
  , [dispatch]);

  return (
    <>
    {!!article &&
    <EditorProvider
      slotAfter={mode === Mode.edit && <Toolbar />}
      slotBefore={<Header article={article} articleId={articleId}/>}
      extensions={extensions}
      content={article} 
      editable={mode === Mode.edit}
      injectCSS={false}
    />
    }
    </>
  );
};

export default Editor;
