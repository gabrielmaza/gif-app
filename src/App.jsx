import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const App = () => {
  const [categories, setCategories] = useState(["best"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) {
      return;
    }

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <div>
        <h1>Gif Expert App</h1>
      </div>
      <AddCategory onNewCategory={onAddCategory} />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default App;
