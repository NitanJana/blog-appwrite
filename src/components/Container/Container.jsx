import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return <div className="mx-auto w-full max-w-7xl px-6">{children}</div>;
};

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
