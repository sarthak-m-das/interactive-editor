import React from 'react';
import './Blocks.scss';
import { HeadingBlock } from '../../types/block';

const Heading: React.FC<HeadingBlock> = (block) => {
    return React.createElement(`h${block.content.level}`, { id: `heading-${block.content.text}` }, block.content.text);
}

export default Heading;
