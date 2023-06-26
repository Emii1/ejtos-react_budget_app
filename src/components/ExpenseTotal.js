import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

//Adding useContext and AppContext. Taking the expenses from state.

const ExpenseTotal = () => {
    const { expenses, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    return(
        <div className='alert alert-primary'>
            <span> sent so far : {currency}{totalExpenses}</span>
        </div>
    );
};
export default ExpenseTotal;
