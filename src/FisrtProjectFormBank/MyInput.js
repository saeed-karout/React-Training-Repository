import {useContext} from 'react';
import { loanFormInputContext } from "../useContext/LoanFormInputContext";
import { userData } from "../useContext/UserContext";

export default function MyInput() {
    const myFormContext = useContext(loanFormInputContext);
    const userContext = useContext(userData);
    return (
        <>
         <label htmlFor={myFormContext.labelname}>{userContext.userName}  {myFormContext.labelname} : </label>
          <input
            type="tel"
            id={myFormContext.labelname}
            value={myFormContext.value}
            onChange={(e) =>
                myFormContext.handleChange(e.target.value )
            }
            placeholder="Enter your phone number"
            required
          />
        </>
    )
}