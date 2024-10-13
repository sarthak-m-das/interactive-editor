import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateArticleModal from '../../components/CreateArticleModal';
import './Instructor.scss';
import { articles } from '../../data/articles';

const InstructorPage: React.FC = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleSubmit = (name: string, description: string) => {
    articles.push({ id: articles.length + 1, title: name, summary: description });
    closeModal();
  };

  const handleCreateArticleClick = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleArticleClick = (id: number) => {
    navigate(`/article/${id}`);
  };

  return (
    <div className="instructor-page-container">
      <h1 className="instructor-page-heading">Your <span className='instructor-page-heading-title'>Articles</span></h1>
      <div className="article-list-container">
        {articles.map((article) => (
          <div key={article.id} className="article-card" onClick={() => handleArticleClick(article.id)}>
            <h2 className="article-title">{article.title}</h2>
            <p className="article-summary">{article.summary}</p>
          </div>
        ))}
        <div className="create-article-card" onClick={handleCreateArticleClick}>
          <div className="plus-icon">+</div>
        </div>
      </div>
      <CreateArticleModal modalIsOpen={modalIsOpen} closeModal={closeModal} handleSubmit={handleSubmit} />

    </div>
  );
};

export default InstructorPage;
