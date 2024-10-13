import React from 'react';
import './IndexSideBar.scss';

interface IndexSideBarProps {
  blocks: any[];
}

const IndexSideBar: React.FC<IndexSideBarProps> = ({ blocks }) => {
  const handleNavigation = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const headings = blocks.filter(
    (block) => block.type === 'HEADING' && block.content.level <= 3
  );

  return (
    <div className="side-menu">
      <ul>
        {headings.map((heading) => (
          <li
            key={heading.id}
            onClick={() => handleNavigation(`heading-${heading.id}`)}
            className="side-menu-item"
          >
            {heading.content.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IndexSideBar;
