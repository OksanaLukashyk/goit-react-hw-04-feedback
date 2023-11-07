import React, { useState } from 'react';

import Section from 'components/Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Statictics } from './Statistics/Statistics';


export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (option) => {

    switch (option) {
      case "good":
        setGood(prevState => prevState + 1);
        break;
      case "neutral":
        setNeutral(prevState => prevState + 1);
        break;
      case "bad":
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    };
  };
  
  const countTotalFeedback = (good, neutral, bad) => { return good + neutral + bad; };
  const countPositiveFeedbackPercentage = () => {
  //    if (Number.isNaN(parseInt(good * 100 / countTotalFeedback(good, neutral, bad)))) {
  //   return 0;
  // }
    return parseInt(good * 100 /countTotalFeedback(good, neutral, bad));
  };

    return(
      <div className="container">
        <Section title="Please leave feedback">
          <FeedbackOptions options={["good", "neutral", "bad"]} onLeaveFeedback={onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback(good, neutral, bad) ? (<Statictics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback(good, neutral, bad)}
            positivePercentage={countPositiveFeedbackPercentage()}
          />) :
            (<Notification message="There is no feedback" />)}
        </Section>
      </div>
    );
  };

