import React from "react";
import "./Home.css";

const Home = (props) => {
  const printDish = props.menu.map((dish) => {
    return (
      <li key={dish.id}>
        <div className="name">Name: {dish.name}</div>
        <div className="description">Description: {dish.description}</div>
        <div className="price">Price: ${dish.price}</div>
      </li>
    );
  });
  return (
    <div className="home-container">
      <ul>
        {printDish}
      </ul>
    </div>
  );
};

export default Home;
