import React, { useState } from "react";
import PropTypes from 'prop-types'

export const AddCategorie = ({ setcategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setcategories((cats) => [...cats, inputValue]);
      setInputValue('');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategorie.propTypes = {
  setcategories:PropTypes.func.isRequired
}