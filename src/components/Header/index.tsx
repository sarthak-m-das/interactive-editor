import React from 'react';
import './Header.scss';
import { useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux';
import { selectMode, selectRole, setMode } from '../../slices/rolesSlice';
import { Role, Mode } from '../../types/role';
import { useAppDispatch } from '../../store';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const role = useSelector(selectRole);
  const mode = useSelector(selectMode);

  const handleOnClick = () => {
    return () => {
      navigate('/');
    };
  };

  const handleMode = () => {
    dispatch(setMode(mode === Mode.view ? Mode.edit : Mode.view));
  };

  return (
    <div className="header-bar">
      <div className="header-left">
        <div className="header-title" onClick={handleOnClick()}>Interactive Learning Platform</div>
      </div>
      <div className="header-right">
        {role === Role.instructor && mode === Mode.view && <div className="header-editor-button" onClick={handleMode}>Edit</div>}
        {role === Role.instructor && mode === Mode.edit && <div className="header-editor-button" onClick={handleMode}>Publish</div>}
      </div>
        
    </div>
  );
};

export default Header;
