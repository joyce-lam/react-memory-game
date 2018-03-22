import React from "react";
import "./Banner.css";

const Banner = props => (
	<div className="col-12 banner">
		<h2>{props.message}</h2>
	</div>
);

export default Banner;