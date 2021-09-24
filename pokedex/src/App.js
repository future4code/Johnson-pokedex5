import { CssBaseline } from "@mui/material";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HeaderPage from "./Components/Header";
import DetailPage from "./Pages/DetailPage/DetailPage";
import Home from "./Pages/Home/Home";
import Pokedex from "./Pages/Pokedex/Pokedex";

export default function App() {
  return (
    <Router>
      <CssBaseline/>
      <div>
        <HeaderPage/>
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