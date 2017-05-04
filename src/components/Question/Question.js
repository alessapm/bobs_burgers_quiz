import React, { Component } from 'react';

export default class Question extends Component {
  constructor(props){
    super(props);


  }


render() {

    return(
      <div className="question-answers">
        <h2>{this.props.question}</h2>
       <div className="answer-choices">
          <input className="check-box" type="checkbox"
          onClick={this.props.addA}/><p>{this.props.A}</p>

          <input className="check-box" type="checkbox"
          onClick={this.props.addB}/><p>{this.props.B}</p>

          <input className="check-box" type="checkbox"
          onClick={this.props.addC}/><p>{this.props.C}</p>

          <input className="check-box" type="checkbox"
          onClick={this.props.addD}/><p>{this.props.D}</p>

          <input className="check-box" type="checkbox"
          onClick={this.props.addE}/><p>{this.props.E}</p>
        </div>
      </div>

    )
  }

}
