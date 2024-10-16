import { Article } from "../types/article";
import getArticleById from "../apis/article/getArticleById";
import fetchAllArticles from "../apis/article/getAllArticle";
import updateArticleById from "../apis/article/updateArticleById";
import { Dispatch } from '@reduxjs/toolkit';
import { setArticles, setCurrentArticle } from "../slices/articleSlice";
import { Block } from "../types/block";

export const getArticle = (id: string | undefined) => async (dispatch: Dispatch) => {
  if (!id) {
    return;
  }
  const resp = await getArticleById(id);
  if (resp) {
    dispatch(setCurrentArticle(resp.article));
  }
};

export const getAllArticle =  () => async(dispatch: Dispatch) => {
  const resp = await fetchAllArticles();
  if (resp) {
    dispatch(setArticles(resp.articles));
  }
}

export const updateArticle = (article: Article | null, content: any) => async(dispatch: Dispatch) => {
  if (article === null) {
    return
  }
  
  const updatedArticle = { ...article };
  updatedArticle.type = 'doc';
  updatedArticle.content = content?.map((block: Block) => ({
    ...block,
    type: block.type || ''
  })) as Block[];
  updatedArticle.updatedAt = new Date();

  // Save article
  await updateArticleById(updatedArticle.id, updatedArticle);
};