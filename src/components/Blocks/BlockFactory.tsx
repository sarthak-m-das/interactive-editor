import React from 'react';
import { BlockType, Block } from '../../types/block';
import Heading from './Heading';
import Paragraph from './Paragraph';
import Image from './Image';
import List from './List';
import Code from './Code';
import Blockquote from './Blockquote';
import MultipleChoice from './MultipleChoice';

const BlockFactory: React.FC<Block> = (block) => {
const renderBlock = (block: any) => {
    switch (block.type) {
      case BlockType.Heading:
        return <Heading key={block.id} {...block} />;
      case BlockType.Text:
        return <Paragraph key={block.id} {...block} />;
      case BlockType.Image:
        return <Image key={block.id} {...block} />;
      case BlockType.List:
        return <List key={block.id} {...block} />;
      case BlockType.CodeSnippet:
        return <Code key={block.id} {...block} />;
      case BlockType.Blockquote:
        return <Blockquote key={block.id} {...block} />;
      case BlockType.MultipleChoice:
        return <MultipleChoice key={block.id} {...block} />;
      case BlockType.HorizontalRule:
        return <hr key={block.id} />;
      case BlockType.HardBreak:
        return <br key={block.id} />;
      default:
      return null;
    }
    };

    return renderBlock(block);
}

export default BlockFactory;