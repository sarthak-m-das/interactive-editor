# Interactive Editor

This project is an interactive text editor built with React and the TipTap editor library. It allows users to create and edit documents, supporting features such as rich text formatting, lists, code blocks, and multiple choice questions.

## Prerequisites

To run this project, you first need to run the backend first:

- [Interactive-Editor-Be](https://github.com/sarthak-m-das/interactive-editor-be.git)

## Running the Project

1. **Clone the Repository**
   ```bash
   git clone https://github.com/sarthak-m-das/interactive-editor.git
   cd interactive-editor
   ```

2. **Start the frontend**
   ```bash
   npm start
   ```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Features Implemented:

- Home Page: Users can select between student and instructor roles to use the application accordingly.
- Articles Page: Displays all articles in a card grid layout. Instructors can create new articles from this page.
- Article Page: Users can view the content of each article.
- Instructor Modes: Instructors have access to two modes on the article page:
  - Read Mode: Allows instructors to view the article as it would appear to students.
  - Edit Mode: Enables instructors to edit the article content.
- Draggable Toolbar: In edit mode, a draggable toolbar is available for adding rich content, such as text formatting and more.
- Extended TipTap Editor: The editor has been extended to allow instructors to create multiple-choice questions within articles, making the content interactive.
- Persistent Database: All article states, including content and answered questions, are stored in a persistent database, ensuring all data is saved.
