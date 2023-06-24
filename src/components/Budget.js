import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
//wImporting app context and the useContext hook,
// and pass the AppContext to it
const Budget = () => {
    const { budget } = useContext(AppContext);
    return(
        //using the Bootstrap Alert classes to give a gray background
        // by adding some text and hard coding a value
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>
        </div>
    );

};
export default Budget;
