import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CountriesList from "./components/CountriesList";

const App = () => {
  return (
    <Fragment>
      <CountriesList />
    </Fragment>
  );
};

export default App;
