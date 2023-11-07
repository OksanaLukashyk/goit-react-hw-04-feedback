import React, { Component } from 'react';

import Section from 'components/Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Statictics } from './Statistics/Statistics';


export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (option) => {
    this.setState((prevState) => {
      return { [option]: prevState[option] + 1, };
  
    });
  };

  options = Object.keys(this.state);
  
  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback(this.state)
  //    if (Number.isNaN(parseInt(this.state.good * 100 /total))) {
  //   return 0;
  // }
    return parseInt(this.state.good * 100 /total);
  };

  render() {
    return(
      <div className="container">
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.options} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback(this.state) ? (<Statictics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback(this.state)}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />) :
            (<Notification message="There is no feedback" />)}
        </Section>
      </div>
    );
  };
};

