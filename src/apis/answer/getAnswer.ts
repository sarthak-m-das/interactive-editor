import config from "../../config";

const getAnswer = async (articleId: string, blockId: string) => {
  try {
    const response = await fetch(`${config.API_ROOT}/articles/${articleId}/block/${blockId}/answer`);
    if (!response.ok) {
        return null;
    }
    return response.json();
  } catch (error) {
    console.error('Error getting answer', error);
    return null;
  }
};

export default getAnswer;