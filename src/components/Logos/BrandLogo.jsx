import PropTypes from 'prop-types';
import { brand } from '../../assets';
const BrandLogo = ({ width = '60px' }) => {
  return <img src={brand} alt="" width={width} height={width} className="rounded-full" />;
};

export default BrandLogo;

BrandLogo.propTypes = {
  width: PropTypes.string,
};
