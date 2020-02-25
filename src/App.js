import React, { Component } from 'react';
import logo from './logo.svg';
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import ImageCard from "./components/ImageCard";
import cardImage from "./cardImage.json";
import "./index.css";
import './App.css';

var correctPick = 0;
var bestScore = 0;
var notification = "Select a card below to reveal a SEC team logo. Keep picking cards trying not to reveal the original logo";

class App extends Component {
  state = {
    cardImage,
    correctPick,
    bestScore,
    notification

  };

  randomImages = cardImage => {
    cardImage.sort((a, b) => {
      return 0.5 - Math.random();
    });
  };
  // Picking the original logo
  updatePicked = id => {
    const cardImage = this.state.cardImage;
    const pickedImage = cardImage.filter(cardImage => cardImage.id === id);

    if (pickedImage[0].clicked) {
      correctPick = 0;
      notification = "Opps!! You already clicked that one. Try again?"
      this.randomImages(cardImage);

      cardImage.forEaach(image => cardImage.clicked = false);

      this.setState({ notification });
      this.setState({ correctPick });
      this.setState({ cardImage });
    }

    // Picking anycard other than original logo

    else if (correctPick < 11) {
      pickedImage[0].clicked = true;
      correctPick++;

      notification = "Nice choice- keep going!!";

      if (correctPick > bestScore) {
        bestScore = correctPick;
        this.setState({ bestScore });
      }

      this.randomImages(cardImage);
      this.setState({ notification });
      this.setState({ correctPick });
      this.setState({ cardImage });
    }

    // Perfect game

    else {
      pickedImage[0] = true;
      correctPick = 0
      notification = "Well Done!! Perfect Game!!";
      bestScore = 12;
      this.setState({ bestScore });
    }
  };

  render() {
    return (
      <Wrapper>
        <Title>Card Clicky Game **SEC version **</Title>
        <h2 className="headerNotification">{this.state.notification}</h2>
        <div className="container score">
          <h3>Correct Picks: {this.state.correctPicks}
            <br /> Best Score: {this.state.bestScore}
          </h3>
        </div>

        <div className="container">
          <div className="row">
           {this.state.cardImage.map(image => (
          <ImageCard
              updatePicked={this.updatePicked}
              id={image.id}
              key={image.id}
              image={image.image}
            />
            ))}
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;
