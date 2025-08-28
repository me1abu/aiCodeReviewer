import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import prism from 'prismjs'
import Editor from 'react-simple-code-editor';
import axios from 'axios';
import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import "highlight.js/styles/github.css"
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [code, setCode] = useState(
    `function add() {\n  return a + b;\n}`
  );

  const [review, setReview] = useState('');

  useEffect(() => {
    prism.highlightAll();
  })

  async function reviewCode() {
    const response = await axios.post('http://localhost:3000/ai/get-review', {
      prompt: `Please review this code and suggest improvements:\n\n${code}`
    });

    setReview(response.data);

    console.log(response.data);

  }
  return (
    <>
      <main>
        <div className="left">
          <div className="textarea">
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.js, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 15,
                width: '100%',
                height: '100%',
                backgroundColor: '#f5f5f5',
                borderRadius: '0.7rem',
                border: '1px solid #f5f5f5',
              }}
            />
          </div>
          <div className="review" onClick={reviewCode}>Review</div>
        </div>
        <div className="right">
          <div className="code-review">
            <Markdown
              rehypePlugins={[rehypeHighlight]}>
              {review}
            </Markdown>
          </div>

        </div>
      </main>
    </>
  )
}

export default App
