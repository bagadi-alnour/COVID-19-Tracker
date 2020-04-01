import React, { Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CountriesList from "./components/CountriesList";
import Charts from "./components/Charts";

const App = () => {
  return (
    <Fragment>
      <CountriesList />
    </Fragment>
  );
};

export default App;
