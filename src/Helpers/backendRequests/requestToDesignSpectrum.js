import axios from "axios";
import { resultNormAndSoilType } from "../../redux/actions";

const requestToDesignSpectrum = (location, standardType, soilType) => {
  return async (dispatch) =>{  
    try {
      const { data } = await axios(
        `/designspectrum?location=${location}&standardType=${standardType}&soilType=${soilType}`
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