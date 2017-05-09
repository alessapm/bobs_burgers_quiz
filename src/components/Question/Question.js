import React, { Component } from 'react';

export default class Question extends Component {
  constructor(props){
    super(props);

    // this.state = {
    //   overlay: "question-answers container"
    // }

  }

  // setOverlay(){
  //   console.log
  //   this.setState({overlay: "overlay"})
  // }


render() {

    return(
      <div className={this.props.stateOverlay}>

        <h2 className=".col-md-1 text-info">{this.props.question}</h2>
       <div className="answer-choices container-flexible">
          <div className="checkbox inline">
            <p className="text-info text-center bg-warning show" onClick={this.props.addA}>{this.props.A}</p>
          </div>

          <div className="checkbox inline">
            <p onClick={this.props.addB} className="text-info text-center bg-warning">{this.props.B}</p>
          </div>

          <div className="checkbox inline">
            <p onClick={this.props.addC} className="text-info text-center bg-warning">{this.props.C}</p>
          </div>

          <div className="checkbox inline">
            <p onClick={this.props.addD} className="text-info text-center bg-warning">{this.props.D}</p>
          </div>

          <div className="checkbox inline">
            <p onClick={this.props.addE} className="text-info text-center bg-warning">{this.props.E}</p>
          </div>
        </div>
      </div>

    )
  }

}
