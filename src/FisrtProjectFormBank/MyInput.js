import {useContext} from 'react';
import { loanFormInputContext } from "../useContext/LoanFormInputContext";

export default function MyInput() {
    const myFormContext = useContext(loanFormInputContext);
    return (
        <>
         <label htmlFor={myFormContext.labelname}>{myFormContext.labelname} : </label>
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