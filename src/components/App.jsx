import { Statistics } from "components/Statistics/Statistics";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Component } from "react";
import { SectionTitle } from "./SectionTitle/SectionTitle";

export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handlerButtonFeedback = ({ target: { value } }) => {
    this.setState(prevState => ({ [value]: prevState[value] + 1 }))

  }

  countPositiveFeedbackPercentage = ({ good, neutral, bad } = this.state) => {
    return Math.round((good / (good + neutral + bad)) * 100 || 0);
  }

  countTotalFeedback = ({ good, neutral, bad } = this.state) => {
    return good + neutral + bad;
  }
  
  render() {
    return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
      >
        <SectionTitle
          tytle="Please leave feedback"
        >
          <FeedbackOptions
            onLeaveFeedback={this.handlerButtonFeedback}
            options={this.state}
          ></FeedbackOptions>

          {this.state.good + this.state.bad + this.state.neutral > 0 ?
            (<Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              countTotalFeedback={this.countTotalFeedback}
              countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
            ></Statistics>) : (<p>There is no feedback</p>)}  
        
        </SectionTitle>
 
    </div>
  );
  }
}