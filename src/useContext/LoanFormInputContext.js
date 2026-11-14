import {createContext} from 'react';

export let loanFormInputContext = createContext({
    labelname:'',
    inputValue:null,
    handleChange:null
});