import React from 'react';
import './Article.scss';
import Header from '../../components/Header';
import IndexSideBar from '../../components/IndexSideBar';
import exampleArticle from '../../data/article';

const ArticlePage: React.FC = () => {
  const renderBlock = (block: any) => {
    switch (block.type) {
      case 'HEADING':
        return React.createElement(
          `h${block.content.level}`,
          { id: `heading-${block.id}` },
          block.content.text
        );
      case 'TEXT':
        return <p key={block.id} dangerouslySetInnerHTML={{ __html: block.content.text }} />;
      case 'IMAGE':
        return (
          <img key={block.id} src={block.content.url} alt={block.content.altText} className="article-image" />
        );
      case 'LIST':
        const ListTag = block.content.listType === 'unordered' ? 'ul' : 'ol';
        return (
          <ListTag key={block.id}>
            {block.content.items.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ListTag>
        );
      case 'CODE_SNIPPET':
        return (
          <pre key={block.id}>
            <code className={`language-${block.content.language}`}>{block.content.code}</code>
          </pre>
        );
      case 'BLOCKQUOTE':
        return <blockquote key={block.id}>{block.content.text}</blockquote>;
      case 'MULTIPLE_CHOICE':
        return (
          <div key={block.id} className="multiple-choice-block">
            <p>{block.content.question}</p>
            <ul>
              {block.content.choices.map((choice: any) => (
                <li key={choice.id}>{choice.text}</li>
              ))}
            </ul>
          </div>
        );
      case 'HORIZONTAL_RULE':
        return <hr key={block.id} />;
      case 'HARD_BREAK':
        return <br key={block.id} />;
      default:
        return null;
    }
  };

  return (
    <div className="article-root">
      <Header />
      <div className="article-container">
        <IndexSideBar blocks={exampleArticle.blocks} />
        <div className="article-content">
          {exampleArticle.blocks.map((block) => renderBlock(block))}
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
