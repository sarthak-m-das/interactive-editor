import React from 'react';
import './Article.scss';
import IndexSideBar from '../../components/IndexSideBar';
import exampleArticle from '../../data/article';
import Editor from '../Editor';

const ArticlePage: React.FC = () => {
  return (
    <div className="article-root">
      <div className="article-container">
        <IndexSideBar blocks={exampleArticle.content} />
        <div className="article-content">
          <Editor /> 
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
