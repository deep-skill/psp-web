import { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import defaultOptions  from "./optionsDesignSpectrumChart";

const DesignSpectrumChart = () => {
    const [ options, setOptions ] = useState(defaultOptions);
  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
};

export default DesignSpectrumChart;
