const options = {
  chart: {
    spacing: [30, 10, 5, 10],
    backgroundColor: "#003459",
    borderRadius: 5,
    type: "line",
  },
  title: {
    text: null,
    x: -20,
  },
  xAxis: {
    title: {
      text: "Periodo estructural (s)",
      style: {
        color: "#fff",
      },
    },
    lineColor: "#fff",
    gridLineWidth: 1,
    gridZIndex: 4,
    labels: {
      formatter: function () {
        return this.value.toFixed(2);
      },
    },
  },
  yAxis: {
    title: {
      text: "Aceleración espectral (g)",
      style: {
        color: "#fff",
      },
    },
    plotLines: [
      {
        value: 0,
        width: 1,
        color: "#fff",
      },
    ],
    labels: {
      formatter: function () {
        return this.value.toFixed(2);
      },
      style: {
        color: "#fff",
      },
    },
  },
  legend: {
    layout: "vertical",
    align: "center",
    verticalAlign: "bottom",
    borderWidth: 0,
    itemStyle: {
      color: "#fff",
    },
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
      name: "",
      data: [],
    },
  ],
  tooltip: {
    formatter: function () {
      return "(" + this.x.toFixed(3) + ", " + this.y.toFixed(3) + ")";
    },
  },
};

export default options;
