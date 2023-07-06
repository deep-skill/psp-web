const options = {
  chart: {
    renderTo: "container",
    type: "line",
    zoomType: "xy",
  },
  title: {
    text: null,
    x: -20, //center
  },
  xAxis: {
    title: {
      text: "Aceleración espectral (g)",
    },
    gridLineWidth: 1,
    gridZIndex: 4,
    labels: {
      formatter: function () {
        return Math.pow(10, this.value).toFixed(3);
      },
    },
  },
  yAxis: {
    title: {
      text: "Probabilidad anual de excedencia (1/años)",
    },
    max: 0,
    min: -4,
    startOnTick: false,
    plotLines: [
      {
        value: Math.log10(1 / 475),
        width: 1.5,
        color: "#FA5858",
        label: {
          text: "1/475 años",
          x: 50,
        },
      },
      {
        value: Math.log10(1 / 2475),
        width: 1.5,
        color: "#FA5858",
        label: {
          text: "1/2475 años",
          x: 50,
        },
      },
    ],
    labels: {
      formatter: function () {
        return Math.pow(10, this.value).toFixed(4);
      },
    },
  },
  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle",
    borderWidth: 0,
  },
  plotOptions: {
    series: {
      marker: {
        enabled: false,
      },
    },
  },
  series: [
    {
      name: "5%",
      data: [],
    },
  ],
  tooltip: {
    formatter: function () {
      return (
        "(" +
        Math.pow(10, this.x).toFixed(2) +
        ", " +
        Math.pow(10, this.y).toFixed(4) +
        ")"
      );
    },
  },
};

export default options;