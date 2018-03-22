import React from "react";
import Navbar from "./Navbar";
import MainContainer from "./MainContainer";
import Banner from "./Banner";
import CharacterCard from "./CharacterCard";
import characters from "../characters.json";

const defaultMessage = `Click an image to begin`;
const lostMessage = `You lost. Try again!`;
const wonMessage = `You won! Play another round.`;

export default class Game extends React.Component {
	state = {
		characters: characters,
		score: 0,
		highestScore: 0,
		message: defaultMessage
	};

	


	render() {
		return (
			<div>
				<Navbar
					score={this.state.score}
					highestScore={this.state.highestScore}/>
					<Banner
					message={this.state.message}/>
						<MainContainer>
							<div className="col-xs-12 col-sm-12 col-md-12">
								{this.state.characters.map(character => {
									return <CharacterCard
										key={character.id}
										id={character.id}
										image={character.image}
										name={character.name}
										checkClick={this.checkClick}
									/>
									}
								)}
							</div>
						</MainContainer>
			</div>
		)
	}
}


