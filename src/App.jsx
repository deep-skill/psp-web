import style from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./view/navBar/NavBar";
import Landing from "./view/landing/Landing";
import Graphic from "./view/graphic/Graphic";
import Footer from "./view/footer/Footer";

const App = () => {
	return (
		<div className={style.App}>
			<NavBar />
			<div className={style.routes}>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/graphic" element={<Graphic />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
};

export default App;
