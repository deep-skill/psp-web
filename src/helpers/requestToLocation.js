import axios from "axios";

const requestToLocation = async (lat, long) => {
  try {
    const { data } = await axios(
      `http://localhost:3001/psp/location?lat=${lat}&long=${long}`
    );
    return data;
  } catch (error) {
    console.log(data);
  }
};

export default requestToLocation;
