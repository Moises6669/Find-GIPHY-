import React, {useState} from "react";

export const AddCategorie = () => {
    
    const [inputValue, setInputValue] = useState("Hola mundo");

    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("submit hecho");
    };


    return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            value={inputValue}
            onChange={handleInputChange }
        />
    </form>
  );
};
