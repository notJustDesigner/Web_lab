import React from 'react';

/**This code defines a customizable button component that changes its style
   based on the variant prop provided. The default, primary, and secondary variants
   each have their own specific styles, allowing for flexible button design in your
   application.**/
const Button = ({ label, variant }) => {
  const buttonStyle = {
    default: {
      backgroundColor: 'blue',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
    },
    primary: {
      backgroundColor: 'green',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
    },
    secondary: {
      backgroundColor: 'gray',
      color: 'black',
      padding: '10px 20px',
      border: '1px solid black',
      borderRadius: '4px',
    },
  };

  /**This line determines which style to apply to the button.
     It uses the variant prop to look up the appropriate style
     in the buttonStyle object. If the variant prop is not provided
     or doesn't match any of the keys, it defaults to the default style.**/
  const style = buttonStyle[variant] || buttonStyle.default;

  return <button style={style}>{label}</button>;
};

export default Button;
