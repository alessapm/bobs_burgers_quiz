import React, { Component } from 'react';
import Axios from 'axios';
import Questions from '../Questions/Questions';

export default class Main extends Component {
  constructor(props){
    super(props);

    this.state = {
      As: 0,
      Bs: 0,
      Cs: 0,
      Ds: 0,
      Es: 0,
      CharacterId: 0,
      Results: "",
      overlay: "question-answers container"
    }
  }

  getResult(characterId){
    Axios.get(`https://bobs-burgers-quiz-api.herokuapp.com/characters/${characterId}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((data) => {
      console.log('in then statement!! data: ', data)
      this.setState({Results: data.data})
    })
    .catch((err) => console.log('err: ', err));
  }


  tallyTotal(){
    console.log('in tallyTotal');

      let greatest = Math.max(this.state.As, this.state.Bs, this.state.Cs,
      this.state.Ds, this.state.Es);
      // let character = 0;

      console.log('greatest: ', greatest)

      switch (greatest) {
        case this.state.As:
          this.getResult(1);
          console.log('in switch')
          break;
        case this.state.Bs:
          this.getResult(2);

          break;
        case this.state.Cs:

          this.getResult(3);
          break;
        case this.state.Ds:

          this.getResult(4);
          break;
        case this.state.Es:

          this.getResult(5);
          break;
      }
  }

  restart(){
    this.setState({Results: null});
    this.setState({As: 0})
    this.setState({Bs: 0})
    this.setState({Cs: 0})
    this.setState({Ds: 0})
    this.setState({Es: 0})
    this.setState({overlay: "question-answers container"})
  }



 setOverlay(){
    console.log
    this.setState({overlay: "overlay"})
  }

  removeOverlay(){
    this.setState({overlay: "question-answers container"})
  }


  addA(){
    console.log('A is picked');
    this.setState({As: this.state.As + 1});
    // document.querySelector('.answer-choices').css({'background': 'rgba(150,150,150,.5)', 'z-index': '2'});
    this.setOverlay()
  }

  addB(){
    console.log('B is picked');
    this.setState({Bs: this.state.Bs + 1});
    this.setOverlay()
  }

  addC(){
    console.log('C is picked');
    this.setState({Cs: this.state.Cs + 1});
    this.setOverlay()
  }

  addD(){
    console.log('D is picked');
    this.setState({Ds: this.state.Ds + 1});
    this.setOverlay()
  }

  addE(){
    console.log('E is picked');
    this.setState({Es: this.state.Es + 1});
    this.setOverlay()
  }



render() {

  if (this.state.Results) {

    return (
      <div className="result">
        <h1 className="text-danger center-block container text-center">Which Bob's Burgers <br /> Character Are You?</h1>
        <div className="container">
          <h2 className="text-warning">You got...{this.state.Results.name}!</h2>
          <img src={this.state.Results.image_url} className="center-block"/>

          <h3 className="text-info">That means you are {this.state.Results.qualities}</h3>
          <p className="text-info">{this.state.Results.about}</p>
        </div>
        <button onClick={this.restart.bind(this)} className="btn btn-danger center-block">Start Over</button>
      </div>
    )
  } else {

  return (
      <div>
        <h1 className="text-danger center-block container text-center">Which Bob's Burgers <br />Character Are You?</h1>
        <div className="container-fluid">
          <Questions
            addA={this.addA.bind(this)}
            addB={this.addB.bind(this)}
            addC={this.addC.bind(this)}
            addD={this.addD.bind(this)}
            addE={this.addE.bind(this)}
            tallyTotal={this.tallyTotal.bind(this)}
            setOverlay={this.setOverlay.bind(this)}
            stateOverlay={this.state.overlay}
            removeOverlay={this.removeOverlay.bind(this)}
          />
        </div>
      </div>

    )
  }
}



}
