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
          <Link className="App-link" to="/">
            Login
          </Link>
          <Link className="App-link" to="/register">
            Register
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
