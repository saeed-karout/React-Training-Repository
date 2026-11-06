// Object Destruction in React Props {name, age, email}
export default function PersonProps({name, age, email}){

    
    // const name = props.name;
    // const age = props.age;
    // const email =props.email;

    return(
        <>
        <div style={{backgroundColor: "skyblue", color: "white", padding: "10px", borderRadius: "5px",width:'400px', margin:'20px auto',border:'2px solid black'}}>
            <h1>My name is {name}</h1>
            <h2>My age is {age}</h2>
            <h3>My email is {email}</h3>
        </div>
        </>
    )
}