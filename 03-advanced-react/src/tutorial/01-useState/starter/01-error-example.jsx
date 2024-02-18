const ErrorExample = () => {
  // BAD
  let count = 0;
  const handleClick = () => {
    count++;
  };

  return (
    // BAD
    <div>
      <h2>DONT DO THIS!!!!</h2>
      <h3>{count}</h3>
      <button type="button" onClick={handleClick} className="btn">
        Increase
      </button>
    </div>
  );
};

export default ErrorExample;
