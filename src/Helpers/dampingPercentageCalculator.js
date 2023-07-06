const dampingPercentage = (percentage, serie) => {
  let auxiliar = percentage / 100;
  let valor;
  if (auxiliar < 0.05) {
    valor = (2 * (auxiliar + 1)) / (1 + 14.68 * Math.pow(auxiliar, 0.865));
  } else {
    valor = Math.pow(0.05 / auxiliar, 0.4);
  }

  let series = [];

  for (const data of serie) {
    series.push([data[0], Math.log10(Math.pow(10, data[1]) * valor)]);
  }

  const result = {
    name: percentage.toString() + "%",
    data: series,
  };

  return result;
};

export default dampingPercentage;
