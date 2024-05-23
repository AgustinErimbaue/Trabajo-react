import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Navbar/Header";
import Reserve from "./components/Reserve/Reserve";
import HowtoGet from "./components/HowToGet/HowtoGet";

const dishes = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    description: "Classic Italian pasta with creamy egg sauce, pancetta, and Parmesan cheese.",
    price: 12,
  },
  {
    id: 2,
    name: "Margherita Pizza",
    description: "Traditional pizza topped with fresh tomatoes, mozzarella cheese, and basil.",
    price: 15,
  },
  {
    id: 3,
    name: "Caesar Salad",
    description: "Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan cheese.",
    price: 10,
  },
  {
    id: 4,
    name: "Grilled Salmon",
    description: "Fresh salmon fillet grilled to perfection, served with lemon and herbs.",
    price: 20,
  },
  {
    id: 5,
    name: "Beef Tacos",
    description: "Soft tortillas filled with seasoned beef, lettuce, cheese, and salsa.",
    price: 13,
  },
  {
    id: 6,
    name: "Chicken Alfredo",
    description: "Pasta with creamy Alfredo sauce, grilled chicken, and Parmesan cheese.",
    price: 14,
  },
  {
    id: 7,
    name: "Shrimp Scampi",
    description: "Succulent shrimp sautéed in garlic butter sauce, served over linguine.",
    price: 18,
  },
  {
    id: 8,
    name: "Vegetable Stir-Fry",
    description: "A mix of fresh vegetables stir-fried in a savory soy-ginger sauce.",
    price: 11,
  },
];


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home menu={dishes} />}/>
        <Route path="/reserve" element={<Reserve/>}/>
        <Route path="/map" element ={<HowtoGet/>}/>
      </Routes>
    </BrowserRouter>

    //  />
  );
}

export default App;
