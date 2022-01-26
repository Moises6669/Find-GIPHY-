import React, { useState } from "react";
import { AddCategorie } from "./components/AddCategorie";
import { GifGrid } from "./components/GifGrid";

export const GifExperApp = () => {
  const [categories, setcategories] = useState(["One Punch"]);

  return (
    <>
      <h2>GifExpertApp</h2>
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
