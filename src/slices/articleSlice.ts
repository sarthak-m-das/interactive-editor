import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article } from '../types/article';

interface ArticleState {
  articles: Article[];
  currentArticle: Article | null;
}

// Initial state
const initialState: ArticleState = {
  articles: [],
  currentArticle: null,
};

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setArticles: (state, action: PayloadAction<Article[]>) => {
      state.articles = action.payload;
    },
    setCurrentArticle: (state, action: PayloadAction<Article | null>) => {
      state.currentArticle = action.payload;
    },
  },
});

export const { setArticles, setCurrentArticle } = articleSlice.actions;
export const selectArticles = (state: { article: ArticleState }) => state.article.articles;
export const selectCurrentArticle = (state: { article: ArticleState }) => state.article.currentArticle;
export default articleSlice.reducer;
