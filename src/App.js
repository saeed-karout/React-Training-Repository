// A simple react app to add new devices to the list of devices.
// Array methods are used to add new devices to the list of devices. The useState hook is used to manage the state of the devices and the new device to be added. The map method is used to render the list of devices.


import { useState } from "react";
import "./App.css";
export default function App() {
  const [addDevice,setAddDevice]= useState("");
  const [devices,setDevices] = useState(['iphone','ipad','andorid','windows']);
  const deviceList= devices.map((device,index)=>{
    return <li key={index}>{device}</li>
  })


  function handleAddNewDevice(){
    // const newDevices = [...devices];
    // newDevices.push(addDevice);
    // setDevices(newDevices);

    setDevices([...devices,addDevice])
  }

  return (
    <div className="App">
      <div>
        <h1>Welcome to My App</h1>
        <h3>List your device :</h3>
        <ul>
         {deviceList}
        </ul>



        <input type='text' value={addDevice} onChange={
          (e)=>{
            setAddDevice(e.target.value)
          }
        } placeholder='Name a New Device' />
        <button onClick={handleAddNewDevice}>add</button>
      </div>
    </div>
  );
}


