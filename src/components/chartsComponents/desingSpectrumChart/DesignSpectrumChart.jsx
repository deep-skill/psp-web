import { useEffect, useRef } from "react";
import Highcharts from "highcharts";
import defaultOptions from "./optionsDesignSpectrumChart";
import { useSelector } from "react-redux";

const DesignSpectrumChart = () => {
  const regex = /e30|ibc|asc/;

  const chartRef = useRef(null);

  const soilSelected = useSelector((state) => state.slice.soilSelected);
  const normSelected = useSelector((state) => state.slice.normSelected);
  const soils = useSelector((state) => state.slice.soils);
  const designSpectrum = useSelector(
    (state) => state.slice.location.designSpectrum
    );

  const hazardSpectrum = useSelector(
    (state) => state.slice.location.hazardSpectrum
  );

  const returnPeriodActive = useSelector(
    (state) => state.slice.returnPeriodActive
  );

  const clearReturnPeriodChart = useSelector(
    (state) => state.slice.clearReturnPeriodChart
  );
  
  //useEffect to remove return Period serie of chart
  useEffect(() => {
    if (chartRef.current) {
      for (let i = 0; i < chartRef.current.series.length; i++) {
        let name = chartRef.current.series[i].name
        if (!returnPeriodActive.includes(name) && !regex.test(name)) {
          removeSerie(i, chartRef.current);
        }
      }
    }
  }, [returnPeriodActive]);

  //useEffect to add returnPeriod serie on chart
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

  //useEffect to initialize chart
  useEffect(() => {
    const chart = Highcharts.chart("chart-container", defaultOptions);
    chartRef.current = chart;
  }, []);


  //useEffect to delete all series of chart
  useEffect(() => {
    clearChart(chartRef.current)
  }, [clearReturnPeriodChart]);

  //useEffect to add DesignSpectrum serie on chart
  useEffect(() => {
    if(soilSelected){
      let data = designSpectrum.find(norm => normSelected in norm && soilSelected in norm[normSelected])
      if(data){
      let soilName = soils.find(soil => soil.value === +soilSelected)
        if(soilName){
        let dataserie = {name: `${normSelected}-${soilName.name}`, data: data[normSelected][soilSelected] }
        updateDesingSerie(dataserie, chartRef.current)
        }
      }
    }
  }, [soilSelected, designSpectrum]);

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
  }

  const updateDesingSerie = (dataserie, chart) => {
    let foundSerie = chart.series.findIndex(serie => regex.test(serie.name))
    if(foundSerie >= 0){
    chart.series[foundSerie].remove();
    chart.addSeries(dataserie)
    }else{
      chart.addSeries(dataserie)
    }
  };

  return <div id="chart-container">{/* Renderizar el gráfico */}</div>;
};

export default DesignSpectrumChart;
