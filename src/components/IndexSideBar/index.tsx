import React, { useEffect, useState } from 'react';
import './IndexSideBar.scss';

interface IndexSideBarProps {
  blocks: any[];
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
      setActiveHeadingId(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headings = blocks.filter(
    (block) => block.type === 'HEADING' && block.content.level <= 2
  );

  return (
    <div className="side-menu">
      <ul>
        {headings.map((heading) => (
          <li
            key={heading.id}
            onClick={() => handleNavigation(`heading-${heading.id}`)}
            className={`side-menu-item-${heading.content.level} ${
              activeHeadingId === `heading-${heading.id}` ? 'active' : ''
            }`}
          >
            {heading.content.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IndexSideBar;
