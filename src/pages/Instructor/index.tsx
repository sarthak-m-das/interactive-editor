import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateArticleModal from '../../components/CreateArticleModal';
import './Instructor.scss';
import { getAllArticle } from '../../actions/article';
import { useSelector } from 'react-redux';
import { selectArticles } from '../../slices/articleSlice';
import { useAppDispatch } from '../../store';
import { Mode } from '../../types/role';
import { setMode } from '../../slices/rolesSlice';
import createArticle from '../../apis/article/createArticle';

const InstructorPage: React.FC = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState(false);
  const articles = useSelector(selectArticles);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchArticles = async () => {
      dispatch(getAllArticle());
    };

    fetchArticles();
  }, [dispatch]);

  const handleSubmit = async (title: string, description: string,  event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const resp = await createArticle(title, description);
    closeModal();
    dispatch(setMode(Mode.edit));
    navigate("/article/" + resp.id);
  };

  const handleCreateArticleClick = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleArticleClick = (id: string) => {
    navigate(`/article/${id}`);
  };

  return (
    <div className="instructor-page-container">
      <h1 className="instructor-page-heading">Your <span className='instructor-page-heading-title'>Articles</span></h1>
      <div className="article-list-container">
        {articles.map((article) => (
          <div key={article.id} className="article-card" onClick={() => handleArticleClick(article.id)}>
            <h2 className="article-title">{article.title}</h2>
            <p className="article-summary">{article.description}</p>
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
