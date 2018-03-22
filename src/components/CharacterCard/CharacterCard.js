import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
	<div className="card">
		<div className="img-container" data-id={props.id} onClick={()=> props.checkClick(props.id)}>
			<img alt={props.name} src={props.image} />
		</div>
	</div>
);

export default CharacterCard;