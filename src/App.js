import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Formulario from "./pages/Formulario";
import Register from "./pages/Register";


import './App.css';

function App() {
  return (
    <div className="App-header">
      <Router>
        <div>
          <Link className="App-link" style={{ margin: "0 10 px" }} to="/">
            Login
          </Link>
          <Link className="App-link" style={{ margin: "0 10 px" }} to="/register">
            Register
          </Link>
          <Link className="App-link" style={{ margin: "0 10 px" }} to="/home">
            Home
          </Link>
        </div>

        <Switch>
          <Route path="/" exact>
            <Formulario />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
