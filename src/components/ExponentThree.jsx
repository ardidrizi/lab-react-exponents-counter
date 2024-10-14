const ExponentThree = (props) => {
  const { count } = props;
  let total = count * count * count;
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}³</p>
      <p className="exponent-result">
        {count} * {count} * {count} = <span className="total">{total}</span>
      </p>
    </div>
  );
};

export default ExponentThree;
