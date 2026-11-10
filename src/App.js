// A simple react app to manage a list of devices.
// when delete button is clicked, the device should be removed from the list.
import { useState } from "react";
import "./App.css";
export default function App() {
  const [addDevice,setAddDevice]= useState("");
  const [devices,setDevices] = useState([
     {id:1,name:'iphone'}
    ,{id:2,name:'ipad'}
    ,{id:3,name:'android'}
    ,{id:4,name:'windows'}
  ]);
  const deviceList= devices.map((device,index)=>{
    return <li key={index}>{device.name}
      <button onClick={()=>{handleDelete(device.id)}}>Delete</button>
      <button onClick={()=>{handleEdit(device.id)}}>Edit</button>
    </li>
  })

  function handleDelete(id){
    const NewDevices =devices.filter((device)=>device.id!==id);
   
    
    setDevices(NewDevices);
  }


  function handleEdit(id){
    const newDevices = devices.map((device) =>{
      if(device.id === id){
       return{...device,name:device.name + " edited done"};
      }else{
        return device;
      }
    })

    setDevices(newDevices);
  }

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


// تحدي كويري ستيت 
// https://react.dev/learn/queueing-a-series-of-state-updates#recap
// الحل 
// import { useState } from 'react';

// export default function RequestTracker() {
//   const [pending, setPending] = useState(0);
//   const [completed, setCompleted] = useState(0);

//   async function handleClick() {
//     setPending((p)=>{
//         return p = p + 1;
//     });
//     await delay(3000);
//     setPending((p)=>{
//       return p = p - 1;
//     });
//     setCompleted((c)=>{
//       return c =c + 1;
//     });
//   }
//  return (
//     <>
//       <h3>
//         Pending: {pending}
//       </h3>
//       <h3>
//         Completed: {completed}
//       </h3>
//       <button onClick={handleClick}>
//         Buy
//       </button>
//     </>
//   );
// }

// function delay(ms) {
//   return new Promise(resolve => {
//     setTimeout(resolve, ms);
//   });
// }
