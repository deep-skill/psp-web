import axios from "axios";

const requestToDesignSpectrum = async (location, standardType, soilType) => {
  try {
    const { data } = await axios(
      `/designspectrum?location=${location}&standardType=${standardType}&soilType=${soilType}`
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

export default requestToDesignSpectrum;