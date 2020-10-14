import React, { useState } from "react";

export default function LikeButton() {
  const initial_numLikes = "Like this pokemon";
  const [numLikes, set_numLikes] = useState(initial_numLikes);

  const click = () => {
    if (numLikes === initial_numLikes) {
      set_numLikes("You've liked this pokemon! Click to unlike");
    } else {
      set_numLikes(initial_numLikes);
    }
  };

  console.log("Yes, clicked! current state:", numLikes);

  return (
    <div>
      <p>
        <button onClick={click}>{numLikes}</button>
      </p>
    </div>
  );
}
