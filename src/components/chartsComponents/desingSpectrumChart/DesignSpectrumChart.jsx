import { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import defaultOptions from "./optionsDesignSpectrumChart";
import { useSelector } from "react-redux";

const DesignSpectrumChart = () => {
  const [options, setOptions] = useState(defaultOptions);

  const hazardSpectrum = useSelector(
    (state) => state.slice.location.hazardSpectrum
  );
  const returnPeriodActive = useSelector(
    (state) => state.slice.returnPeriodActive
  );

  useEffect(() => {
    let filteredSeries = options.series.filter((serie) =>
      returnPeriodActive.includes(serie.name)
    );
    setOptions({
      ...options,
      series: [...filteredSeries],
    });
  }, [returnPeriodActive]);

  useEffect(() => {
    returnPeriodActive.map((period) => {
      const hazardData = hazardSpectrum[period];
      if (hazardData) {
        const serieFound = options.series.findIndex(
          (serie) => serie.name === period.toString()
        );
        if (serieFound < 0) {
          const newData = { name: period.toString(), data: hazardData };
          setOptions((prevOptions) => ({
            ...prevOptions,
            series: [...prevOptions.series, newData],
          }));
        }
      }
    });
  }, [returnPeriodActive, hazardSpectrum]);

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
};

export default DesignSpectrumChart;
