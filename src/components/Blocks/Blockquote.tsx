import React from 'react';
import { BlockquoteBlock } from '../../types/block';

const Blockquote: React.FC<BlockquoteBlock> = (block) => {
  return <blockquote key={block.id}>{block.content.text}</blockquote>;
};

export default Blockquote;