import React from 'react';
import './Header.scss';
import { useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux';
import { selectMode, selectRole, setMode } from '../../slices/rolesSlice';
import { Role, Mode } from '../../types/role';
import { useAppDispatch } from '../../store';
import { useCurrentEditor } from '@tiptap/react';
import { Article } from '../../types/article';
import { Block } from '../../types/block';
import { updateArticle } from '../../actions/article';
import logo from '../../assets/logo.png';
import edit from '../../assets/edit.png';
import publish from '../../assets/publish.png';

type HeaderProps = {
  article: Article | null;
  articleId: string;
};

const Header: React.FC<HeaderProps> = ({article, articleId}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const role = useSelector(selectRole);
  const mode = useSelector(selectMode);
  const { editor } = useCurrentEditor();

  const handleOnClick = () => {
    return () => {
      dispatch(setMode(Mode.view));
      navigate('/');
    };
  };

  const handleMode = async () => {
    if (article === null) {
      return
    }
    
    if (mode === Mode.edit && editor) {
      const updatedArticle = { ...article };
      updatedArticle.type = 'doc';
      updatedArticle.content = editor.getJSON().content?.map(block => ({
        ...block,
        type: block.type || ''
      })) as Block[];
      updatedArticle.updatedAt = new Date();

      // Save article
      await updateArticle(updatedArticle);
    }
    dispatch(setMode(mode === Mode.view ? Mode.edit : Mode.view));
  };

  return (
    <div className="header-bar">
      <div className="header-left" onClick={handleOnClick()}>
        <img src={logo} alt="logo" className="header-logo" />
        <div className="header-title">Interactive Learning Platform</div>
      </div>
      <div className="header-right">
        {role === Role.instructor && mode === Mode.view && <div className="header-edit-button" onClick={handleMode}>
          <img src={edit} alt="edit" className="header-edit-icon" />
          Edit
        </div>}
        {role === Role.instructor && mode === Mode.edit && <div className="header-publish-button" onClick={handleMode}>
          <img src={publish} alt="publish" className="header-publish-icon" />
          Publish
        </div>}
      </div>
        
    </div>
  );
};

export default Header;
