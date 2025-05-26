import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="Navbar">
      <h1 className="title">El 10</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/reserve">Make your reserve</Link>
        </li>
        <li>
          <Link to="/map">How to get</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
