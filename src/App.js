import {useState} from 'react';
import 'App.css';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h2>React Effects</h2>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}