import axios from "axios";
import { resultNormAndSoilType } from "../../redux/actions";

const requestToDesignSpectrum = (location, standardType, soilType, lat, long) => {
  return async (dispatch) =>{  
    try {
      const { data } = await axios(
        `/designspectrum?location=${location}&standardType=${standardType}&soilType=${soilType}&lat=${lat}&long=${long}`
      );
      const series = [];

      data.data.map((value) => {
        series.push([parseFloat(value.x),parseFloat(value.y)]);
      });

      const result = { standardType: standardType, soilType: soilType, data: series };

      return dispatch(resultNormAndSoilType(result));
    } catch (error) {
      console.log(error);
    }
  };
};

export default requestToDesignSpectrum;