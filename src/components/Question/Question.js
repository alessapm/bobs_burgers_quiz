import React, { Component } from 'react';

export default class Question extends Component {
  constructor(props){
    super(props);


  }


render() {

    return(
      <div className="question-answers row container">
        <h2 className=".col-md-1 text-info">{this.props.question}</h2>
       <div className="answer-choices container">
          <div className="checkbox inline">
            <input className="checkbox inline show" type="checkbox"
            onClick={this.props.addA} value="hello"/>
            <p className="text-info bg-warning show">{this.props.A}</p>
          </div>

          <div className="checkbox inline">
            <input className="checkbox" type="checkbox"
            onClick={this.props.addB}/>
            <p className="text-info bg-warning">{this.props.B}</p>
          </div>

          <div className="checkbox inline">
            <input className="checkbox" type="checkbox"
            onClick={this.props.addC}/>
            <p className="text-info bg-warning">{this.props.C}</p>
          </div>

          <div className="checkbox inline">
            <input className="checkbox" type="checkbox"
            onClick={this.props.addD}/>
            <p className="text-info bg-warning">{this.props.D}</p>
          </div>

          <div className="checkbox inline">
            <input className="checkbox" type="checkbox"
            onClick={this.props.addE}/>
            <p className="text-info bg-warning">{this.props.E}</p>
          </div>
        </div>
      </div>

    )
  }

}
