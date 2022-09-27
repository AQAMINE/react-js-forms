import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [entredName, setEntredName] = useState('');
  const [entredNameIsValid, setEntredNameIsValid] = useState(true);

  const nameInputChangeHandler = event => {
    setEntredName(event.target.value);
  };

  const formSubmissionHandler = event => {
    event.preventDefault();

    if (entredName.trim() === '') {
      setEntredNameIsValid(false);
      return;
    }

    setEntredNameIsValid(true);
    console.log(entredName, 'Hello');
  };

  const nameImputClasses = entredNameIsValid ? 'form-control' : 'form-control invalid';
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameImputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input value={entredName} ref={nameInputRef} type='text' id='name' onChange={nameInputChangeHandler}/>
        {!entredNameIsValid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
