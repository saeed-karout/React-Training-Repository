import { useState } from "react";
import "./MyForm.css";
import PopupSubmit from "./PopupSubmit";

export default function MyForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    isEmployee: false,
    salary: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const isComplete = Boolean(
    formData.name &&
    formData.phone &&
    formData.age &&
    (formData.isEmployee ? formData.salary : true),
  );

  function handleSubmit(e) {
    e.preventDefault();
   
    setShowPopup(true);
    
  }

  return (
    <>
     
      
      
       <div className="form-container" style={showPopup ? {filter:'blur(5px)'} : {filter:'blur(0px)'}}>
     

      <form onSubmit={handleSubmit}>
        <h1>Requesting a Loan</h1>
        <hr style={{ border: "1px solid #ccc", width: "100%" }} />

        <label htmlFor="name">Name : </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Enter your name"
          required
        />

        <label htmlFor="phone">Phone : </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="Enter your phone number"
          required
        />

        <label htmlFor="age">Age :</label>
        <input
          type="number"
          id="age"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          placeholder="Enter your age"
          required
        />

        <h2>Are you an employee ?</h2>
        <input
          type="checkbox"
          id="isEmployee"
          checked={formData.isEmployee}
          onChange={(e) =>
            setFormData({ ...formData, isEmployee: e.target.checked })
          }
        />

        {formData.isEmployee && (
          <>
            <label htmlFor="salary">Salary :</label>
            <select
              id="salary"
              value={formData.salary}
              onChange={(e) =>
                setFormData({ ...formData, salary: e.target.value })
              }
            >
              <option value="">Select your salary</option>
              <option value="10000-20000">10000-20000</option>
              <option value="20000-30000">20000-30000</option>
              <option value="30000-40000">30000-40000</option>
            </select>
          </>
        )}

        <button
          type="submit"
          className={isComplete && !showPopup ? "submit-button" : "disabled"}
          disabled={!isComplete || showPopup}
        >
          Submit
        </button>
      </form>


      
    </div>

    {showPopup && (
        <div
        onClick={() => setShowPopup(false)}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            position: "fixed",
            height: "100%",
            top: 0,
            left: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 9999,
          }}
        >
          <PopupSubmit
            isOpen={showPopup}
            Data={formData}
            onClose={() => {
                setShowPopup(false)
                setFormData({
                    name: "",
                    phone: "",
                    age: "",
                    isEmployee: false,
                    salary: "",
                })
            }}
          />
        </div>
      )}
      </>
   
  );
}
