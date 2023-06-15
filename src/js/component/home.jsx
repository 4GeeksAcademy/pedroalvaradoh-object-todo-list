import React from "react";
import TaskManager from "./TaskManager.jsx";

//create your first component
const Home = () => {
	return <>
	<div className="container text-center mt-5">
		<TaskManager/>
		</div>
		</>
};

export default Home;
