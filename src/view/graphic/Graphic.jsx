import style from "./Graphic.module.css";
import "../../components/map/ViewMap.css";
import { CSSTransition } from "react-transition-group";
import Map from "../../components/map/Map";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import AnnualProbabilityOfLeave from "../../components/annualProbability/AnnualProbability";
import UniformHazardSpectrum from "../../components/uniformHazard/UniformHazard";
import { setLocation } from "../../redux/actions";

const Graphic = () => {
	const dispatch = useDispatch();
	const nodeRef = useRef(null);
	const [viewMap, setViewMap] = useState(false);
	const location = useSelector((state) => state.slice.location);

	const handleClick = () => {
		setViewMap(!viewMap);
	};
	
	const handleMapClose = (data) => {
		dispatch(setLocation(data.location || location));
		setViewMap(false);
	};

	return (
		<div className={style.graphicContainer}>
			<CSSTransition
				in={viewMap}
				nodeRef={nodeRef}
				timeout={500}
				classNames="viewMap"
				unmountOnExit
			>
				<Map ref={nodeRef} savedLocation={location} handleClose={handleMapClose} />
			</CSSTransition>

			<br />

			<button className={style.buttonToMap} onClick={handleClick}>
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