import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Student.scss';
import { articles } from '../../data/articles';

const StudentPage: React.FC = () => {
  const navigate = useNavigate();

  const handleArticleClick = (id: number) => {
    navigate(`/article/${id}`);
  };

  return (
    <div className="student-page-container">
      <h1 className="student-page-heading">Available <span className='student-page-heading-title'>Articles</span></h1>
      <div className="article-list-container">
        {articles.map((article) => (
          <div key={article.id} className="article-card" onClick={() => handleArticleClick(article.id)}>
            <h2 className="article-title">{article.title}</h2>
            <p className="article-summary">{article.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentPage;
