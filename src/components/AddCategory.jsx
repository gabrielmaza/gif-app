import React from "react";
import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length <= 1) return;

    // setCategories([inputValue, ...categories]);
    onNewCategory(inputValue.trim().toLowerCase());
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={onInputChange}
      />
      <input
        type="submit"
        label="Send"
        style={{ maxWidth: "200px", margin: "10px 0 0", cursor: "pointer" }}
      />
    </form>
  );
};
