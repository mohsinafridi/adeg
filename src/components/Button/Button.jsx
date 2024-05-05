const Button = ({ children, color, onClick }) => {
  debugger;
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
