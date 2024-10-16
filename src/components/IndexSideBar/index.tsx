import React, { useEffect, useState } from 'react';
import './IndexSideBar.scss';
import { Block, BlockType, HeadingBlock } from '../../types/block';

interface IndexSideBarProps {
  blocks: Block[];
}

const IndexSideBar: React.FC<IndexSideBarProps> = ({ blocks }) => {
  const [activeHeadingId, setActiveHeadingId] = useState<string | null>(null);

  const handleNavigation = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      let currentSectionId: string | null = null;
      const headings = document.querySelectorAll('h1, h2');
      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 3) {
          currentSectionId = heading.id;
        }
      });
      if (currentSectionId) setActiveHeadingId(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headings: HeadingBlock[] = blocks
    .filter(
      (block): block is HeadingBlock =>
        block.type === BlockType.Heading && block?.attrs?.level <= 2
    );

  return (
    <div className="side-menu">
      <div className="side-menu-title">Table of Contents</div>
      <ul>
        {headings.map((heading, index) => (
          <li
            key={index}
            onClick={() => handleNavigation(`heading-${index}`)}
            className={`side-menu-item-${heading?.attrs?.level} ${
              activeHeadingId === `heading-${index}` ? 'active' : ''
            }`}
          >
            {heading.content[0].text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IndexSideBar;
