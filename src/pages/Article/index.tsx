import React from 'react';
import './Article.scss';
import Header from '../../components/Header';
import IndexSideBar from '../../components/IndexSideBar';
import exampleArticle from '../../data/article';
import BlockFactory from '../../components/Blocks/BlockFactory';
import { useSelector } from 'react-redux';
import { selectMode, selectRole } from '../../slices/rolesSlice';
import { Role, Mode } from '../../types/role';
import Editor from '../Editor';

const ArticlePage: React.FC = () => {
  const role = useSelector(selectRole);
  const mode = useSelector(selectMode);

  const renderViewMode = () => {
    return (
      <div className="article-content">
          {exampleArticle.blocks.map((block) => (
            <BlockFactory key={block.id} {...block} />
          ))}
      </div>
    );
  }

  const renderEditMode = () => {
    return (
      <div className="article-content">
        <Editor />
      </div>
    );
  }


  return (
    <div className="article-root">
      <Header />
      <div className="article-container">
        <IndexSideBar blocks={exampleArticle.blocks} />
        {role === Role.student ? renderViewMode()
          : mode === Mode.view ? renderViewMode()
          : renderEditMode()
        }
      </div>
    </div>
  );
};

export default ArticlePage;
