import PropTypes from 'prop-types';
const LoginBtn = ({ className = '', ...props }) => {
  return (
    <button
      type="button"
      className={`rounded-md border border-black bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${className}`}
      {...props}
    >
      Log In
    </button>
  );
};

export default LoginBtn;

LoginBtn.propTypes = {
  className: PropTypes.string,
};
