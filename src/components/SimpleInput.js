import { useState } from "react";

const SimpleInput = (props) => {
  const [entredName, setEntredName] = useState("");
  const [entredNameTouched, setEntredNameTouched] = useState(false);

  const entredNameIsValid = entredName.trim() !== '';
  const nameInputIsValid = !entredNameIsValid && entredNameTouched;

  const nameInputChangeHandler = (event) => {
    setEntredName(event.target.value);
  };

  const nameInputeBlurHandler = event => {
    setEntredNameTouched(true);
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEntredNameTouched(true);
    if (!entredNameIsValid) {
      return;
    }

    console.log(entredName, "Hello");
    setEntredName('');
    setEntredNameTouched(false);
  };


  const nameImputClasses = nameInputIsValid
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
          onChange={nameInputChangeHandler}
          onBlur={nameInputeBlurHandler}
        />
        {nameInputIsValid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
