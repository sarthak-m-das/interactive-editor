import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import StudentPage from './pages/Student';
import InstructorPage from './pages/Instructor';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/instructor" element={<InstructorPage />} />
        <Route path="/article/:id" element={<StudentPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;