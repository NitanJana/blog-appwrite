import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/authService';
import { logout } from '../../store/authSlice';
const LogoutBtn = ({ className = '', ...props }) => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => dispatch(logout()));
  };

  return (
    <button
      type="button"
      onClick={logoutHandler}
      className={`rounded-md border border-black bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${className}`}
      {...props}
    >
      Log Out
    </button>
  );
};

export default LogoutBtn;

LogoutBtn.propTypes = {
  className: PropTypes.string,
};
