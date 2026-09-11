import { useState } from 'react';

function Question1() {
  return (
    <div>
      <h3>Question 1</h3>
      <button onClick={() => console.log("Button clicked!")}>
        Click me (Inline)
      </button>
    </div>
  );
}

function Question2() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div>
      <h3>Question 2</h3>
      <button onClick={handleClick}>Click me (Named Function)</button>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Question 3: Counter</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
}

function ColorBox() {
  const [color, setColor] = useState('#ffffff');

  return (
    <div>
      <h3>Question 4: Color Box</h3>
      <input 
        type="color" 
        value={color} 
        onChange={(e) => setColor(e.target.value)} 
      />
      <div 
        style={{ 
          width: '100px', 
          height: '100px', 
          backgroundColor: color, 
          marginTop: '10px',
          border: '1px solid #ccc'
        }} 
      />
    </div>
  );
}

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div>
      <h3>Question 5: Login Form</h3>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

function Question6() {
  return (
    <div>
      <h3>Question 6: Explanation</h3>
      <p>
        <strong>Giải thích:</strong> useState trả về một mảng (Array) gồm 2 phần tử. Dùng ngoặc vuông [] giúp lấy dữ liệu theo đúng thứ tự và tự do đặt tên biến. Nếu dùng ngoặc nhọn {"{}"} (bóc tách Object), bạn bắt buộc phải đặt đúng tên mà React đã quy định.
      </p>
    </div>
  );
}

function StartGame({ onStart }) {
  return <button onClick={onStart}>Start Game</button>;
}

function Game() {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <div>
      <h3>Question 7: Game & StartGame</h3>
      <p>Trạng thái: {isStarted ? "Game đã bắt đầu!" : "Chưa bắt đầu"}</p>
      <StartGame onStart={() => setIsStarted(true)} />
    </div>
  );
}

function SuggestionBox() {
  const [loading, setLoading] = useState(false);
  const [suggestion, setSuggestion] = useState('');

  const handleGetSuggestion = () => {
    setLoading(true);
    setSuggestion('');

    setTimeout(() => {
      setSuggestion('Hãy dành 10 phút nghỉ ngơi và uống một ly nước!');
      setLoading(false);
    }, 1500);
  };

  return (
    <div>
      <h3>Question 8: Suggestion Box</h3>
      <button onClick={handleGetSuggestion} disabled={loading}>
        {loading ? 'Loading...' : 'Get Suggestion'}
      </button>
      {suggestion && <p>{suggestion}</p>}
    </div>
  );
}

export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Bài Tập React: State & Event Handling</h2>
      <hr />
      <Question1 />
      <hr />
      <Question2 />
      <hr />
      <Counter />
      <hr />
      <ColorBox />
      <hr />
      <LoginForm />
      <hr />
      <Question6 />
      <hr />
      <Game />
      <hr />
      <SuggestionBox />
    </div>
  );
}