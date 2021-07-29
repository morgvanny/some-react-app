import React, { useState } from "react";
import CatImg from "./CatImg";

function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const urls = new Array(3)
  .fill(0)
  .map((e) => `https://cataas.com/cat?${Math.random()}`);
const duplicates = shuffle([...urls, ...urls]);

export default function StateFulComponent() {
  const [counter, setCounter] = useState(0);

  function increment() {
    if (counter < 10) {
      setCounter(counter + 1);
    }
  }

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={increment}>Add 1</button>
      {duplicates.map((url) => {
        return <CatImg url={url} />;
      })}
    </div>
  );
}
