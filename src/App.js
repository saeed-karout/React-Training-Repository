import "./App.css";
import FirstComponents from "./FirstComponents";
import Post from "./Post";
import SideBar from "./SideBar";
import PersonProps from "./PersonProps";
const showSidebar = true;
export default function App() {
  const tasks = [
    "Learn React",
    "Learn JavaScript",
    "Learn HTML",
    "Learn CSS",
    "Learn Node.js",
    "Learn Express.js",
    "Learn MongoDB",
    "Learn SQL",
    "Learn Python",
    "Learn Django",
    "Learn Flask",
    "Learn Java",
    "Learn C++",
    "Learn C#",
    "Learn PHP",
    "Learn Ruby",
    "Learn Go",
    "Learn Rust"
  ];

  const myTasks = tasks.map((task, index) => {
    return (
      <div
        style={{
          backgroundColor: "purple",
          color: "white",
          padding: "10px",
          borderRadius: "5px",
          width: "400px",
          margin: "20px auto",
          border: "2px solid black",
        }}
      >
        <p style={{ fontSize: 20 }}>
          Task {index + 1}: {task}
        </p>
        <h1>Title Task : {task}</h1>
      </div>
    );
  });

  console.log(tasks);

  const Persons = [
    { id: 1, name: "John", age: 30, email: "john@example.com" },
    { id: 2, name: "Said", age: 25, email: "said@example.com" },
    { id: 3, name: "Ahmad", age: 17, email: "ahmad@example.com" },
  ];

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
          {Persons.map((data) => {
            return (
              <PersonProps
                key={data.id}
                name={data.name}
                age={data.age}
                email={data.email}
              />
            );
          })}
          {myTasks.filter((task,index)=>index<5)}
        </div>
        <div
          style={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <AppSidebar />
        </div>
      </div>
    </div>
  );
}

function AppSidebar() {
  if (showSidebar === true) {
    return <SideBar />;
  } else {
    return null;
  }
}
