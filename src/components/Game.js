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
	constructor(props) {
		super(props);
		this.state = {
			characters: this.reset(characters),
			score: 0,
			highestScore: 0,
			message: defaultMessage
		};
	}

	reset = characters => {
		return characters.map(character => Object.assign({}, character));
	}

	resetGame = gameMessage => {
		let newCharacters = this.reset(characters);
		this.setState({
			score: 0,
			characters: newCharacters,
			message: gameMessage
		})
	}

	shuffle = () => {
		let arr = this.state.characters;
		let currentIndex = arr.length;
		let tempValue;
		let randomIndex;
		while (0 !== currentIndex) {
			randomIndex = Math.floor(Math.random()*currentIndex);
			currentIndex = currentIndex -1;
			tempValue = arr[currentIndex];
			arr[currentIndex] = arr[randomIndex];
			arr[randomIndex] = tempValue;
		}
		this.setState({characters: arr});
	}

	checkClick = id => {
		const isClicked = this.state.characters.find(character => character.id === id )
		this.shuffle();

		if (isClicked.clicked) {
			this.resetGame(lostMessage);

		} else {
			isClicked.clicked = true;
			let newScore = this.state.score + 1;
			this.setState({
				score: newScore,
				highestScore: Math.max(this.state.highestScore, newScore),
				message: ""
			});

			if (this.state.score === this.state.characters.length) {
				
				this.resetGame(wonMessage);
			}
		}
	}

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



