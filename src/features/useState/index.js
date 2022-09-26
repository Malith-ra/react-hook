import React, { useState } from "react";

const Index = () => {
  const [details, setDetails] = useState({ counter: 0, name: "" });

  function increaseCounter() {
    setDetails((prev) => ({
      ...prev,
      counter: prev.counter + 1,
    }));
  }

  console.log(details);

  return (
    <div>
      <input onChange={(e) => e.target.value} />
      <h1>
        {details.name} has clicked {details.counter} times
      </h1>
      <button onClick={increaseCounter}>Increase</button>
    </div>
  );
};

export default Index;
