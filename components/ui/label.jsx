import React from 'react';

export const Label = ({ htmlFor, children, className = '' }) => {
  return (
    <label 
      htmlFor={htmlFor}
      className={`${className} text-sm font-medium leading-none`}
    >
      {children}
    </label>
  );
};
