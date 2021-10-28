import { useState } from "react";

const Counter = function() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}
    </div>
  );
};

export default Counter;