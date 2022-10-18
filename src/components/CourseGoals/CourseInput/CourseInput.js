import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

// 75. Setting Dynamic Inline Styles //

/* <div className="form-control">
  <label style={{ 
    color: !isValid ? 'red' : 'black'
  }}>Course Goal</label>
  <input style={{ 
    borderColor: !isValid ? 'red' : '#ccc', //'black'
    background: !isValid ? 'salmon' : 'transparent'
   }}
    type="text" 
    onChange={goalInputChangeHandler} 
  />
</div> */


// 76. Setting CSS Classes Dynamically //

/* <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
  <label>Course Goal</label>
  <input type="text" onChange={goalInputChangeHandler} />
</div> */