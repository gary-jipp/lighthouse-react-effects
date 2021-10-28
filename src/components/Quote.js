import axios from "axios";
import { useEffect, useState } from "react";

const Quote = function() {

  useEffect(() => {
    axios.get("https://api.kanye.rest")
      .then(res => {
        console.log(res.data);
      });
  });

  return (
    <div>
    </div>
  );
};

export default Quote;