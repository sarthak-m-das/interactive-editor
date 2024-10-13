import {BlockType } from '../types/block';
import { Article } from '../types/article';

const exampleArticle: Article = {
    id: 'article123',
    title: 'Understanding System Design Patterns',
    blocks: [
      {
        id: 'block1',
        type: BlockType.Heading,
        content: {
          level: 1,
          text: 'Introduction to System Design',
        },
      },
      {
        id: 'block2',
        type: BlockType.Text,
        content: {
          text: '<p>System design is an important skill for building scalable applications.</p>',
        },
      },
      {
        id: 'block3',
        type: BlockType.Image,
        content: {
          url: 'https://media.geeksforgeeks.org/wp-content/uploads/20240430132028/What-is-System-Design.webp',
          altText: 'System Architecture Diagram',
        },
      },
      {
        id: 'block4',
        type: BlockType.List,
        content: {
          listType: 'unordered',
          items: [
            'Designing the system architecture',
            'Managing scalability',
            'Handling distributed systems',
          ],
        },
      },
      {
        id: 'block10',
        type: BlockType.HorizontalRule,
        content: {},
      },
      {
        id: 'block11',
        type: BlockType.HardBreak,
        content: {},
      },
      {
        id: 'block5',
        type: BlockType.CodeSnippet,
        content: {
          language: 'javascript',
          code: 'const sum = (a, b) => a + b;',
        },
      },
      {
        id: 'block6',
        type: BlockType.Blockquote,
        content: {
          text: 'System design is the foundation of scalable architectures.',
        },
      },
      {
        id: 'block7',
        type: BlockType.MultipleChoice,
        content: {
          question: 'What is system design primarily focused on?',
          choices: [
            { id: '1', text: 'Building UI' },
            { id: '2', text: 'Designing system architecture' },
            { id: '3', text: 'Writing application code' },
          ],
          correctAnswerId: '2',
        },
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
    authorId: 'author123',
  };
  
export default exampleArticle;