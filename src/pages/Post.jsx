import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { PrimaryBtn } from '../components';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';
import dbService from '../appwrite/dbService';
import storageService from '../appwrite/storageService';

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);

  const isAuthor = post && user ? post.userId === user.$id : false;

  useEffect(() => {
    if (slug) {
      dbService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate('/');
      });
    } else navigate('/');
  }, [slug, navigate]);

  const deletePost = () => {
    dbService.deletePost(post.$id).then((status) => {
      if (status) {
        storageService.deleteFile(post.featuredImage);
        navigate('/');
      }
    });
  };

  return post ? (
    <div className="py-8">
      <div className="relative mb-4 flex w-full justify-center rounded-xl border p-2">
        <img src={storageService.getFilePreview(post.featuredImage)} alt={post.title} className="rounded-xl" />

        {isAuthor && (
          <div className="absolute right-6 top-6">
            <Link to={`/edit-post/${post.$id}`}>
              <PrimaryBtn bgColor="bg-green-500" className="mr-3">
                Edit
              </PrimaryBtn>
            </Link>
            <PrimaryBtn bgColor="bg-red-500" onClick={deletePost}>
              Delete
            </PrimaryBtn>
          </div>
        )}
      </div>
      <div className="mb-6 w-full">
        <h1 className="text-2xl font-bold">{post.title}</h1>
      </div>
      <div className="browser-css">{parse(post.content)}</div>
    </div>
  ) : null;
}
