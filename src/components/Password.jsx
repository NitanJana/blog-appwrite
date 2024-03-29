import { Eye, EyeOff } from 'lucide-react';
import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import { useId } from 'react';

const Password = forwardRef(function Password({ label, placeholder, className = '', ...props }, ref) {
  const [showPassword, setShowPassword] = useState(false);
  const id = useId();
  return (
    <div className="flex w-full flex-col gap-2">
      <label className="text-base font-semibold text-gray-900" htmlFor={id}>
        {label}
      </label>
      <div className="relative">
        <input
          className={`flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder || `${label.toLowerCase()}` || ' '}
          id={id}
          ref={ref}
          {...props}
        />
        <div onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-2 flex items-center">
          {!showPassword ? <EyeOff color="#9a9996" /> : <Eye color="#9a9996" />}
        </div>
      </div>
      <p className="mt-1 text-xs text-gray-500"></p>
    </div>
  );
});

Password.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default Password;
