import config from "../../config";
 
const getAllArticle = async () => {
  try {
    const response = await fetch(`${config.API_ROOT}/articles`);
    return response.json();
  } catch (error) {
    console.error('Error getting all articles', error);
    return [];
  }
}

export default getAllArticle;