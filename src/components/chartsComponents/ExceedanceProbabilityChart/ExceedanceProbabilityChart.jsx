import { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import defaultOptions from "./optionsEProbabilityChart";
import { useSelector } from "react-redux";

const ExceedanceProbabilityChart = () => {
  const [options, setOptions] = useState(defaultOptions);

  const currentPeriod = useSelector((state) => state.slice.periodSelected);
  const exceedanceProbability = useSelector(
    (state) => state.slice.location.exceedanceProbability
  );

  useEffect(() => {
    if (exceedanceProbability[currentPeriod]) {
      setOptions({
        ...defaultOptions,
        series: [
          {
            name: currentPeriod,
            data: [...exceedanceProbability[currentPeriod.toString()]],
          },
        ],
      });
    }
  }, [currentPeriod, exceedanceProbability]);

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
};

export default ExceedanceProbabilityChart;
