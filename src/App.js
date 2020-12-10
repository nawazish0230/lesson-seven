import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [filteredData, setFilteredData] = useState([]);
  const data = [
    { name: "Peppy Paneer Pizza", type: "Pizza", rating: "9 / 10" },
    {
      name: "Double Cheese Margherita Pizza",
      type: "Pizza",
      rating: "9.5 / 10",
    },
    { name: "Veg Kadhai", type: "Main Course", rating: "8 / 10" },
    { name: "Mix Veg Cury", type: "Main Course", rating: "6 / 10" },
    { name: "Pan Thandai", type: "Beverages", rating: "6 / 10" },
    { name: "Mango Mastani", type: "Beverages", rating: "5 / 10" },
  ];

  const clickHandler = (types) => {
    const filtered = data.filter((item) => {
      if (item.type === types) {
        return item;
      }
    });
    setFilteredData(filtered);
  };

  return (
    <div className="container">
      <h1>🍲 Foods !!</h1>
      <p style={{ marginTop: "1rem" }}>Checkout the list of foods</p>
      <button className="btn-custom" onClick={() => clickHandler("Pizza")}>
        Pizza
      </button>
      <button
        className="btn-custom"
        onClick={() => clickHandler("Main Course")}
      >
        Main Course
      </button>
      <button className="btn-custom" onClick={() => clickHandler("Beverages")}>
        Beverages
      </button>
      <hr />
      {filteredData &&
        filteredData.map((data, index) => {
          return (
            <div className="list-container" key={index}>
              <div className="list-inner">
                <p className="list-item">{data.name}</p>
                <p className="list-item">{data.rating}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default App;
