import React, { useEffect } from 'react';
import './Article.scss';
import IndexSideBar from '../../components/IndexSideBar';
import Editor from '../Editor';
import { useAppDispatch, useAppSelector } from '../../store';
import { selectCurrentArticle, setCurrentArticle } from '../../slices/articleSlice';
import { getArticle } from '../../actions/article';
import { useParams } from 'react-router-dom';
import { selectMode } from '../../slices/rolesSlice';

const ArticlePage: React.FC = () => {
  const article = useAppSelector(selectCurrentArticle);
  const dispatch = useAppDispatch();
  const mode = useAppSelector(selectMode);
  const { id } = useParams<{id: string}>();

  useEffect(() => {
    const fetchArticles = async () => {
      if (!id) {
        return;
      }
      const resp = await getArticle(id);
      if (resp) {
        dispatch(setCurrentArticle(resp.article));
      }
    };
    fetchArticles();
  }, [dispatch, id, mode]);


  return (
    <div className="article-root">
      <div className="article-container">
        <IndexSideBar blocks={article?.content? article.content : []} />
        <div className="article-content">
          <Editor article={article} articleId={id? id : ''} />
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
