import config from "../../config";

const getArticleById = async (id: string) => {
  try {
    const response = await fetch(`${config.API_ROOT}/articles/${id}`);
    return response.json();
  } catch (error) {
    console.error('Error getting article', error);
    return null;
  }
};

export default getArticleById;