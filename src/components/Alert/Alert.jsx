const Alert = ({ children, onClose }) => {
  debugger;
  return (
    <>
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        {children}
        <button
          type="button"
          className="btn-close"
          onClick={onClose}
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </>
  );
};

export default Alert;
