import React from "react";
import "./App.css";

import MyNavbar from "./Components/Navbar/MyNavbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Test } from "./Components/Test";

import Nowe from './Components/Nowe';
import About from "./Components/About";
import Contact from "./Components/Contact";
import Products from "./Components/Products";
import NotFound from "./Components/NotFound";
import Register from "./Components/Register";
import { ShoppingCart } from "./Components/ShoppingCart";
import Users from "./Components/Users";
import Tester from "./Components/Tester"

function App() {
  return (
    <Router>
      <div className="App">
        <MyNavbar />
        <Switch>
          <Route exact path="/about" component={About} />
         <Route exact path="/contact" component={Contact} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/shoppingCart" component={ShoppingCart} />
          <Route exact path="/" component={Test} />
          <Route exact path="/users" component={Users} />
          <Route path="/register" component={Register} />
          <Route path="/nowe" component={Nowe} />
          <Route path="/tester" component={Tester} />

           <Route path="*" component={NotFound} />
           
        </Switch>
      </div>
    </Router>
  );
}

export default App;
