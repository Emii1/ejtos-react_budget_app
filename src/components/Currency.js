
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { currency, dispatch } = useContext(AppContext);

  const handleChange = (event) => {
    dispatch({ type: 'CHG_CURRENCY', payload: event.target.value });
  };

  return (
    <div className='alert alert-secondary' style={{ backgroundColor: 'lightgreen', color: 'white' }}>
      <span>Currency:</span>
      <select value={currency} onChange={handleChange}>
        <option value='$'>$ Dollar</option>
        <option value='£'>£ Pound</option>
        <option value='€'>€ Euro</option>
        <option value='₹'>₹ Rupee</option>
      </select>
    </div>
  );
};

export default Currency;