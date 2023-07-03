import axios from "axios";

const requestToExceedanceProbability = async (location, period) => {
  try {
    const { data } = await axios(
      `/eprobability?location=${location}&period=${period}`
    );
    const series = [];

    data.data.map((value) => {
      series.push([
        Math.log10(parseFloat(value.x)),
        Math.log10(parseFloat(value.y)),
      ]);
    });

    return series;
  } catch (error) {
    console.log(error);
  }
};

export default requestToExceedanceProbability;