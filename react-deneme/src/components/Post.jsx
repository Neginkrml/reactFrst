import React, { useState, useEffect } from "react";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  const [number, setNumber] = useState(10);

  useEffect(() => {
    const fectPost = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=${number}`
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fectPost();
  }, [refresh]);

  if (loading) return <div>...Loading</div>;

  const handleRefresh = () => {
    setNumber(5);
    setRefresh(!refresh);
  };

  return (
    <>
      <h2>Gönderiler</h2>
      <button onClick={handleRefresh}>Yenile</button>
      <ul>
        {posts.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Post;
