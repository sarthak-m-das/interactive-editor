import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateArticleModal from '../../components/CreateArticleModal';
import './Instructor.scss';

const articles = [
  { id: 1, title: 'Understanding Redux', summary: 'A beginner-friendly guide to Redux and state management.' },
  { id: 2, title: 'React Router Basics', summary: 'How to use React Router for navigation in a React application.' },
  { id: 3, title: 'Mastering TypeScript', summary: 'Advanced TypeScript tips for building large-scale applications.' },
  { id: 4, title: 'CSS Grid vs Flexbox', summary: 'Learn the differences between CSS Grid and Flexbox layouts.' },
];

const InstructorPage: React.FC = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleSubmit = (name: string, description: string) => {
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
      <h1 className="instructor-page-heading">Your Articles</h1>
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
