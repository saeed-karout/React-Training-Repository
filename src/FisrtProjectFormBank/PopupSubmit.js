export default function PopupSubmit({ isOpen, onClose, Data }) {
  

  function validateFormData(data) {
    if (!data) return "No data provided.";
    const { phone, age, isEmployee, salary } = data;

    if (!phone || phone.length !== 10) return "Phone number must be 10 digits long.";

    
    if ( age < 18 || age > 65)
      return "Age must be between 18 and 65.";

    if (isEmployee && !salary) return "Please select a salary range.";

    return true; // valid
  }

  const validation = validateFormData(Data);
  const isValid = validation === true;
  const message  = isValid ? "Form submitted successfully!" : validation;
  if (!isOpen) {
    return <></>;
  }else{

      return (
    
        
        <div style={{backgroundColor:'#9f9b9b',display:"flex",padding:'20px', width:"400px",height:"200px",borderRadius:'20px'
            
        }}>
          <div className="popup-content" style={{position:'relative',width:'100%'}}>
            <img src="/close.png"
              alt="close"
              className="close-icon"
              width="20"    
              onClick={onClose}
    
              style={{cursor:'pointer',position:'absolute',top:'0px',right:'0px'}}
              />
            <h2 style={{color: isValid ? 'green' : 'red'}}>{message }</h2>
            {isValid && <p>Your form has been submitted.</p>}
            
          </div>
        </div>
      );
  }
}