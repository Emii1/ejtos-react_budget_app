import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
//wImporting app context and the useContext hook,
// and pass the AppContext to it
const Budget = () => {
    const { budget, remaining, currency, dispatch } = useContext(AppContext);
    const inc = ()=>{
        const newBudget = budget +10;
        if(newBudget > 2000){
            alert(`The value cannot exceed remaining funds: £${remaining}`);
            return;
        }
        dispatch({ type: "SET_BUDGET", payload: newBudget });
    };
    const dec = ()=>{
        const newBudget= budget -10;
        if (newBudget < 960) {
          alert("You cannot reduce the budget value lower than the spending");
          return;
        }
        dispatch({ type: "SET_BUDGET", payload: newBudget });
      };
    return(
        //using the Bootstrap Alert classes to give a gray background
        // by adding some text and hard coding a value
        <div className="alert alert-secondary">
      <span>Budget: {currency}{budget}</span>
      <button onClick={inc}>Inc</button>
      <button onClick={dec}>Dec</button>
    </div>
    );
  };
export default Budget;
