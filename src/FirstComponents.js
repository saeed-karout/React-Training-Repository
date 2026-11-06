export default function FirstComponents() {
    let x = 10;

const person ={
    name: "Saeed Karout",
    age: 30,
    city: "Syria"
}
  return (
    <div div style={StyleComponent}>
      <div>
        Mr. {person.name} 
      </div>
    </div>
  )
}



function sayHello() {
    return "Say Hello";
}

const StyleComponent={
    backgroundColor: "blue",
    color: "white",
    fontSize: "20px",
    padding: "10px",
    
    borderRadius: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "10vh",
  
}