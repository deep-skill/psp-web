import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode> {/* Encontrar y corregir problemas potenciales durante el desarrollo */}
		<BrowserRouter> {/* Funcionalidades de enrutamiento, aplicaciones de una sola página (SPA) */}
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
