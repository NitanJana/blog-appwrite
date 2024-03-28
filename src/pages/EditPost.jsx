import { useEffect, useState } from 'react';
import { PostForm } from '../components';
import { useNavigate, useParams } from 'react-router-dom';
import dbService from '../appwrite/dbService';

function EditPost() {
  const [post, setPosts] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      dbService.getPost(slug).then((post) => {
        if (post) {
          setPosts(post);
        }
      });
    } else {
      navigate('/');
    }
  }, [slug, navigate]);
  return (
    post && (
      <div className="py-8 ">
        <PostForm post={post} />
      </div>
    )
  );
}

export default EditPost;
