import PropTypes from 'prop-types';
import { brand } from '../../assets';
const BrandLogo = ({ size = '60px' }) => {
  return <img src={brand} alt="" width={size} height={size} className="rounded-full" />;
};

export default BrandLogo;

BrandLogo.propTypes = {
  size: PropTypes.string,
};
