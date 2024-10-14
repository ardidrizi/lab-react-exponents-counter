const Counter = (props) => {
  const { count, increment, decrement } = props;

  return (
    <div className="counter-container">
      <p className="counter-value">{count}</p>
      <button
        disabled={count === 0}
        className="counter-button"
        onClick={decrement}
      >
        -
      </button>
      <button className="counter-button" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default Counter;
