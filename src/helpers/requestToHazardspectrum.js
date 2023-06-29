import axios from "axios";

const requestToHazardspectrum = async (location, tr) => {
  try {
    const { data } = axios(
      `http://localhost:3001/psp/hazardspectrum?location=${location}&tr=${tr}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default requestToHazardspectrum;
