import React from 'react';
import './Button.css';

const Button = ({mensagem, func}) => {
  return ( 
    <button className="ButtonCSS" onClick={func}>{mensagem}</button>
   );
}
 
export default Button;