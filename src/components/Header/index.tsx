import React from 'react';
import './Header.scss';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    return () => {
      navigate('/');
    };
  };

  return (
    <div className="header-bar">
      <div className="header-left">
        <div className="header-title" onClick={handleOnClick()}>Interactive Learning Platform</div>
      </div>
    </div>
  );
};

export default Header;
