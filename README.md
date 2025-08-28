# AiCodeReviewer

This project is a full-stack application that uses AI to review code snippets and provide suggestions for improvements. It consists of a React frontend and an Express backend integrated with Google's Gemini AI.

## Features

- Paste or write code in the editor
- Get AI-powered code reviews and suggestions
- Syntax highlighting for code and review output

## Getting Started

### Backend

1. Install dependencies:
   ```sh
   cd backend
   npm install
   ```
2. Add your Gemini API key to `.env`:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```
3. Start the server:
   ```sh
   node server.js
   ```
   The backend runs on [http://localhost:3000](http://localhost:3000).

### Frontend

1. Install dependencies:
   ```sh
   cd frontend
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```
   The frontend runs on [http://localhost:5173](http://localhost:5173) by default.

## Usage

- Open the frontend in your browser.
- Enter your code in the editor and click "Review".
- The AI will analyze your code and display feedback and suggestions.

## Technologies Used

- React
- Vite
- Express
- Google Gemini AI
- Axios
- PrismJS & Highlight.js

## License

MIT

