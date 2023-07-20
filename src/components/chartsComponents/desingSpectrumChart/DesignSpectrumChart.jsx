import { useEffect, useRef } from "react";
import Highcharts from "highcharts";
import defaultOptions from "./optionsDesignSpectrumChart";
import { useSelector } from "react-redux";

const DesignSpectrumChart = () => {
  const chartRef = useRef(null);

  const hazardSpectrum = useSelector(
    (state) => state.slice.location.hazardSpectrum
  );

  const returnPeriodActive = useSelector(
    (state) => state.slice.returnPeriodActive
  );

  const clearReturnPeriodChart = useSelector(
    (state) => state.slice.clearReturnPeriodChart
  );

  useEffect(() => {
    if (chartRef.current) {
      for (let i = 0; i < chartRef.current.series.length; i++) {
        if (!returnPeriodActive.includes(chartRef.current.series[i].name)) {
          removeSerie(i, chartRef.current);
        }
      }
    }
  }, [returnPeriodActive]);

  useEffect(() => {
    returnPeriodActive?.map((period) => {
      if (chartRef.current) {
        let seriedFound = chartRef.current.series.findIndex(
          (serie) => serie.name === period
        );
        if (seriedFound < 0) {
          let hazardData = hazardSpectrum[period];
          if (hazardData) {
            updateSerie({ name: period, data: hazardData }, chartRef.current);
          }
        }
      }
    });
  }, [returnPeriodActive, hazardSpectrum]);

  useEffect(() => {
    const chart = Highcharts.chart("chart-container", defaultOptions);
    chartRef.current = chart;
  }, []);

  useEffect(() => {
    clearChart(chartRef.current)
  }, [clearReturnPeriodChart]);

  const updateSerie = (dataserie, chart) => {
    chart.addSeries(dataserie);
  };

  const removeSerie = (index, chart) => {
    chart.series[index].remove();
  };

  const clearChart = (chart) =>{
    while (chart.series.length > 0) {
      chart.series[0].remove();
    }
    console.log(chart.series);
  }

  return <div id="chart-container">{/* Renderizar el gráfico */}</div>;
};

export default DesignSpectrumChart;
