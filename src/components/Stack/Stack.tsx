import React from 'react';

const Button = ({ onClick, label, backgroundColor }: any) => {
  return (
    <button onClick={onClick} style={{backgroundColor}}>{label}</button>
  );
}

export default Button;
