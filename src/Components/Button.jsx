import React from 'react';

const Button = ({
  children,
  type = 'button',
  bgcolor = 'bg-blue-600',
  textColor = 'text-white',
  className = '',
  ...props
}) => {
  return (
    <button
      type={type}
      className={`px-6 py-4 ${bgcolor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
