import { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import chartOptions from "./EPChartOptions";

const ExceedanceProbabilityChart = () => {
  const [ options, setOptions ] = useState(chartOptions)
  return (
    <>
      <h1>ExceedanceProbabilityChart</h1>
      <HighchartsReact highcharts={Highcharts} options={options}/>
    </>
  );
};

export default ExceedanceProbabilityChart;
