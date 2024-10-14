const Exponent = ({ count, exp }) => {
  let total = 1;
  for (let i = 0; i < exp; i++) {
    total *= count;
  }
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">
        {count}^{exp}
      </p>
      <p className="exponent-result">
        {count} * {count} = <span className="total">{total}</span>
      </p>
    </div>
  );
};

export default Exponent;
