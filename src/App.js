import "./App.css";
import FirstComponents from "./FirstComponents";
import Post from "./Post";
import SideBar from "./SideBar";
function App() {
  return (
    <div className="App">
      <FirstComponents />

      <div
        style={{ display: "flex", gap: "20px", margin: "50px" }}
      >
        <div style={{width:'70%'}}>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <div
          style={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <SideBar />
        </div>
      </div>
    </div>
  );
}

export default App;
