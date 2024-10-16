import config from "../../config";
import { Article } from "../../types/article";
import { BlockType, HeadingBlock, ParagraphBlock, TextBlock } from "../../types/block";

const createArticle = async (title: string, description: string) => {
  try {
    const article = buildArticleObject(title, description);
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

const buildArticleObject = (title: string, description: string) => {
  const headingBlock : HeadingBlock = {
    type: BlockType.Heading,
    attrs: {
      level: 1,
    },
    content: [{ type: BlockType.Text, text: title }],
  };
  const descBlock: ParagraphBlock = {
    type: BlockType.Paragraph,
    content: [{ type: BlockType.Text, text: description }],
  };

  const article: Article = {
    title,
    description,
    id: "",
    type: "doc",
    content: [headingBlock, descBlock],
    createdAt: new Date(),
    updatedAt: new Date(),
    };
  return article;
}

export default createArticle;