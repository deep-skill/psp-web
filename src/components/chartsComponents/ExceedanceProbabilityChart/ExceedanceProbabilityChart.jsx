import { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import defaultOptions from "./optionsEProbabilityChart";
import { useSelector } from 'react-redux';


const ExceedanceProbabilityChart = () => {
  const [options, setOptions] = useState(defaultOptions);

  const currentPeriod = useSelector(state => state.slice.periodSelected);
  const exceedanceProbability = useSelector(state => state.slice.location.exceedanceProbability)

  useEffect(() => {
    console.log(options)
    console.log(exceedanceProbability[currentPeriod])
    setOptions(prevOptions => ({
      ...prevOptions,
      series: [{ name: 'name', data: exceedanceProbability[currentPeriod] }]}));
  }, []);
  
  return (  
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
};

export default ExceedanceProbabilityChart;
