import React from 'react';
import { CodeSnippetBlock } from '../../types/block';

const Code: React.FC<CodeSnippetBlock> = (block) => {
  return (
    <pre key={block.id}>
        <code className={`language-${block.content.language}`}>{block.content.code}</code>
    </pre>
  );
};

export default Code;