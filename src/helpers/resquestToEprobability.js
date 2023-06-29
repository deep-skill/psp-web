import axios from "axios";

const resquestToEprobability = async (location, period) => {
  try {
    const { data } = await axios(
      `http://localhost:3001/psp/eprobability?location=${location}&period=${period}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default resquestToEprobability;
