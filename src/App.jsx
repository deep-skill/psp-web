import style from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Landing from "./components/landing/Landing";
//import Graphic from "./components/graphic/Graphic";

const App = () => {
	return (
		<div className={style.App}>
			<NavBar />
			<Routes className="Routes">
				<Route path="/" element={<Landing />} />
				{/* <Route path="/graphic" element={<Graphic />} /> */}
			</Routes>
		</div>
	);
};

export default App;
