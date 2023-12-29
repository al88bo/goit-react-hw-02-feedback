const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const [good, neutral, bad] = options.map(
    str => (str = str.charAt(0).toUpperCase() + str.slice(1))
  ); // or {text-transform: capitalize} - in css
  return (
    <div onClick={onLeaveFeedback}>
      <button>{good}</button>
      <button>{neutral}</button>
      <button>{bad}</button>
    </div>
  );
};

export { FeedbackOptions };
