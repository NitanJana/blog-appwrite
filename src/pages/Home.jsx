import { useEffect, useState } from 'react';
import { PostCard } from '../components';
import dbService from '../appwrite/dbService';
import { useSelector } from 'react-redux';

function Home() {
  const authStatus = useSelector((state) => state.auth.status);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    dbService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="mt-4 min-h-[40vh] w-full py-8 text-center">
        <div className="flex flex-wrap">
          <div className="w-full p-2">
            <h1 className="text-2xl font-bold hover:text-gray-500">
              {authStatus ? 'No posts yet' : 'Login to read posts'}
            </h1>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <div className="flex flex-wrap">
        {posts.map((post) => (
          <div key={post.$id} className="p-2 lg:w-1/4">
            <PostCard {...post} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
