const ExponentFive = (props) => {
  const { count } = props;
  let total = count * count * count * count * count;
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}⁵</p>
      <p className="exponent-result">
        {count} * {count} * {count} * {count} * {count} ={" "}
        <span className="total">{total}</span>
      </p>
    </div>
  );
};

export default ExponentFive;
