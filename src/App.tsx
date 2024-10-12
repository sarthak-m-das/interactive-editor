import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import StudentInterface from './pages/Student';
import InstructorInterface from './pages/Instructor';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/student" element={<StudentInterface />} />
        <Route path="/instructor" element={<InstructorInterface />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;