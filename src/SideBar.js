import Button from "./Button";
import "./SideBar.css";
export default function SideBar() {
  return (
    <div className="sideBarContainer">
      <Button numberHello={1} numberDescription={1} />
      <Button numberHello={2} numberDescription={2}>
       
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt="GitHub Logo"
          width="40"
          height="40"
          className="TagImg"
        />
      </Button>
      <Button numberHello={3} numberDescription={3}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt="GitHub Logo"
          width="60"
          height="60"
          className="TagImg"
        />
      </Button>
      <Button numberHello={4} numberDescription={4} >
        I am a child of Button  4
        </Button>
      <Button numberHello={5} numberDescription={5} />
    </div>
  );
}
