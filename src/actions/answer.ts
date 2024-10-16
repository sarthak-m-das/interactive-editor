import config from "../config";
import { Answer } from "../types/answer";

export const saveAnswer = async (articleId: string, blockId: string, selectedOption: number) => {
  const answer: Answer = {
    id: '',
    blockID: blockId,
    selectedOption,
    createdAt: new Date(),
  };
  try {
    const response = await fetch(`${config.API_ROOT}/articles/${articleId}/block/${blockId}/answer`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(answer),
    });
    return response.json();
  } catch (error) {
    console.error('Error saving answer', error);
  }
};

export const getAnswer = async (articleId: string, blockId: string) => {
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