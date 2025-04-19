import React, { useId } from 'react';

const Input = (
  { label, type="number", className = '', placeholder = '', ...props },
  ref
) => {
  const id = useId();
  return (
    <div className="w-5/6 flex flex-col">
  {label && (
    <label htmlFor={id} className="text-sm font-semibold mb-1">
      {label}
    </label>
  )}
  <input
    id={id}
    className={`border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300 ${className}`}
    ref={ref}
    placeholder={placeholder}
    type={type}
    {...props}
  />
</div>

  );
};

export default React.forwardRef(Input);
