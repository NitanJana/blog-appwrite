import PropTypes from 'prop-types';
const SecondaryBtn = ({ children, className = '', ...props }) => {
  return (
    <button
      type="button"
      className={`rounded-md border border-black bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default SecondaryBtn;

SecondaryBtn.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
