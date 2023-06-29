import style from "./Graphic.module.css";
import AnnualProbabilityOfLeave from "./helpers/annualProbabilityOfLeave/AnnualProbabilityOfLeave";
import UniformHazardSpectrum from "./helpers/uniformHazardSpectrum/UniformHazardSpectrum";

const Graphic = () => {
	return (
		<div className={style.graphicContainer}>
			{/* map here */}

			<br />

			<button className={style.buttonToMap}>
				Latitud: {location.lat}, Longitud: {location.lng}
			</button>

			<br />

			<AnnualProbabilityOfLeave />

			<br />

			<UniformHazardSpectrum />
		</div>
	);
};

export default Graphic;
