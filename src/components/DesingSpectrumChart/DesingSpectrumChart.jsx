import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import chartOptions from "./DSChartOptions";
import { useState } from "react";

const DesingSpectrumChart = () => {
  const [ options, setOptions ] =useState(chartOptions)
  return (
    <>
      <h1>Desing Spectrum</h1>
      <HighchartsReact highcharts={Highcharts} options={options}/>
    </>
  );
};

export default DesingSpectrumChart;
