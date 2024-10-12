import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Student.scss'; // Styling for the Student Page

// Mock data for articles
const articles = [
  { id: 1, title: 'Understanding Redux', summary: 'A beginner-friendly guide to Redux and state management.' },
  { id: 2, title: 'React Router Basics', summary: 'How to use React Router for navigation in a React application.' },
  { id: 3, title: 'Mastering TypeScript', summary: 'Advanced TypeScript tips for building large-scale applications.' },
  { id: 4, title: 'CSS Grid vs Flexbox', summary: 'Learn the differences between CSS Grid and Flexbox layouts.' },
  { id: 5, title: 'Node.js Event Loop', summary: 'Deep dive into how Node.js handles asynchronous tasks using the event loop.' },
  { id: 6, title: 'JavaScript Promises', summary: 'Understanding JavaScript promises and async/await.' },
  { id: 7, title: 'React Context API', summary: 'Learn how to manage global state using the Context API.' },
  { id: 8, title: 'Testing in React', summary: 'Learn about different testing libraries in React like Jest and Enzyme.' },
  { id: 9, title: 'TypeScript for React', summary: 'Using TypeScript in React applications for better type safety.' },
  { id: 10, title: 'React Hooks Overview', summary: 'An introduction to React Hooks and their benefits.' },
];

const StudentPage: React.FC = () => {
  const navigate = useNavigate();

  // Handle article click and navigate to article page
  const handleArticleClick = (id: number) => {
    navigate(`/article/${id}`); // Navigate to the article detail page based on article ID
  };

  return (
    <div className="student-page-container">
      <h1 className="student-page-heading">Available Articles</h1>
      <div className="article-list-container">
        {articles.map((article) => (
          <div key={article.id} className="article-card" onClick={() => handleArticleClick(article.id)}>
            <h2 className="article-title">{article.title}</h2>
            <p className="article-summary">{article.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentPage;
