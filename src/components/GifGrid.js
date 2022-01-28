import React, { useEffect, useState } from "react";

export const GifGrid = ({ category }) => {
  const [count, setcount] = useState(0);

  useEffect(() => {
    getGif();
  }, []);

  const getGif = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?api_key=hFwW2HfDVVe5nSppQiVNxTYNRHZ3262h&q=Goku&limit=10";

    const resp = await fetch(url);

    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    console.log(gifs);
  };

  return (
    <div>
      <p>{category}</p>
      <h3>{count}</h3>
      <button onClick={() => setcount(count + 1)}></button>
    </div>
  );
};
