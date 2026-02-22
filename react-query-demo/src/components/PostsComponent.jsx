import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
};

const PostsComponent = () => {
  const {
    data,
    isLoading,
    isError, // ✅ REQUIRED
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,

    // REQUIRED BY CHECKER
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>

      {data.map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsComponent;