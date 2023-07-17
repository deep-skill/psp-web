import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import style from "./NavBar.module.css";
import AnimatedSeismicIcon from "../../Helpers/icons/AnimatedSeismicIcon";

const NavBar = () => {
	const location = useLocation();

	return (
		<div className={style.navContainer}>
			<Link to="/">
				<button className={style.buttonPSP}>
					<div className={style.divPSP}>
						<AnimatedSeismicIcon />
						<b>PSP</b>
					</div>
				</button>
			</Link>
			{location.pathname !== "/Graphic" && (
				<Link to="/Graphic">
					<button className={style.buttonGraphic}>Seleccionar Coordenadas</button>
				</Link>
			)}
		</div>
	);
};

export default NavBar;
