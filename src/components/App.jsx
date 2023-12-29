import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, elem) => (acc += elem), 0);

  countPositiveFeedbackPercentage = total => {
    const num = (this.state.good / total) * 100;
    if (num.toFixed(1) >= 1) return num.toFixed(0);
    return num.toFixed(1);
  };

  onLeaveFeedback = e => {
    const currentKey = e.target.textContent.toLowerCase();
    if (!this.state.hasOwnProperty(currentKey)) return;
    this.setState(prevState => {
      return { [currentKey]: prevState[currentKey] + 1 };
    });
  };

  render() {
    const totalFeedbacks = this.countTotalFeedback();
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <div>
          <h2>Statistics</h2>
          {totalFeedbacks ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalFeedbacks}
              positivePercentage={this.countPositiveFeedbackPercentage(
                totalFeedbacks
              )}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </div>
      </Section>
    );
  }
}
export { App };
