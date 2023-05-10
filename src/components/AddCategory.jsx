import { useState } from "react";

export const AddCategory = ({ setCategories, handleAddCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    handleAddCategory(e, inputValue, setInputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Buscar Gift"
        value={inputValue}
        onChange={(e) => {
          handleChange(e);
        }}
      />
    </form>
  );
};
