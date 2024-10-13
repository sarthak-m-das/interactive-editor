import React from 'react';
import { ImageBlock } from '../../types/block';

const Image: React.FC<ImageBlock> = (block) => {
    return <img src={block.content.url} alt={block.content.altText} className="article-image" />
}

export default Image;