import { useState } from "react";

const Counter = function() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
};

export default Counter;