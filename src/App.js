import "./App.css";
import FirstComponents from "./FirstComponents";
import Post from "./Post";
import SideBar from "./SideBar";
import PersonProps from "./PersonProps";

function App() {
  return (
    <div className="App">
      <FirstComponents />
      <div style={{ display: "flex", gap: "20px", margin: "50px" }}>
        <div style={{ width: "70%" }}>
          {/* <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post /> */}

          <PersonProps name="John" age={30} email="john@example.com" />
          <PersonProps name="Saeed" age={25} email="saeed@example.com" />
          <PersonProps name="Ahmad" age={17} email="ahmad@example.com" />
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
