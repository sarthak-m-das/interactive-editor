import { Article } from "../types/article";
import config from "../config";
import { setArticles } from "../slices/articleSlice";
import { useAppDispatch } from "../store";



export const createArticle = async (title: string, description: string) => {
  try {
    const article: Article = {
      title,
      description,
      id: "",
      type: "",
      content: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const response = await fetch(`${config.API_ROOT}/articles`, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(article),
    });
    return response.json();
  } catch (error) {
    console.error('Error creating article', error);
  }
};

export const getArticle = async (id: string) => {
  try {
    const response = await fetch(`${config.API_ROOT}/articles/${id}`);
    return response.json();
  } catch (error) {
    console.error('Error getting article', error);
  }
};

export const getAllArticle = async () => {
  try {
    const response = await fetch(`${config.API_ROOT}/articles`);
    return response.json();
  } catch (error) {
    console.error('Error getting all articles', error);
    return [];
  }
}