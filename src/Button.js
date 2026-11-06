import "./Button.css";

// Conditional rendering of the Button component based on the numberHello prop
// export default function Button({numberHello,numberDescription,children = 'here is no children'}) {
//   if(numberHello === '' || numberHello === null || numberHello === undefined){
//     return null;
//   }else{

//     return (
//       <button className="TagBtn">
//           <div>Hello {numberHello}</div>
//           <div>{children}</div>
//           <p>description {numberDescription}</p>
//       </button>
//     )
//   }
// }


// Conditional rendering of the Button component using a ternary operator
export default function Button({
  numberHello,
  numberDescription,
  children = "here is no children",
}) {
  return numberHello === "" ||
    numberHello === null ||
    numberHello === undefined ? (<div></div>) : (
    <button className="TagBtn">
      <div>Hello {numberHello}</div>
      <div>{children}</div>
      <p>description {numberDescription}</p>
    </button>
  );
}
