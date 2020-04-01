import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";

const CountriesList = () => {
  const [countries, setcountries] = useState([]);
  const [totalConfirmed, settotalConfirmed] = useState([]);
  const [totalNewConfirmed, settotalNewConfirmed] = useState([]);
  const [totalNewDeaths, settotalNewDeaths] = useState([]);
  const [totalDeaths, settotalDeaths] = useState([]);
  const [totalnewRecovered, settotalNewRecovered] = useState([]);
  const [totalRecovered, setttotalRecovered] = useState([]);
  useEffect(() => {
    async function getData() {
      const data = (await axios.get("https://api.covid19api.com/summary")).data;
      setcountries(data.Countries);
      settotalNewConfirmed(data.Countries.slice(1).map(c => c.NewConfirmed));
      settotalConfirmed(data.Countries.slice(1).map(c => c.TotalConfirmed));
      settotalNewDeaths(data.Countries.slice(1).map(c => c.NewDeaths));
      settotalDeaths(data.Countries.slice(1).map(c => c.TotalDeaths));
      settotalNewRecovered(data.Countries.slice(1).map(c => c.NewRecovered));
      setttotalRecovered(data.Countries.slice(1).map(c => c.TotalRecovered));
    }
    getData();
  }, []);

  const sumOfConfirmed = arr => arr.reduce((a, b) => a + b, 0);

  const list = countries.slice(1).map(c => (
    <Fragment key={c.CountrySlug}>
      <tr>
        <th>{c.Country}</th>
        <td className="font-weight-bold">{c.NewConfirmed.toLocaleString()}</td>
        <td className="text-warning font-weight-bold">
          {" "}
          <strong> {c.TotalConfirmed.toLocaleString()} </strong>
        </td>
        <td className="text-danger font-weight-bold">
          {c.NewDeaths.toLocaleString()}
        </td>
        <td className="text-danger font-weight-bold">
          {c.TotalDeaths.toLocaleString()}
        </td>
        <td className="text-success" font-weight-bold>
          {c.NewRecovered.toLocaleString()}
        </td>
        <td className="text-success" font-weight-bold>
          {c.TotalRecovered.toLocaleString()}
        </td>
        <td className="text-danger" font-weight-bold>
          {c.TotalConfirmed !== 0 &&
            ((c.TotalDeaths * 100) / c.TotalConfirmed).toFixed(2) + " %"}
        </td>
      </tr>
    </Fragment>
  ));
  return (
    <Fragment>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">COVID-19 tracker</h1>
          <p class="lead text-">
            The Coronavirus caused by COVID-19, affects 199 territories in the
            world, this number is increasing every day. For more information go
            to <a href="https://www.who.int/"> The World Health Organization</a>
          </p>
          <p class="lead">
            By :{" "}
            <a
              className="text-muted"
              href="http://www.bagadi-alnour.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bagadi Alnour
            </a>
          </p>
        </div>
      </div>
      <div className="container mb-3">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="card">
              <div className="card-header">Confirmed Cases Globally</div>
              <div className="card-body">
                <h4 className="card-title text-danger">
                  {sumOfConfirmed(totalConfirmed).toLocaleString()}
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="card">
              <div className="card-header">Confirmed Cases Globally Today</div>
              <div className="card-body">
                <h4 className="card-title text-danger">
                  {sumOfConfirmed(totalNewConfirmed).toLocaleString()}
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 my-2">
            <div className="card">
              <div className="card-header">Total Confirmed Deaths Globally</div>
              <div className="card-body">
                <h4 className="card-title text-danger">
                  {sumOfConfirmed(totalDeaths).toLocaleString()}
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 my-2">
            <div className="card">
              <div className="card-header">Total Confirmed Deaths Today</div>
              <div className="card-body">
                <h4 className="card-title text-danger">
                  {sumOfConfirmed(totalNewDeaths).toLocaleString()}
                </h4>
              </div>
            </div>
          </div>
        </div>
        <table className="table table-bordered table-responsive">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Countries </th>
              <th scope="col"> New Confirmed</th>
              <th scope="col">Total Confirmed</th>
              <th scope="col">New deaths </th>
              <th scope="col">Total deaths</th>
              <th scope="col">New recovered</th>
              <th scope="col">Total recovered</th>
              <th scope="col">Death percentage</th>
            </tr>
          </thead>
          <tbody>
            {list}
            <tr>
              <th>Total</th>
              <td className="font-weight-bold">
                {sumOfConfirmed(totalNewConfirmed).toLocaleString()}
              </td>
              <td className="text-warning  font-weight-bold">
                {sumOfConfirmed(totalConfirmed).toLocaleString()}
              </td>
              <td className="text-danger  font-weight-bold">
                {sumOfConfirmed(totalNewDeaths).toLocaleString()}
              </td>
              <td className="text-danger  font-weight-bold">
                {sumOfConfirmed(totalDeaths).toLocaleString()}
              </td>
              <td className="text-success  font-weight-bold">
                {sumOfConfirmed(totalnewRecovered).toLocaleString()}
              </td>
              <td className="text-success font-weight-bold">
                {sumOfConfirmed(totalRecovered).toLocaleString()}
              </td>
              <td>%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default CountriesList;
