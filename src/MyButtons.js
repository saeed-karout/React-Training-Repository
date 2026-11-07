// in react we can not change the value of variable directly because react is a state based framework and it will not re-render the component when we change the value of variable directly. so we need to use state to change the value of variable and re-render the component.


let name = "Saeed";
export default function MyButtons(){

    return(
        <>
            <h1>
                Hello from MyButtons
            </h1> 
            <p> My Name is {name} </p>

            <button onClick={handleChangeName}>
                Change Name
            </button>
        </>
    )
}



function handleChangeName(){
    name = "Ahmad";
}

