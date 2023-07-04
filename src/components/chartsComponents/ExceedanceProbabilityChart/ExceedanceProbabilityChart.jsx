import { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import defaultOptions from "./optionsEProbabilityChart";

const ExceedanceProbabilityChart = () => {
  const [options, setOptions] = useState(defaultOptions);
  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
};

export default ExceedanceProbabilityChart;
