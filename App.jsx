import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [target, setTarget] = useState(33);
  const [selected, setSelected] = useState('SubhanAllah');

  const tasbeehOptions = [
    'SubhanAllah',
    'Alhamdulillah',
    'Allahu Akbar'
  ];

  const increment = () => {
    if (count < target) {
      setCount(prevCount => prevCount + 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  const progress = Math.min((count / target) * 100, 100);
  const isCompleted = count >= target;

  return (
    <div className="app-container">

      <header className="header">
        <div className="logo">☪</div>
        <h1>My Digital Tasbeeh</h1>
        <p>A moment of peace and remembrance</p>
      </header>

      <main className="tasbeeh-card">

        <div className="tasbeeh-options">
          {tasbeehOptions.map((item) => (
            <button
              key={item}
              className={selected === item ? 'option active' : 'option'}
              onClick={() => {
                setSelected(item);
                setCount(0);
              }}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="arabic-text">
          {selected === 'SubhanAllah'
            ? 'سُبْحَانَ اللّٰهِ'
            : selected === 'Alhamdulillah'
            ? 'الْحَمْدُ لِلّٰهِ'
            : 'اللّٰهُ أَكْبَرُ'}
        </div>

        <p className="selected-name">{selected}</p>

        <div className="counter-area">
          <div className="outer-circle">
            <div className="inner-circle">
              <span className="count-number">{count}</span>
              <span className="count-label">COUNT</span>
            </div>
          </div>
        </div>

        <div className="progress-section">
          <div className="progress-info">
            <span>Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <p>{count} / {target} completed</p>
        </div>

        <div className="target-section">
          <span>Select Target</span>

          <div className="target-buttons">
            {[33, 99, 100].map((number) => (
              <button
                key={number}
                className={target === number ? 'target active-target' : 'target'}
                onClick={() => {
                  setTarget(number);
                  setCount(0);
                }}
              >
                {number}
              </button>
            ))}
          </div>
        </div>

        <button
          className="main-button"
          onClick={increment}
          disabled={isCompleted}
        >
          <span>+</span>
          <small>TAP TO COUNT</small>
        </button>

        <button className="reset-button" onClick={reset}>
          ↻ Reset Counter
        </button>

        {isCompleted && (
          <div className="complete-message">
            ✨ Target Completed! MashaAllah ✨
          </div>
        )}

      </main>

      <footer>
        <p>Remember Allah in every moment ❤️</p>
      </footer>

    </div>
  );
}

export default App;