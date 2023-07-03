import axios from "axios";
import { setNorms } from "./actions";

export const getStandard = () => {
	return async (dispatch) => {
		await axios
			.get("/standards")
			.then((res) => res.data)
			.then((data) => dispatch(setNorms(data.data.standards)))
			.catch((err) => alert(err.response.data.error));
	};
};