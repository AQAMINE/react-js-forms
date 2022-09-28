import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: entredName,
    isValid: entredNameIsValid,
    hasError: nameImputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');

  const {
    value: entredEmail,
    isValid: entredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.includes("@"));



  let formIsValid = false;
  if (entredNameIsValid && entredEmailIsValid) {
    formIsValid = true;
  }



  const formSubmissionHandler = (event) => {
    event.preventDefault();
  
    if (!entredNameIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
  };

  const nameImputClasses = nameImputHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameImputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          value={entredName}
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameImputHasError && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-Mail</label>
        <input
          value={entredEmail}
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && (
          <p className="error-text">Please enter a valid E-Mail.</p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
