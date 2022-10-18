// 77. Introducing Styled Components //

import styled from 'styled-components';
// line 7 & 16 - 79. Styled Components & Media Queries //

const Button = styled.button`
  width: 100%; // for web application 'add goal'
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  
  @media (min-width: 768px) {
    width: auto;   // for mobile application 'add goal'
  }

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;


export default Button;

// section 6 - styling react components //

// -starter code- //

// import React from 'react';
// import './Button.css';

// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };
