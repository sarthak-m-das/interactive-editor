import config from "../../config";
import { Article } from "../../types/article";

const updateArticleById = async (id: string, article: Article) => {
  try {
    const response = await fetch(`${config.API_ROOT}/articles/${id}`, {
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

export default updateArticleById;