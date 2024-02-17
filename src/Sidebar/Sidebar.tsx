import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import Category from "./Category/Category.tsx";
import Price from "./Price/Price.tsx";
import Colors from "./Colors/Colors.tsx";

function Sidebar({ handleChange }) {
  const [isVisible, setIsVisible] = useState(true);

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  function getWindowSize() {
    const { innerWidth } = window;
    return innerWidth;
  }

  useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Category handleChange={handleChange} />
          <Price handleChange={handleChange} />
          <Colors handleChange={handleChange} />
        </div>
      </section>
    </>
  );
}

export default Sidebar;
