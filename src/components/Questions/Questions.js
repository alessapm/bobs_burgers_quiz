import React, { Component } from 'react';
import Question from '../Question/Question';


export default class Questions extends Component {
    constructor(props){
        super(props);

        this.state = {
          questions: [
          {question: "What is your name?",
          A: "Bob",
          B:"Linda",
          C: "Tina",
          D: "Gene",
          E: "Louise"},
          {question: "What is your favorite color?",
          A: "Gray",
          B: "Red",
          C: "Blue",
          D: "Yellow",
          E: "Green"},
          { question: "What is your favorite food?",
          A: "Burgers, obviously!",
          B: "Food, hah, does wine count??",
          C: "ummmmm...burgers?",
          D: "Pizza! No, burgers--wait no fried chicken!",
          E: "The flesh of my enemies"}
          ],

          index: 0
        }
    }

    next(){
      if(this.state.index === this.state.questions.length-1){
        this.props.tallyTotal()
      } else {
        this.setState({
          index: this.state.index + 1
        })
      }
    }

// in render use a .map() to go through the array of questions,
//then after you've answered a question and hit a next btn, you change indeces.


  render() {
      let questions = this.state.questions.map((question) => {
        return (
          <Question
          key={question.question}
          question={question.question}
          A={question.A}
          B={question.B}
          C={question.C}
          D={question.D}
          E={question.E}
          addA={this.props.addA}
          addB={this.props.addB}
          addC={this.props.addC}
          addD={this.props.addD}
          addE={this.props.addE}

          />
        )
      })


    return(
     <div className='question-wrapper'>
        {questions[this.state.index]}
        <button onClick={this.next.bind(this)}>NEXT</button>
      </div>

    )
  }


}


