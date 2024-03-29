import { useState, useEffect } from 'react';
import { PostCard } from '../components';
import dbService from '../appwrite/dbService';
import { useSelector } from 'react-redux';

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    dbService.getPosts([]).then((posts) => {
      if (posts) {
        const userPosts = posts.documents.filter((post) => post.userId === user.$id);
        setPosts(userPosts);
      }
    });
  }, [user]);

  return (
    <div className="w-full py-8">
      <div className="flex flex-wrap">
        {posts.map((post) => (
          <div key={post.$id} className="p-2 lg:w-1/4 ">
            <PostCard {...post} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllPosts;
