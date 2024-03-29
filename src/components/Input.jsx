import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { useId } from 'react';

const Input = forwardRef(function Input({ label, type = 'text', placeholder, className = '', ...props }, ref) {
  const id = useId();
  return (
    <div className="flex w-full flex-col gap-2">
      <label className="text-base font-semibold text-gray-900" htmlFor={id}>
        {label}
      </label>
      <input
        className={`flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        type={type || 'text'}
        placeholder={placeholder || `${label.toLowerCase()}` || ' '}
        id={id}
        ref={ref}
        {...props}
      ></input>
      <p className="mt-1 text-xs text-gray-500"></p>
    </div>
  );
});

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default Input;
