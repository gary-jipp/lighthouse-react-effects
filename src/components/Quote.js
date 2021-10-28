import axios from "axios";
import { useEffect, useState } from "react";

const Quote = function() {
  const [data, setData] = useState({}); // Don't forget this!

  useEffect(() => {
    axios.get("https://api.kanye.rest")
      .then(res => {
        console.log(res.data);
        setData(res.data);
      });
  }, []);

  return (
    <div>
      {data.quote}
    </div>
  );
};

export default Quote;