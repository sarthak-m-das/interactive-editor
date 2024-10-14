import { Block } from './block';
export interface Article {
  id: string;
  title: string;
  blocks: Block[];
  createdAt: Date;
  updatedAt: Date;
  authorId: string;
}