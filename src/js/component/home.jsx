import React from "react";
import TaskManager from "./TaskManager.jsx";
import { DefaultTheme } from "../DefaultTheme.js";


//create your first component
const Home = () => {
	return <>
	<div className="container text-center mt-5">
		<DefaultTheme />
		<TaskManager/>
		</div>
		</>
};

export default Home;
