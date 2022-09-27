import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [entredName, setEntredName] = useState('');

  const nameInputChangeHandler = event => {
    setEntredName(event.target.value);
  };

  const formSubmissionHandler = event => {
    event.preventDefault();

    if (entredName.trim() === '') {
      return;
    }
    console.log(entredName, 'Hello');
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input value={entredName} ref={nameInputRef} type='text' id='name' onChange={nameInputChangeHandler}/>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
