// React Router Tutorial
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Contact from "./React router/Contact";
import PostList from "./React router/PostsList";
import NewPost from "./React router/NewPost";
import DeletePost from "./React router/DeletePost";
import PostDetales from "./React router/PostDetales";
import { PostContext } from "./useContext/PostContext";
import Page404 from "./React router/Page404";
import LayoutPost from "./React router/LayoutPost";

export default function App() {
  // 1. Define the posts array here
  const posts = [
    { id: 1, title: "Post title 1", content: "This is the content of post 1" },
    { id: 2, title: "Post title 2", content: "This is the content of post 2" },
    { id: 3, title: "Post title 3", content: "This is the content of post 3" },
    { id: 4, title: "Post title 4", content: "This is the content of post 4" },
    { id: 5, title: "Post title 5", content: "This is the content of post 5" },
  ];

  return (
    <>
      <div
        style={{
          backgroundColor: "blue",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <h1>React Router Tutorial</h1>

        <div>
          <Link
            to="/"
            style={{
              margin: "10px",
              padding: "10px",
              backgroundColor: "blue",
              color: "white",
            }}
          >
            Home
          </Link>

          <Link
            to="/posts"
            style={{
              margin: "10px",
              padding: "10px",
              backgroundColor: "blue",
              color: "white",
            }}
          >
            Posts
          </Link>

          <Link
            to="/contact"
            style={{
              margin: "10px",
              padding: "10px",
              backgroundColor: "blue",
              color: "white",
            }}
          >
            Contact
          </Link>

          <Link
            to="/about"
            style={{
              margin: "10px",
              padding: "10px",
              backgroundColor: "blue",
              color: "white",
            }}
          >
            About
          </Link>
        </div>
      </div>

     
      <PostContext.Provider value={posts}>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/contact" element={<Contact />} />
            {/* Nested Routes */}
        <Route path='/posts' element={<LayoutPost />}>
          <Route index element={<PostList />} />
          <Route path=":postId" element={<PostDetales />} />
          <Route path='new' element={<NewPost />} />
          <Route path='delete' element={<DeletePost />} />
        </Route>

          <Route path='*' element={<Page404 />} />

        </Routes>
      </PostContext.Provider>
  
      <h1 style={{ backgroundColor: "blue" }}>React Router Tutorial Footer </h1>
    </>
  );
}
