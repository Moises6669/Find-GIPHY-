import React, { useEffect, useState } from "react";
import {GifGriditem} from './GifGriditem';

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGif();
  }, []);

  const getGif = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?api_key=hFwW2HfDVVe5nSppQiVNxTYNRHZ3262h&q=rickandmorty&limit=10";

    const resp = await fetch(url);

    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    setImages(gifs);
  };

  return (
    <div>
      <p>{category}</p>
      <ol>
        {images.map((img) => {
          return <GifGriditem key={img.id} {...img} />;
        })}
      </ol>
    </div>
  );
};
