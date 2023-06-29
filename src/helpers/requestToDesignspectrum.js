import axios from "axios";

const requestToDesignspectrum = async (location, standardType, soilType) => {
    try {
        const { data } = await axios(
          `http://localhost:3001/psp/designspectrum?location=${location}&standardType=${standardType}&soilType=${soilType}`
        );
        return data;
    } catch (error) {
        console.log(error)
    }
};

export default requestToDesignspectrum;
