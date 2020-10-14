import React, { useState, useEffect } from "react";

//useState hook [a,b]
//a is a getter or definition
//b is a setter or what indicates the change

export default function LikeCounter() {
  const initial_numLikes = 0;
  const [numLikes, set_numLikes] = useState(initial_numLikes);

  const increment = () => {
    console.log("Yes, clicked! Current number of likes:", numLikes);
    set_numLikes(numLikes + 1);
  };
  const decrement = () => {
    console.log("Yes, clicked! Current number of likes:", numLikes);
    set_numLikes(numLikes - 1);
  };
  const reset = () => {
    console.log("Yes, clicked! Current number of likes:", numLikes);
    set_numLikes(0);
  };

  console.log("A render!");

  useEffect(() => {
    console.log("The useEffect action!");
  }, [numLikes]);

  return (
    <div>
      <p>
        <button onClick={increment}>Like</button>
        <button onClick={decrement}>Hate</button>
        <button onClick={reset}>Reset</button>
      </p>
      <p>
        This pokemon has <b>{numLikes}</b> likes!
      </p>
    </div>
  );
}
