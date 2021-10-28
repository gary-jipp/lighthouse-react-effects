import { useEffect, useState } from "react";

const Counter = function() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    document.title = ` Counter = ${count}`;
  });

  useEffect(() => {
    setInterval(() => {
      console.log(`counter = ${count}`);
    }, 2000);
    
  });


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