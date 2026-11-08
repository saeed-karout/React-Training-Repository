
import { useState } from "react";
export default function MyForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    information: "",
    country: "",
    gender: "",
    checked: false,
  });

  return (
    <>
      <h1>My Form</h1>
      <form onSubmit={()=>{
        alert(`Name: ${formData.name}\nEmail: ${formData.email}\nAge: ${formData.age}\nInformation: ${formData.information}\nCountry: ${formData.country}\nGender: ${formData.gender}
            
            ${JSON.stringify(formData)}
            `);
      }}>
        <h3>Enter your name : </h3>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
        />
        <hr />
        <h3>Enter your email : </h3>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
        />
        <hr />
        <h3>Enter your Age :</h3>
        <input
         type="number"
         value={formData.age}
         onChange={(event) =>{
            setFormData({...formData,age:event.target.value})
         }}
         />
        <hr />
        <h3>Enter some information :</h3>
        <textarea 
        value={formData.information}
        onChange={(e)=>{
            setFormData({...formData,information:e.target.value})
        }}
        ></textarea>
        <hr />
        <h3>Enter your country :</h3>
        <select 
        value={formData.country} 
        onChange={(e)=>{
            setFormData({...formData,country:e.target.value})
        }}
        >
          <option>USA</option>
          <option>Syria</option>
          <option>UK</option>
          <option>Australia</option>
        </select>
        <hr />
        <h3>Enter your gender :</h3>
        <input type="radio" name="gender" value={"male"} checked={formData.gender === "male"} onChange={(e)=>{
            setFormData({...formData,gender:e.target.value})
         }  
        } /> Male
        <input 
        type="radio"
        name="gender"

         value="Female"
         checked={formData.gender === "Female"}
         onChange={(e)=>{
            setFormData({...formData,gender:e.target.value})
         }  
        }
          /> Female
        <hr />



        <h3>Form Data : {JSON.stringify(formData)}</h3>

        <hr />

        <h2>هل انت موافق على السياسات</h2>
        <input type="checkbox" value={formData.checked} onChange={(e)=>{
            setFormData({...formData,checked:e.target.checked})
        }} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
