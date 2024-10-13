import React from 'react';
import './Article.scss';
import Header from '../../components/Header';
import IndexSideBar from '../../components/IndexSideBar';
import exampleArticle from '../../data/article';
import BlockFactory from '../../components/Blocks/BlockFactory';

const ArticlePage: React.FC = () => {
  return (
    <div className="article-root">
      <Header />
      <div className="article-container">
        <IndexSideBar blocks={exampleArticle.blocks} />
        <div className="article-content">
          {exampleArticle.blocks.map((block) => (
            <BlockFactory key={block.id} {...block} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
