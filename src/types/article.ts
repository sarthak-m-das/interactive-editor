import { Block } from './block';
export interface Article {
  id: string;
  title: string;
  description: string;
  type: string;
  content?: Block[];
  createdAt: Date;
  updatedAt: Date;
}