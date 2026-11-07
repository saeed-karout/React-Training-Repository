import Button from "./Button";
import "./SideBar.css";
export default function SideBar() {
  const data = [
    {
      id: "1",
      numberHello: "1",
      numberDescription: "1",
      childComponent: (
        <>
          <h1>12345</h1>
          <p>Saeed</p>
        </>
      ),
    },
    {
      id: "2",
      numberHello: "2",
      numberDescription: "2",
      childComponent: (
        <>
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="GitHub Logo"
            width="40"
            height="40"
            className="TagImg"
          />
        </>
      ),
    },
    {
      id: "3",
      numberHello: "3",
      numberDescription: "3",
      childComponent: (
        <>
          <h1>3</h1>
          <p>I am a child of Button 3</p>
        </>
      ),
    },
    { id: "4", numberHello: "4", numberDescription: "4" },
    {
      id: "5",
      numberDescription: "5",
      childComponent: (
        <>
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="GitHub Logo"
            width="60"
            height="60"
            className="TagImg"
          />
        </>
      ),
    },
  ];
  return (
    <div className="sideBarContainer">
      {data.map((data) => {
        return (
          <Button
            key={data.id}
            numberHello={data.numberHello}
            numberDescription={data.numberDescription}
          >
            {data.childComponent}
          </Button>
        );
      })}
    </div>
  );
}
