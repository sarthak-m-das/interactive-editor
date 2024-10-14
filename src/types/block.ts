export enum BlockType {
  Text = 'text',
  Image = 'image',
  CodeSnippet = 'codeBlock',
  MultipleChoice = 'multipleChoice',
  Blockquote = 'blockquote',
  List = 'bulletList',
  ListItem = 'listItem',
  Heading = 'heading',
  HorizontalRule = 'horizontalRule',
  HardBreak = 'hardBreak',
}

export interface Block {
  type: string;
  attrs?: Record<string, any>;
  content?: Block[];
  text?: string;
}

export interface TextBlock extends Block {
  type: BlockType.Text;
  text: string;
}

export interface ImageBlock extends Block {
  type: BlockType.Image;
  attrs: {
    url: string;
    altText: string;
  };
}

export interface CodeSnippetBlock extends Block {
  type: BlockType.CodeSnippet;
  attrs: {
    language: string;
  };
  content: Block[];
}

export interface MultipleChoiceBlock extends Block {
  type: BlockType.MultipleChoice;
  attrs: {
    question: string;
    choices: string[];
    correctAnswer: number | null;
  };
}

export interface BlockquoteBlock extends Block {
  type: BlockType.Blockquote;
  content: Block[];
}

export interface ListBlock extends Block {
  type: BlockType.List;
  content: ListItemBlock[];
}

export interface ListItemBlock extends Block {
  type: BlockType.ListItem;
  attrs?: {
    color?: string;
  };
  content: Block[];
}

export interface HeadingBlock extends Block {
  type: BlockType.Heading;
  attrs: {
    level: 1 | 2 | 3 | 4 | 5 | 6;
  };
  content: TextBlock[];
}

export interface HorizontalRuleBlock extends Block {
  type: BlockType.HorizontalRule;
}

export interface HardBreakBlock extends Block {
  type: BlockType.HardBreak;
}