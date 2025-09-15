// PostList.tsx
import React from "react"; 
import { useFetch } from "../hooks/useFetch";

type Post = {
  id: number;
  title: string;
};

const PostList: React.FC = () => {
  const { data, loading, error } = useFetch<Post[]>("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {data?.slice(0, 15).map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default PostList;
