import React from "react";
import "./Home.css";
const Home = (props) => {
  const printDish = props.menu.map((dish) => {
    return (
      <li>
        <div className="name">name:{dish.name}</div>
        <div className="description">description:{dish.description}</div>
        <div className="price">price:${dish.price}</div>
      </li>
    );
  });
  return <div>{printDish}</div>;
};

export default Home;
