import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthProtect = ({ children, authentication = true }) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate('/login');
    } else if (!authentication && authStatus !== authentication) {
      navigate('/');
    }
    setLoader(false);
  }, [authStatus, authentication, navigate]);

  return !loader ? children : null;
};

AuthProtect.propTypes = {
  children: PropTypes.node.isRequired,
  authentication: PropTypes.bool,
};

export default AuthProtect;
