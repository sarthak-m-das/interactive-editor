import React from 'react';
import './Blocks.scss';
import { TextBlock } from '../../types/block';

const Paragraph: React.FC<TextBlock> = (block) => {
    return <p dangerouslySetInnerHTML={{ __html: block.content.text}} />
}

export default Paragraph;