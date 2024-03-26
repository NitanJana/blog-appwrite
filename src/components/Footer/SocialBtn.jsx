import PropTypes from 'prop-types';
const SocialBtn = ({ name, image, url }) => {
  return (
    <div className="w-auto p-1.5">
      <a href={url} target="_blank">
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
          <img src={image} alt={`${name} Logo`} />
        </div>
      </a>
    </div>
  );
};

export default SocialBtn;

SocialBtn.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
};
