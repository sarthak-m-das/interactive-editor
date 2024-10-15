import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article } from '../types/article';

interface ArticleState {
  articles: Article[];
  currentArticle: Article | null;
  loading: boolean;
}

// Initial state
const initialState: ArticleState = {
  articles: [],
  currentArticle: null,
  loading: false,
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
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setArticles, setCurrentArticle, setLoading } = articleSlice.actions;
export const selectArticles = (state: { article: ArticleState }) => state.article.articles;
export const selectCurrentArticle = (state: { article: ArticleState }) => state.article.currentArticle;
export const selectLoading = (state: { article: ArticleState }) => state.article.loading;
export default articleSlice.reducer;
