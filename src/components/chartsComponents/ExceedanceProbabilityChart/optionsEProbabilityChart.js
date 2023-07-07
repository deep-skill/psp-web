const options = {
  chart: {
    spacing: [30, 10, 5, 10],
    backgroundColor: '#003459',
    borderRadius: 5,
    type: "line",
    zoomType: "xy",
  },
  title: {
    text: null,
    x: -20, 
  },
  xAxis: {
    title: {
      text: "Aceleración espectral (g)",
      style: {
        color: "#fff"
      }
    },
    lineColor: "#fff",
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
      style: {
        color: "#fff"
      }
    },
    max: 0,
    min: -4,
    startOnTick: false,
    plotLines: [
      {
        value: Math.log10(1 / 475),
        width: 1.5,
        color: "#00A8E8",
        label: {
          text: "1/475 años",
          x: 50,
          style: {
            color: "#fff"
          }
        },
      },
      {
        value: Math.log10(1 / 2475),
        width: 1.5,
        color: "#00A8E8",
        label: {
          text: "1/2475 años",
          x: 50,
          style: {
            color: "#fff"
          }
        },
      },
    ],
    labels: {
      formatter: function () {
        return Math.pow(10, this.value).toFixed(4);
      },
      style: {
        color: "#fff"
      }
    },
  },
  legend: {
    layout: "vertical",
    align: "center",
    verticalAlign: "bottom",
    borderWidth: 0,
    itemStyle: {
      color: "#fff"
    }
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