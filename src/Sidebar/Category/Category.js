import React from "react";
import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input onClick={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          type="radio"
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleChange={handleChange}
          type="radio"
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleChange={handleChange}
          type="radio"
          value="sandals"
          title="Sandls"
          name="test"
        />
        <Input
          handleChange={handleChange}
          type="radio"
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
