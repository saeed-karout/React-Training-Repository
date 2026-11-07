// In React, we can not change the value of a variable directly because React is a state-based framework and it will not re-render the component when we change the value of a variable directly. So we need to use state to change the value of a variable and re-render the component.
// In React, we can use the useState hook to create a state variable and a function to update the value of that variable. When we call the function to update the value of the state variable, React will re-render the component and display the updated value.
import { useState } from "react";

let name = "Saeed";

export default function MyButtons() {
  //   console.log("MyButtons component is rendered");
  //   const state = useState("Saeed");
  //   const value = state[0];
  //   console.log(value);
  //   const setValue = state[1];

  const [name, setName] = useState("saeed");

  function handleChangeName() {
        name === 'Saeed' ? setName("karout") : setName("Saeed");
  }

  return (
    <>
      <h1>Hello from MyButtons</h1>
      <p> My Name is {name} </p>

      <button onClick={handleChangeName}>Change Name</button>
    </>
  );
}
