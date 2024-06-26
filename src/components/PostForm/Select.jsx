import PropTypes from 'prop-types';
import { forwardRef, useId } from 'react';

const Select = forwardRef(function Select({ options, label, className, ...props }, ref) {
  const id = useId();
  return (
    <div className="flex w-full flex-col gap-2">
      {label && (
        <label htmlFor={id} className="font-semibold">
          {`${label}:`}
        </label>
      )}
      <select
        id={id}
        ref={ref}
        className={`w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-black outline-none duration-200 focus:bg-gray-50 ${className}`}
        {...props}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
});

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
};

export default Select;
