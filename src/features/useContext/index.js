import React, { useState, useEffect } from "react";

const Index = () => {
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     console.log("hii");
  //     const timer = setInterval(() => {
  //       setCount(count + 1);
  //     }, 1000);

  //     return () => {
  //       clearInterval(timer);
  //     };
  //   }, [count]);

  useEffect(() => {
    console.log("Run useEffect", count);

    return () => {
      console.log("Clean Up", count);
    };
  });

  return (
    <div>
      <h1>{count} new messages!</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
};

export default Index;
