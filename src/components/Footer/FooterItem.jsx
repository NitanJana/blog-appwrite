import PropTypes from 'prop-types';

const FooterItem = ({ name, url }) => {
  return (
    <li className="px-5 py-2">
      <a className="font-medium text-gray-600 hover:text-gray-900" href={url} target="_blank">
        {name}
      </a>
    </li>
  );
};

FooterItem.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
};

export default FooterItem;
