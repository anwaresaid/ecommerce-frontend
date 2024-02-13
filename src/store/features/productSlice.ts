import { createSlice } from "@reduxjs/toolkit";
import products from "../../db/data"; // Adjust the import path as needed

interface Product {
  id: number;
  img: string;
  title: string;
  star: number;
  reviews: number;
  newPrice: number;
  prevPrice: number;
  category: string;
  color: string;
  company: string;
}

interface AppliedFilters {
  category: string | null;
  color: string | null;
  company: string | null;
  price: string | null;
}

interface ProductState {
  selectedCategory: string | null;
  query: string;
  filteredProds: Product[];
  appliedFilters: AppliedFilters | {};
}

const initialState: ProductState = {
  selectedCategory: null,
  query: "",
  filteredProds: products,
  appliedFilters: {},
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    //setting filter
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    //setting the selected category
    setSelectedCategory: (state, action) => {
      state.appliedFilters[action.payload.type] = action.payload.value;
      state.selectedCategory = action.payload.value;
    },
    // setting filter products
    filterProducts: (state) => {
      const filterKeys = Object.keys(state.appliedFilters);
      state.filteredProds = products.filter((product) => {
        const queryMatch = product.title
          .toLowerCase()
          .includes(state.query.toLowerCase());

        // Check if all filters are satisfied for a product
        const filtersMatch =
          filterKeys.length === 0 ||
          filterKeys.every((key) => {
            const filterValue = state.appliedFilters[key];
            if (!filterValue) return true; // Skip if filter not set

            // Adjust comparisons as needed, e.g., price might require different handling
            return (
              product[key] === filterValue ||
              product[key].toString() === filterValue
            );
          });

        return queryMatch && filtersMatch;
      });
    },
  },
});

export const { setQuery, setSelectedCategory, filterProducts } =
  productsSlice.actions;

export default productsSlice;
