import React, { Component } from 'react';

export default class Question extends Component {
  constructor(props){
    super(props);

    this.state = {
      overlay: "question-answers"
    }

  }

  setOverlay(){
    console.log
    this.setState({overlay: "active"})
  }


render() {

    return(
      <div className={this.state.overlay}>
        <h2 className=".col-md-1 text-info">{this.props.question}</h2>
       <div className="answer-choices container">
          <div className="checkbox inline">

            <p className="text-info text-center bg-warning show" onClick={this.props.addA, this.setOverlay.bind(this)}>{this.props.A}</p>
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
