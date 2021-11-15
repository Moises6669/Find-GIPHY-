import React, { useState } from "react";
import { AddCategorie } from "./components/AddCategorie";

export const GifExperApp = () => {
  // const categories = ['One Punch', 'Dragon Ball','Samurai X'];

  const [categories, setcategories] = useState([
    "One Punch",
    "Dragon Ball",
    "Samurai X",
  ]);

  // const handleAdd = () => {
  //   setcategories((cast) => [...cast, "HunterXHunter"]);
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategorie />
      <hr />

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
