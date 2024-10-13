import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch} from '../../store';
import {setRole} from '../../slices/rolesSlice';
import './Home.scss';
import { Role } from '../../types/role';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleNavigation = (role: Role) => {
    dispatch(setRole(role));

    if (role === Role.student) {
      navigate('/student');
    } else {
      navigate('/instructor');
    }
  };

  return (
    <div className="homepage-container">
      <h1 className="homepage-heading">Welcome to the <span className='homepage-heading-title'>Interactive Learning Platform</span></h1>
      <p className="homepage-subheading">Please choose how you want to sign in</p>

      <div className="button-container">
        <button
          className="sign-in-button"
          onClick={() => handleNavigation(Role.student)}
        >
          Sign in as Student
        </button>

        <button
          className="sign-in-button"
          onClick={() => handleNavigation(Role.instructor)}
        >
          Sign in as Instructor
        </button>
      </div>
    </div>
  );
};

export default HomePage;
