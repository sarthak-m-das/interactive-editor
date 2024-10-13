export enum BlockType {
  Text = 'TEXT',
  Image = 'IMAGE',
  CodeSnippet = 'CODE_SNIPPET',
  MultipleChoice = 'MULTIPLE_CHOICE',
  Blockquote = 'BLOCKQUOTE',
  List = 'LIST',
  Heading = 'HEADING',
  HorizontalRule = 'HORIZONTAL_RULE',
  HardBreak = 'HARD_BREAK',
}

interface Block {
  id: string;
  type: BlockType;
  content: any;
}

interface TextBlock extends Block {
  type: BlockType.Text;
  content: {
    text: string;
  };
}

interface ImageBlock extends Block {
  type: BlockType.Image;
  content: {
    url: string;
    altText: string;
  };
}

interface CodeSnippetBlock extends Block {
  type: BlockType.CodeSnippet;
  content: {
    language: string;
    code: string;
  };
}

interface MultipleChoiceBlock extends Block {
  type: BlockType.MultipleChoice;
  content: {
    question: string;
    choices: { id: string; text: string }[];
    correctAnswerId: string;
  };
}

interface BlockquoteBlock extends Block {
  type: BlockType.Blockquote;
  content: {
    text: string;
  };
}

interface ListBlock extends Block {
  type: BlockType.List;
  content: {
    listType: 'ordered' | 'unordered';
    items: string[];
  };
}

interface HeadingBlock extends Block {
  type: BlockType.Heading;
  content: {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    text: string;
  };
}

interface HorizontalRuleBlock extends Block {
  type: BlockType.HorizontalRule;
  content: {};
}

interface HardBreakBlock extends Block {
  type: BlockType.HardBreak;
  content: {};
}
