import {useState} from 'react';
export default function MyInput(){
const [name ,setName] = useState('');
function ChangeName(e){
    
    setName(e.target.value);
}
    return(
        <>
            <h1>Enter your name :</h1>
            <input type="text" value={name} onChange={ChangeName} />

            <hr />

            <h2>My name is : {name}</h2>
        </>
    )
}