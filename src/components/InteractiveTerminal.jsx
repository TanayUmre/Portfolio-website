import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft } from 'lucide-react';
import { personalInfo, codingStats, projects } from '../data/portfolioData';

export default function InteractiveTerminal() {
  const [history, setHistory] = useState([
    {
      type: 'output',
      text: "👋 Welcome to Tanay's shell. Type 'help' or click quick commands below."
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const terminalBodyRef = useRef(null);

  const commandList = ['help', 'about', 'skills', 'projects', 'cp', 'dice', 'clear'];

  const executeCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    const newHistory = [...history, { type: 'input', text: `> ${cmd}` }];

    switch (trimmed) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `Available commands:\n  • about     - Who is Tanay?\n  • skills    - Tech stack breakdown\n  • projects  - What I've built\n  • cp        - Competitive programming ratings\n  • dice      - Roll a D6 die (homage to Tenzies)\n  • contact   - Get my email & socials\n  • clear     - Clear terminal screen`
        });
        break;

      case 'about':
        newHistory.push({
          type: 'output',
          text: `Tanay Umre: Full-Stack Developer & Problem Solver.\nI combine rigorous algorithmic thinking (LeetCode Knight 1870) with practical web engineering in FastAPI, React & PostgreSQL.\nBased in ${personalInfo.location}.`
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: `Languages:  C++, Python, JavaScript (ES6+), SQL, C\nBackend:    FastAPI, PostgreSQL (Neon), SQLAlchemy, Alembic, JWT\nFrontend:   React, Vite, Electron, Modern CSS, Tailwind\nDevOps:     GitHub Actions, Render, Vercel, Git, Linux`
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: `Featured Projects:\n1. URL Shortener (FastAPI + React + Neon PostgreSQL + Alembic)\n2. Chef AI (React + Vite + Hugging Face Qwen 2.5 LLM)\n3. Pomodoro Desktop Timer (Electron + React + SVG Math)\n4. Tenzies Dice Game (React 19 + ARIA Accessibility)`
        });
        break;

      case 'cp':
        newHistory.push({
          type: 'output',
          text: `Competitive Programming Stats:\n• LeetCode:   Knight (Peak: 1870, Top ~5%)\n• CodeChef:   3-Star Coder (Peak: 1654)\n• Codeforces: Pupil (Peak: 1293)\n• AtCoder:    Brown (Rating: 712)\n• HackerRank: 5★ C++, 5★ SQL, 4★ C`
        });
        break;

      case 'dice':
        const roll = Math.floor(Math.random() * 6) + 1;
        const diceFaces = ['⚀ 1', '⚁ 2', '⚂ 3', '⚃ 4', '⚄ 5', '⚅ 6'];
        newHistory.push({
          type: 'output',
          text: `🎲 You rolled a ${diceFaces[roll - 1]}! (Check out my Tenzies game below if you like dice!)`
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `Email:    ${personalInfo.email}\nGitHub:   ${personalInfo.socials.github}\nLinkedIn: ${personalInfo.socials.linkedin}`
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case '':
        break;

      default:
        newHistory.push({
          type: 'output',
          text: `Command not found: '${trimmed}'. Type 'help' to see valid commands.`
        });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputVal) executeCommand(inputVal);
  };

  useEffect(() => {
    // Scroll only the inside of the terminal body container, never the window
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div className="terminal-widget">
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <div className="terminal-title">
          <TerminalIcon size={13} />
          <span>tanay@portfolio: ~ (bash)</span>
        </div>
      </div>

      <div className="terminal-body" ref={terminalBodyRef}>
        {history.map((item, idx) => (
          <div key={idx} className={`terminal-line terminal-${item.type}`}>
            <pre>{item.text}</pre>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="terminal-input-bar">
        <span className="terminal-prompt">$</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="type a command (e.g. 'cp', 'skills', 'dice')..."
          className="terminal-input"
        />
        <button type="submit" className="terminal-submit-btn" aria-label="Run command">
          <CornerDownLeft size={14} />
        </button>
      </form>

      <div className="terminal-quick-chips">
        <span className="chips-label">Quick try:</span>
        {commandList.map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => executeCommand(cmd)}
            className="chip-btn"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
}
