import React, { Component } from 'react';
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import ImageCard from "./components/ImageCard";
import cardImage from "./cardImage.json";
import "./index.css";
import './App.css';

var correctPick = 0;
var bestScore = 0;
var notification = "Select a card below to reveal a SEC team logo. Keep picking cards trying not to reveal the original logo";
console.log (cardImage);

//Randomize images
 function shuffle(cardImage) {
   var currentIndex = cardImage.length, temporaryValue, randomIndex;
   while (0 !==currentIndex) {
     randomIndex = Math.floor(Math.random() * currentIndex);
     currentIndex -= 1;

     temporaryValue = cardImage[currentIndex];
     cardImage[currentIndex] = cardImage[randomIndex];
     cardImage[randomIndex] = temporaryValue;
   }

   return cardImage;
  }

  class App extends Component {
    state = {
      cardImage,
      correctPick,
      bestScore,
      notification,
      clickedLogos: []
  
    };
//Randomize Cards
    random= () => {
      let randomImages = shuffle(cardImage);
      this.setState({ cardImage})
      console.log(cardImage);
      return randomImages;
    }
    
 
  // Clicking a logo
  updatePicked = id => {
    const cardImage = this.state.cardImage;
    const pickedImage = cardImage.filter(cardImage => cardImage.id === id);

    if (pickedImage[0].clicked) {
      correctPick = 0;
      notification = "Opps!! You already clicked that one. Try again?";
      cardImage.map(cardImage => cardImage.clicked =false);
      this.setState({ notification });
      this.setState({ correctPick });
      this.setState({ cardImage });
    
      // Randomize
    cardImage.sort(function (a, b) { return .5-Math.random() });

    //Correct Pick

    } else if (correctPick < 11) {
      pickedImage[0].clicked = true;
      correctPick++;

      notification = "Nice choice- keep going!!";

      if (correctPick > bestScore) {
        bestScore = correctPick;
        this.setState({ bestScore });
      }
      this.setState({ notification });
      this.setState({ correctPick });
      this.setState({ cardImage })

    cardImage.sort(function (a, b) { return .5-Math.random() });

    //Perfect Game

  }else {
      pickedImage[0] = true;
      correctPick = 0
      notification = "Well Done!! Perfect Game!!";
      bestScore = 12;
      this.setState({ bestScore });

      cardImage.map(cardImage => cardImage.clicked = false);
      this.setState({cardImage});
      this.setState({correctPick});
      this.setState({notification})

      cardImage.sort(function (a, b) { return .5-Math.random() });
    }
  };

  render() {
    return (
      <Wrapper>
        <Title>Card Clicky Game **SEC version **</Title>
        <h2 className="headerNotification">{this.state.notification}</h2>
        <div className="container score">
          <h3>Correct Picks: {this.state.correctPick}
            <br /> Best Score: {this.state.bestScore}
          </h3>
        </div>

        <div className="container">
          <div className="row">
           {cardImage.map(image => (
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
