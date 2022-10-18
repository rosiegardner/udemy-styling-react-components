import React, { useState } from 'react';
import Button from '../../UI/Button/Button';

// 81. Dynamic Styles with CSS Modules //
import styles from './CourseInput.module.css';

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
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

// old code // (before)

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


// 77. Introducing Styled Components //

/* <form onSubmit={formSubmitHandler}>
  <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
    <label>Course Goal</label>
    <input type="text" onChange={goalInputChangeHandler} />
  </div>
  <Button type="submit">Add Goal</Button>
</form> */

// 78. Styled Components & Dynamic Props //

/* <form onSubmit={formSubmitHandler}>
  <FormControl className={!isValid && 'invalid'}>
    <label>Course Goal</label>
    <input type="text" onChange={goalInputChangeHandler} />
  </FormControl>
  <Button type="submit">Add Goal</Button>
</form> */

// 79. styled components and media //

// import styled from 'styled-components';

// const FormControl = styled.div`
//   margin: 0.5rem 0;


//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${props => (props.valid ? 'red' : 'black')};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     /* border: 1px solid #ccc; */
//     border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
//     background: ${props => (props.invalid ? '#ffd7d7' : 'transparent')};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

/* <form onSubmit={formSubmitHandler}>
  <FormControl invalid={!isValid}>
    <label>Course Goal</label>
    <input type="text" onChange={goalInputChangeHandler} />
  </FormControl>
  <Button type="submit">Add Goal</Button>
</form> */