import { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import defaultOptions from "./optionsEProbabilityChart";
import { useSelector } from "react-redux";
import dampingPercentage from "../../../Helpers/dampingPercentageCalculator";

const ExceedanceProbabilityChart = () => {
  const [options, setOptions] = useState(defaultOptions);

  const currentPeriod = useSelector((state) => state.slice.periodSelected);
  const exceedanceProbability = useSelector(
    (state) => state.slice.location.exceedanceProbability
  );
  const dampingSelected = useSelector((state) => state.slice.dampingSelected);

  useEffect(() => {
    let filteredSeries = options.series.filter((serie) =>
      dampingSelected.includes(serie.name.slice(0, serie.name.length - 1))
    );
    setOptions({
      ...options,
      series: [...filteredSeries],
    });
  }, [dampingSelected]);

  useEffect(() => {
    dampingSelected?.map((damping) => {
      let seriedFound = options.series.findIndex(
        (serie) => serie.name === damping + "%"
      );
      if (seriedFound < 0) {
        const dampingPercentageResult = dampingPercentage(
          damping,
          options.series[0].data
        );

        setOptions({
          ...options,
          series: [...options.series, dampingPercentageResult],
        });
      }
    });

    return;
  }, [dampingSelected]);

  useEffect(() => {
    if (exceedanceProbability[currentPeriod]) {
      setOptions({
        ...defaultOptions,
        series: [
          {
            name: "5%",
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
