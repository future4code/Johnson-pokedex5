import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DetailPage from "./Pages/DetailPage/DetailPage";
import Home from "./Pages/Home/Home";
import Pokedex from "./Pages/Pokedex/Pokedex";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Pokedex">Pokedex</Link>
            </li>
            <li>
              <Link to="/detail">DetailPage</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/detail">
            <DetailPage />
          </Route>
          <Route path="/Pokedex">
            <Pokedex />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}