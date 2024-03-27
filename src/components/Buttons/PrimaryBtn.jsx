import PropTypes from 'prop-types';
const PrimaryBtn = ({ children, className = '', ...props }) => {
  return (
    <button
      type="button"
      className={`rounded-md border border-black bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;

PrimaryBtn.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
