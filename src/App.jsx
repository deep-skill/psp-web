import style from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Landing from "./components/landing/Landing";
import Graphic from "./components/graphic/Graphic";
// import Footer from "./components/footer/Footer";

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
			{/* <Footer /> */}
		</div>
	);
};

export default App;
