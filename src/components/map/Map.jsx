import { useEffect, useRef, useState, forwardRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import classNames from "classnames";
import style from "./Map.module.css";
import { ResetIcon, CancelIcon } from "../../../zHelpers/icons";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIconRetina from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
	iconUrl: markerIcon, //Icono del marcador en su estado normal
	iconRetinaUrl: markerIconRetina, //Para pantallas de alta resolución
	shadowUrl: markerShadow, //Sombra proyectada por el marcador
});

// savedLocation = { lat: -12.0, lng: -77.0 }
const Map = forwardRef(({ savedLocation, handleClose }, ref) => {
	const mapRef = useRef(null);
	const markerRef = useRef(L.marker(savedLocation));
	const [location, setLocation] = useState(savedLocation);

	const handleMapClick = (event) => {
		const { lat, lng } = event.latlng;
		setLocation({
			lat: parseFloat(lat).toFixed(1),
			lng: parseFloat(lng).toFixed(1),
		});
	};

	const handleResetClick = () => {
		setLocation({ lat: -12, lng: -77.0 });
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setLocation({
			...location,
			[name]: value,
		});
	};

	useEffect(() => {
		if (!mapRef.current) {
			mapRef.current = L.map("map", {
				center: [savedLocation.lat, savedLocation.lng],
				zoom: 5.1,
			});

			L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
				attribution: "Map data &copy; OpenStreetMap contributors",
			}).addTo(mapRef.current);

			mapRef.current.on("click", handleMapClick);
			markerRef.current.addTo(mapRef.current);
		}

		mapRef.current.setView([location.lat, location.lng]);
		markerRef.current.setLatLng([location.lat, location.lng]);
	}, [location]);

	return (
		<div ref={ref} className={style.mapContainer}>
			<div id="map" className={style.map} />
			<div className={style.coordinatesContainer}>
				<button
					className={classNames(style.reset, style.cancel)}
					onClick={() => handleClose({ location: false })}
				>
					<CancelIcon />
				</button>

				<span>
					<p className={style.lat}>Latitude:</p>
					<input
						type="number"
						value={location.lat}
						name="lat"
						onChange={handleChange}
					/>
				</span>

				<span>
					<p>Longitude:</p>
					<input
						type="number"
						value={location.lng}
						name="lng"
						onChange={handleChange}
					/>
				</span>

				<span>
					<button onClick={() => handleClose({ location })}>Select</button>
					<button className={style.reset} onClick={handleResetClick}>
						<ResetIcon />
					</button>
				</span>
			</div>
		</div>
	);
});

export default Map;
