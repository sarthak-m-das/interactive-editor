import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article } from '../types/article';
interface ArticleState {
  articles: Article[];
}

// Initial state
const initialState: ArticleState = {
  articles: [],
};

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setArticles: (state, action: PayloadAction<Article[]>) => {
      state.articles = action.payload;
    },
  },
});

export const { setArticles } = articleSlice.actions;
export const selectArticles = (state: { article: ArticleState }) => state.article.articles;
export default articleSlice.reducer;
