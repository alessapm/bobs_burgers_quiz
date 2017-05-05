import React, { Component } from 'react';

export default class Question extends Component {
  constructor(props){
    super(props);


  }


render() {

    return(
      <div className="question-answers row">
        <h2 className=".col-md-1">{this.props.question}</h2>
       <div className="answer-choices">
          <div className=".col-md-1">
            <input className="check-box" type="checkbox"
            onClick={this.props.addA}/>
            <p className="text-primary bg-warning">{this.props.A}</p>
          </div>

          <div className=".col-md-1">
            <input className="check-box" type="checkbox"
            onClick={this.props.addB}/>
            <p>{this.props.B}</p>
          </div>

          <div className=".col-md-1">
            <input className="check-box" type="checkbox"
            onClick={this.props.addC}/>
            <p>{this.props.C}</p>
          </div>

          <div className=".col-md-1">
            <input className="check-box" type="checkbox"
            onClick={this.props.addD}/>
            <p>{this.props.D}</p>
          </div>

          <div className=".col-md-1">
            <input className="check-box" type="checkbox"
            onClick={this.props.addE}/>
            <p>{this.props.E}</p>
          </div>
        </div>
      </div>

    )
  }

}
