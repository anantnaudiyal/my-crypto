import React from 'react';
import {useState} from 'react';

function Home() {
  const [likes, setLikes] = useState(0);
  const likeFunction=() => {
    setLikes(likes + 1);
    console.log(likes);
  }
  return (
    <div className="flex-grow p-4">
      <button onClick={likeFunction}>Like</button>
      <h2>{likes}</h2>
    </div>
  )
}

export default Home;
