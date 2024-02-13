import React from "react";
import "./Category.css";
import Input from "../../components/Input.tsx";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input onClick={handleChange} type="radio" value="" name="category" />
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
          name="category"
          color="rgb(255, 211, 0)"
        />
        <Input
          handleChange={handleChange}
          type="radio"
          value="flats"
          title="Flats"
          name="category"
          color="rgb(255, 211, 0)"
        />
        <Input
          handleChange={handleChange}
          type="radio"
          value="sandals"
          title="Sandls"
          name="category"
          color="rgb(255, 211, 0)"
        />
        <Input
          handleChange={handleChange}
          type="radio"
          value="heels"
          title="Heels"
          name="category"
          color="rgb(255, 211, 0)"
        />
      </div>
    </div>
  );
}

export default Category;
