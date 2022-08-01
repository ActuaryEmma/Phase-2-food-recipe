import React, {useState} from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import Home from "../home/Home";
import About from "../about/About";
import Contact from "../contact/Contact";
import Details from "../details/Details";
import AddRecipe from "../addComment/AddComment";
import GetRecipes from "../desserContainer/GetRecipes";

function App() {
  const [dessert, setDessert] = useState([]);
  return (
    <Router>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/addrecipe" element={<AddRecipe dessert={dessert} setDessert={setDessert}/>}></Route>
        <Route exact path="/getrecipes" element={<GetRecipes dessert={dessert} setDessert={setDessert}/>}></Route>
        <Route exact path="/item/:mealId" element={<Details />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
