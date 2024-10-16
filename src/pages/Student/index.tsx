import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Student.scss';
import { useSelector } from 'react-redux';
import { selectArticles } from '../../slices/articleSlice';
import { getAllArticle } from '../../actions/article';
import { useAppDispatch } from '../../store';

const StudentPage: React.FC = () => {
  const navigate = useNavigate();
  const articles = useSelector(selectArticles);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchArticles = async () => {
      dispatch(getAllArticle());
    };

    fetchArticles();
  }, [dispatch]);

  const handleArticleClick = (id: string) => {
    navigate(`/article/${id}`);
  };

  return (
    <div className="student-page-container">
      <h1 className="student-page-heading">Available <span className='student-page-heading-title'>Articles</span></h1>
      <div className="article-list-container">
        {articles.map((article) => (
          <div key={article.id} className="article-card" onClick={() => handleArticleClick(article.id)}>
            <h2 className="article-title">{article.title}</h2>
            <p className="article-summary">{article.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentPage;
