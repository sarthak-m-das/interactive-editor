import { Article } from "../types/article";
import config from "../config";

export const createArticle = async (title: string, description: string) => {
  try {
    const article: Article = {
      title,
      description,
      id: "",
      type: "doc",
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
    return null;
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

export const updateArticle = async (article: Article) => {
  try {
    const response = await fetch(`${config.API_ROOT}/articles/${article.id}`, {
      method: 'PUT',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(article),
    });
    return response.json();
  } catch (error) {
    console.error('Error updating article', error);
  }
};