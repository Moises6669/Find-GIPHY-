import React, { useState } from "react";
import { AddCategorie } from "./components/AddCategorie";
import { GifGrid } from "./components/GifGrid";

export const GifExperApp = () => {
  const [categories, setcategories] = useState([""]);

  return (
    <>
      <h1>giffind</h1>
      <AddCategorie setcategories={setcategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
