import "./App.css";
import Person from "./components/Person/Person.jsx";



function App() {
  return (
    <div>
      <Person name={"Agustin"} surname={"Erimbaue"} edad={30}/>
      <Person name={"Florencia"} surname={"Ybanez"} age={27}/>
      <Person name={"alvaro"} surname={"Ybanez"} age={28}/>
    </div>
  );
}

export default App;
