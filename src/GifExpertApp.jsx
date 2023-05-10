import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const handleAddCategory = (e, inputValue, setInputValue) => {
    if (categories.includes(inputValue)) return;
    setCategories((categories) => [inputValue, ...categories]);
  };

  const closeSection = (category) => {
    setCategories(categories.filter((cat) => cat !== category));
  };

  return (
    <>
      <div className="proyecto">
        {/* Titulo */}
        <h1>GifExpertApp</h1>
        {/* Input */}
        <AddCategory
          setCategories={setCategories}
          handleAddCategory={handleAddCategory}
        />
        {/* <button
        onClick={() => {
          handleAddCategory();
        }}
      >
        Aceptar
      </button> */}
        {/* Listado de Gif */}
        <ol>
          {categories.map((category, key) => (
            <>
              <button
                className="close"
                onClick={() => {
                  closeSection(category, key);
                }}
              >
                X
              </button>
              <GifGrid key={category} category={category} />
            </>
          ))}
        </ol>
        {/* Gif Items */}
      </div>
    </>
  );
};
