import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setQuery,
  setSelectedCategory,
  filterProducts,
} from "./store/features/productSlice.ts";
import Navigation from "./Navigation/Nav.tsx";
import Products from "./Products/Products.tsx";
import Recommended from "./Recommended/Recommended.tsx";
import Sidebar from "./Sidebar/Sidebar.tsx";
import Card from "./components/Card.tsx";
import { Rootstate } from "./store/store.js";

function App() {
  const dispatch = useDispatch();
  const { query, selectedCategory, filteredProds } = useSelector(
    (state: Rootstate) => state.products
  );

  //filtering products on change varlues
  useEffect(() => {
    dispatch(filterProducts());
  }, [query, selectedCategory, dispatch]);

  return (
    <>
      <Sidebar
        handleChange={(e) =>
          dispatch(
            setSelectedCategory({ value: e.target.value, type: e.target.name })
          )
        }
      />
      <Navigation
        query={query}
        handleInputChange={(e) => dispatch(setQuery(e.target.value))}
      />
      <Recommended
        handleClick={(e) =>
          dispatch(
            setSelectedCategory({ value: e.target.value, type: e.target.name })
          )
        }
      />
      <Products
        result={filteredProds.map(
          ({ img, title, star, reviews, newPrice, prevPrice }) => (
            <Card
              key={Math.random()} // Consider using a more stable key if available
              img={img}
              title={title}
              star={star}
              reviews={reviews}
              newPrice={newPrice}
              prevPrice={prevPrice}
            />
          )
        )}
      />
    </>
  );
}

export default App;
