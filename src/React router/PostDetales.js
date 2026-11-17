import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PostContext } from "../useContext/PostContext";

export default function PostDetales() {
  const { postId } = useParams();
  const posts = useContext(PostContext);

  // Convert postId from string to number to match p.id
  const post = posts.find((p) => p.id == postId);

 return post ? (   
    <div>
      <h1>Post Details</h1>
      <h2>Post ID: {postId}</h2>
      <h3>Post Title: {post.title}</h3>
      <p>Content: {post.content}</p>
    </div>
  ) : (
    <div>
      <h1>Post not found</h1>
      <p>The post with ID {postId} does not exist.</p>
    </div>
  );

}
