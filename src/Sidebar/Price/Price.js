import React from "react";
import "./Price.css";
import Input from "../../components/Input";

function Price({ handleChange }) {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <label className="sidebar-label-container">
        <input onClick={handleChange} type="radio" value="" name="price" />
        <span className="checkmark"></span>All
      </label>
      <Input
        handleChange={handleChange}
        value={50}
        title="$0 - 50"
        name="price"
      />
      <Input
        handleChange={handleChange}
        value={100}
        title="$50 - 100"
        name="price"
      />
      <Input
        handleChange={handleChange}
        value={150}
        title="$100 - 150"
        name="price"
      />
      <Input
        handleChange={handleChange}
        value={50}
        title="Over $150"
        name="price"
      />
    </div>
  );
}

export default Price;
