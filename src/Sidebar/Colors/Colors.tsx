import React from "react";
import "./Colors.css";
import Input from "../../components/Input.tsx";

function Colors({ handleChange }) {
  return (
    <div className="color-container">
      <h2 className="sidebar-title color-title">Color</h2>
      <div className="color-input-container">
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="color" />
          <span className="checkmark all"></span>All
        </label>
        <Input
          handleChange={handleChange}
          type="radio"
          value="black"
          title="Black"
          name="color"
          color="black"
        />
        <Input
          handleChange={handleChange}
          type="radio"
          value="blue"
          title="Blue"
          name="color"
          color="blue"
        />
        <Input
          handleChange={handleChange}
          type="radio"
          value="red"
          title="Red"
          name="color"
          color="red"
        />
        <Input
          handleChange={handleChange}
          type="radio"
          value="green"
          title="Green"
          name="color"
          color="green"
        />
        <label className="sidebar-label-container">
          <input
            type="radio"
            onChange={handleChange}
            value="white"
            name="color"
            color="white"
          />
          <span
            className="checkmark"
            style={{
              background: "white",
              border: "2px solid black",
              color: "black",
            }}
          ></span>
          White
        </label>
      </div>
    </div>
  );
}

export default Colors;
