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
      Results: null

    }
  }

  componentDidMount(){
    console.log("in Main component");
  }



  getResult(characterId){
    Axios.get(`http://localhost:8000/characters/${characterId}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((data) => {
      console.log('in then statement!!')
      this.setState({Results: data})
    })
    .catch((err) => console.log('err: ', err));
  }


  tallyTotal(){
    console.log('in tallyTotal');

      let greatest = Math.max(this.state.As, this.state.Bs, this.state.Cs,
      this.state.Ds, this.state.Es);
      let character = 0;

      console.log('greatest: ', greatest)

      switch (greatest) {
        case this.state.As:
          // this.setState({CharacterId: 3})
          this.getResult(3);
          console.log('in switch')
          break;
        case this.state.Bs:
          this.getResult(4);

          break;
        case this.state.Cs:
          // this.setState({CharacterId: 5})
          this.getResult(5);
          break;
        case this.state.Ds:
          // this.setState({CharacterId: 6})
          this.getResult(6);
          break;
        case this.state.Es:
          // this.setState({CharacterId: 7})
          this.getResult(7);
          break;
      }
  }




  addA(){
    console.log('A is picked');
    this.setState({As: this.state.As + 1});
  }

  addB(){
    console.log('B is picked');
    this.setState({Bs: this.state.Bs + 1});
  }

  addC(){
    console.log('C is picked');
    this.setState({Cs: this.state.Cs + 1});
  }

  addD(){
    console.log('D is picked');
    this.setState({Ds: this.state.Ds + 1});
  }

  addE(){
    console.log('E is picked');
    this.setState({Es: this.state.Es + 1});
  }



render() {

  if (this.state.Results) {

    return (
      <div className="result">
        <h1>{this.state.Results.name}</h1>
      </div>
    )
  } else {

  return (
      <div>
        <div className="questions">
          <Questions
            addA={this.addA.bind(this)}
            addB={this.addB.bind(this)}
            addC={this.addC.bind(this)}
            addD={this.addD.bind(this)}
            addE={this.addE.bind(this)}
            tallyTotal={this.tallyTotal.bind(this)}
          />
        </div>
      </div>

    )
  }
}



}