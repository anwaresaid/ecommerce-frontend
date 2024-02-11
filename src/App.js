import { useState, useEffect } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import products from "./db/data";
import Card from "./components/Card";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  // State to hold the filtered products
  const [filteredProds, setFilteredProds] = useState(products);

  // Handle input change
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // Handle category change
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Also for handleClick if necessary
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Effect to apply filters whenever query or selectedCategory changes
  useEffect(() => {
    let result = products;

    // Apply text filter
    if (query) {
      result = result.filter((product) =>
        product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategory) {
      result = result.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selectedCategory ||
          color === selectedCategory ||
          company === selectedCategory ||
          newPrice.toString() === selectedCategory ||
          title === selectedCategory
      );
    }

    // Update the state with the filtered results
    setFilteredProds(result);
  }, [query, selectedCategory]);

  // Map filtered products to Card components
  const res = filteredProds.map(
    ({ img, title, star, reviews, newPrice, prevPrice }) => (
      <Card
        key={Math.random()} // It's better to use unique ids from your data if available
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        newPrice={newPrice}
        prevPrice={prevPrice}
      />
    )
  );

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={res} />
    </>
  );
}

export default App;
