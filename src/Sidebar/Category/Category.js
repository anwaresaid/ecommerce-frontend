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
          <span
            className="checkmark"
            style={{ backgroundColor: "rgb(255,211,0)" }}
          ></span>
          All
        </label>
        <Input
          handleChange={handleChange}
          type="radio"
          value="sneakers"
          title="Sneakers"
          name="test"
          color="rgb(255, 211, 0)"
        />
        <Input
          handleChange={handleChange}
          type="radio"
          value="flats"
          title="Flats"
          name="test"
          color="rgb(255, 211, 0)"
        />
        <Input
          handleChange={handleChange}
          type="radio"
          value="sandals"
          title="Sandls"
          name="test"
          color="rgb(255, 211, 0)"
        />
        <Input
          handleChange={handleChange}
          type="radio"
          value="heels"
          title="Heels"
          name="test"
          color="rgb(255, 211, 0)"
        />
      </div>
    </div>
  );
}

export default Category;
