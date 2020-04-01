import React, { useEffect, useState } from "react";
import axios from "axios";
function Charts() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = (
        await axios.get(
          "https://ghoapi.azureedge.net/api/DIMENSION/COUNTRY/DimensionValues"
        )
      ).data;
      console.log(res);
    }
    getData();
  }, []);
  return <div className="container">Charts</div>;
}

export default Charts;
