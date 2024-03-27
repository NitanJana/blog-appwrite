import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PostCard = ({ $id, title, featuredImage }) => {
  return (
    <Link to={`/post/${$id}`}>
      <div className="border">
        <img src={featuredImage} className="aspect-video w-full rounded-md" alt="" />
        <div className="min-h-min p-3">
          <p className="mt-4 flex-1 text-base font-semibold text-gray-900">{title}</p>
          {/* <p className="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">#{category}</p> */}
          {/* <p className="mt-4 w-full text-sm leading-normal text-gray-600">{description}</p> */}
          {/* <div className="mt-4 flex space-x-3 ">
          <img className="h-full w-10 rounded-lg" src={avatar} alt={author} />
          <div>
            <p className="text-sm font-semibold leading-tight text-gray-900">{author}</p>
            <p className="text-sm leading-tight text-gray-600">{date}</p>
          </div>
        </div> */}
        </div>
      </div>
    </Link>
  );
};

export default PostCard;

PostCard.propTypes = {
  $id: PropTypes.string,
  title: PropTypes.string,
  featuredImage: PropTypes.string,
};
