import React from "react";
import "./Price.css";
import Input from "../../components/Input.tsx";

function Price({ handleChange }) {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <label className="sidebar-label-container">
        <input onClick={handleChange} type="radio" value="" name="newPrice" />
        <span
          className="checkmark"
          style={{ backgroundColor: "rgb(255,211,0)" }}
        ></span>
        All
      </label>
      <Input
        handleChange={handleChange}
        value={50}
        title="$0 - 50"
        name="newPrice"
        color="rgb(255, 211, 0)"
      />
      <Input
        handleChange={handleChange}
        value={100}
        title="$50 - 100"
        name="newPrice"
        color="rgb(255, 211, 0)"
      />
      <Input
        handleChange={handleChange}
        value={150}
        title="$100 - 150"
        name="newPrice"
        color="rgb(255, 211, 0)"
      />
      <Input
        handleChange={handleChange}
        value={50}
        title="Over $150"
        name="newPrice"
        color="rgb(255, 211, 0)"
      />
    </div>
  );
}

export default Price;
