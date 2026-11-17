import { Link } from "react-router-dom";

import { PostContext } from "../useContext/PostContext";
import { useContext } from "react";
export default function PostList() {
  let postContext = useContext(PostContext);

  const ListPosts = postContext.map((post) => {
    return (
      <Link
        to={`/posts/${post.id}`}
        key={post.id}
        style={{ textDecoration: "none", color: "black" }}
      >
        <article
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "10px",
            padding: "10px",
          }}
        >
          <div
            style={{ border: "1px solid gray", padding: "10px" }}
            onClick={() => console.log(`Post ${post.id} clicked`)}
          >
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        </article>
      </Link>
    );
  });

  return (
    <>
      <h1>components posts List : </h1>
      {ListPosts}
    </>
  );
}
