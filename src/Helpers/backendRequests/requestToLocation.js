import axios from "axios";

const requestToLocation = async (lat, long) => {
  try {
    const { data } = await axios(
      `/location?lat=${lat}&long=${long}`
    );

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export default requestToLocation;